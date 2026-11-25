/**
 * Reads a whole file and decodes it with `encoding` (`utf8`, `latin1`, `win1252`, any iconv-lite name).
 * Returns the text, or a failure: `StorageNotFound` for a missing path, `StorageRejected` for an unknown
 * encoding or a refused read (`EACCES`, a directory), `StorageUnavailable` for an I/O fault and
 * `StorageCancelled` when `signal` aborts.
 */
export declare const readFile: (pathToFile: string, encoding: string, options?: {
    signal?: AbortSignal;
}) => Promise<string | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_not_found", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined>>;
//# sourceMappingURL=read-file.d.ts.map