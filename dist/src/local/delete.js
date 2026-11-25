import { deleteAsync as deletePaths, deleteSync as deletePathsSync } from 'del';
import { z } from 'zod';
import { StorageRejected } from '../storage/failures.js';
import { observeFs, observeFsSync, storageWriteFailure } from '../storage/operation.js';
/** `del` refuses to delete the working directory or a path outside it with this error. */
const outsideWorkingDirectory = z.object({ name: z.literal('PresentableError') });
function deleteFailure(error) {
    return outsideWorkingDirectory.safeParse(error).success
        ? StorageRejected({ cause: error })
        : storageWriteFailure(error);
}
/**
 * Deletes the files and directories that match `patterns` (the `del` package). Returns the deleted paths, or
 * a failure: `StorageRejected` for a path outside the working directory (pass `force: true` or a `cwd`), a
 * permission error or a read-only file system; `StorageWriteUncertain` when some paths may already be gone.
 */
export function deleteAsync(patterns, options) {
    return observeFs('fs.local.delete_paths', async () => {
        try {
            return await deletePaths(patterns, options);
        }
        catch (error) {
            return deleteFailure(error);
        }
    });
}
/** The synchronous form of {@link deleteAsync}: the same paths, failures, span and metric. */
export function deleteSync(patterns, options) {
    return observeFsSync('fs.local.delete_paths', () => {
        try {
            return deletePathsSync(patterns, options);
        }
        catch (error) {
            return deleteFailure(error);
        }
    });
}
//# sourceMappingURL=delete.js.map