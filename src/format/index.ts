import { PluginIR } from '../types';
import { disclaimer, imports, boilerplate } from './Boilerplate';
import { formatFile } from './File';

export function format(plugin: PluginIR): string {
    return [
        disclaimer,
        imports,
        '',
        ...plugin.files.map(formatFile),
        '',
        boilerplate,
    ].join('\n');
}
