import { readFileSync } from 'node:fs';
import iconv from 'iconv-lite';
import { getLogger } from '@arki/log';
const log = getLogger('arki:fs');
/**
 * Reads a whole file synchronously and decodes it. This is a load-time reader (bundled data files), so it keeps
 * a documented throw instead of returning a failure.
 *
 * @throws The Node system error (`ENOENT`, `EACCES`, ...) when the file cannot be read, or the iconv-lite
 * error when `encoding` is unknown.
 */
export const readFile = (pathToFile, encoding) => {
    log.debug('reading file {encoding}', { encoding });
    const buffer = readFileSync(pathToFile);
    if (encoding === 'utf8') {
        return buffer.toString();
    }
    return iconv.decode(buffer, encoding);
};
//# sourceMappingURL=read-file.js.map