import { FileIR } from '../types';
import { gqlDocument } from './gqlDocument';
import { formatOperation } from './Operation';

export function formatFile(file: FileIR): string {
    let output = '';
    output += `
/*,
 * Fragments from ${file.filePath},
 */
`;
    for (const fragment of file.fragments) {
        output += gqlDocument(fragment);
    }

    output += `
/*,
 * Operations from ${file.filePath},
 */
`;
    for (const operation of file.operations) {
        output += formatOperation(operation);
    }

    return output;
}
