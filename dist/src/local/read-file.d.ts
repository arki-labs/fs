/**
 * Reads a whole file synchronously and decodes it. This is a load-time reader (bundled data files), so it keeps
 * a documented throw instead of returning a failure.
 *
 * @throws The Node system error (`ENOENT`, `EACCES`, ...) when the file cannot be read, or the iconv-lite
 * error when `encoding` is unknown.
 */
export declare const readFile: (pathToFile: string, encoding: string) => string;
//# sourceMappingURL=read-file.d.ts.map