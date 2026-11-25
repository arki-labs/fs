/** Finds files by glob (the `glob` package) and returns typed storage failures. */
import type { GlobOptionsWithFileTypesFalse } from 'glob';
import { storageReadFailure } from '../storage/operation.js';
export type { GlobOptionsWithFileTypesFalse } from 'glob';
/** What `glob`, `globIterate` and `globStream` return instead of throwing. */
type GlobFailure = ReturnType<typeof storageReadFailure>;
/**
 * Lists the paths that match `pattern` (the `glob` package). Unreadable directories are skipped and a missing
 * directory gives no matches. Returns the paths, or a failure: `StorageCancelled` when `options.signal`
 * aborts, and `UnexpectedDefect` for an invalid option set (for example `matchBase` with `noglobstar`).
 */
export declare function glob(pattern: string | string[], options?: GlobOptionsWithFileTypesFalse): Promise<string[] | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined>>;
/**
 * Yields the matching paths one at a time. It never throws: the generator's return value is `undefined`
 * when the walk finished, or the same failure `glob` returns. The span covers the whole walk and ends
 * early when the caller stops iterating.
 *
 * @example
 * ```ts
 * const paths = globIterate('**\/*.md', { cwd: 'docs' });
 * let next = await paths.next();
 * for (; !next.done; next = await paths.next()) console.info(next.value);
 * if (isFailure(next.value)) return next.value;
 * ```
 */
export declare function globIterate(pattern: string | string[], options?: GlobOptionsWithFileTypesFalse): AsyncGenerator<string, GlobFailure | undefined, undefined>;
/**
 * The matching paths as a web `ReadableStream`. It never errors: a failure arrives as the last chunk, the
 * same failure `glob` returns, and then the stream closes. Cancelling the stream stops the walk.
 */
export declare function globStream(pattern: string | string[], options?: GlobOptionsWithFileTypesFalse): import("node:stream/web").ReadableStream<string | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined>>;
//# sourceMappingURL=glob.d.ts.map