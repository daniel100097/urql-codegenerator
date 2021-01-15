import { OperationIR } from '../types';
import { _snake2Pascal } from './format';

export function formatOperation(operation: OperationIR): string {
    const { name, operationType, gqlExpression, fragments } = operation;

    let gqlFragments = fragments
        ? fragments.map((it) => '${_gql_' + it + '}').join('\n')
        : '';

    let gql = 'gql`' + gqlExpression + gqlFragments + '`';

    const operationName = _snake2Pascal(`${operationType}_${name}`);
    const operationDataPrefix = _snake2Pascal(`${name}`);

    const dataName = _snake2Pascal(`${operationDataPrefix}_${operationType}`);

    const hookDataInterface = `${_snake2Pascal(
        `${operationDataPrefix}_${operationType}_variables`
    )}`;

    const hookName = `use${operationName}`;

    if (operationType === 'query') {
        return `
    ${hookName}.Document = ${gql} as DocumentNode;
    
    export function ${hookName}(options: Omit<Urql.UseQueryArgs<${hookDataInterface}>, 'query'>  = {}){
      return Urql.useQuery<${dataName}>({query: ${hookName}.Document, ...queryDefaultOptions, ...options});
    }
      
    `;
    }

    if (operationType === 'mutation') {
        return `
    ${hookName}.Document = ${gql} as DocumentNode;
    
    export function use${operationName}(){
      return Urql.useMutation<${dataName}, ${hookDataInterface}>(${hookName}.Document);
    }
      
    `;
    }

    throw new Error(`Unknown operation ${operationName}`);
}
