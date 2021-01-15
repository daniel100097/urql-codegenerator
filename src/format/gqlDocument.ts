import { FragmentIR } from '../types';

export function gqlDocument(fragmentType: FragmentIR): string {
    const { name, gqlExpression } = fragmentType;
    return `const _gql_${name} = gql\`${gqlExpression}\`\n`;
}
