/** Deletes files and folders by glob (the `del` package) and returns typed storage failures. */
import type { ProgressData as DelProgressData, Options } from 'del';
export type { Options } from 'del';
/**
 * The progress `del` reports to `options.onProgress` after each deleted path.
 *
 * @example
 * ```ts
 * import type { ProgressData } from '@arki/fs/local/delete';
 * import { deleteAsync } from '@arki/fs/local/delete';
 *
 * const onProgress = (progress: ProgressData) => progress.percent; // 0 to 1
 * const deleted = await deleteAsync('tmp/*.log', { onProgress });
 * ```
 */
export type ProgressData = DelProgressData;
/**
 * Deletes the files and directories that match `patterns` (the `del` package). Returns the deleted paths, or
 * a failure: `StorageRejected` for a path outside the working directory (pass `force: true` or a `cwd`), a
 * permission error or a read-only file system; `StorageWriteUncertain` when some paths may already be gone.
 */
export declare function deleteAsync(patterns: string | readonly string[], options?: Options): Promise<string[] | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined>>;
/** The synchronous form of {@link deleteAsync}: the same paths, failures, span and metric. */
export declare function deleteSync(patterns: string | readonly string[], options?: Options): string[] | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined>;
//# sourceMappingURL=delete.d.ts.map