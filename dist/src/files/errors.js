import { z } from 'zod';
/**
 * Every fault the files table throws on purpose is a {@link FileStorageError}
 * with a stable `code`. Match on the code, never on the message. Expected
 * outcomes (a missing file, an unfinished upload) are returned instead: see
 * `failures.ts`.
 */
/** Stable error codes of `@arki/fs/files` and `@arki/fs/pg`. E002–E005 and E007 are retired: those outcomes are returned failures now. */
export const FILE_ERROR_CODES = {
    /** Bad input or config: TTL over the cap, size over the limit, mime not allowed.
     * @fix Correct the requested TTL, file size, MIME type or storage configuration to match the configured limits.
     * @verify bun run test -- src/files/files.test.ts
     */
    invalid: 'ARKI_FS_E001',
    /** The adapter cannot sign uploads (the local adapter).
     * @fix Use an adapter supporting signed uploads, or upload through the local adapter supported path.
     * @verify bun run test -- src/files/files.test.ts
     */
    unsupported: 'ARKI_FS_E006',
};
/** A coded failure of the files table or one of its adapters. */
export class FileStorageError extends Error {
    code;
    constructor(code, message, options) {
        super(message, options);
        this.name = 'FileStorageError';
        this.code = code;
    }
}
/** Source schema that recognises a {@link FileStorageError} (A-39: schemas own the check on unknown values). */
export const fileStorageError = z.instanceof(FileStorageError);
//# sourceMappingURL=errors.js.map