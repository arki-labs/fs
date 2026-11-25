export declare function storageErrorFacts(cause: unknown): {
    code?: string | undefined;
    name?: string | undefined;
    $metadata?: {
        httpStatusCode?: number | undefined;
    } | undefined;
} | undefined;
export declare function storageReadFailure(error: unknown, signal?: AbortSignal): import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined>;
export declare function storageWriteFailure(error: unknown): import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined>;
/** No paths, keys, URLs, names or private causes are reported. SDKs remain application-owned. */
export declare function observeFs<T>(operation: string, run: () => T | Promise<T>): Promise<T>;
/** The synchronous twin of {@link observeFs}: the same span, metrics and failure code for a sync operation. */
export declare function observeFsSync<T>(operation: string, run: () => T): T;
/** The operation owns otherwise unclassified policy, observer and implementation throws. */
export declare function executeFs<T>(operation: string, run: () => T | Promise<T>): Promise<T | import("@arki/failure").Failure<"failure.unexpected_defect", undefined>>;
//# sourceMappingURL=operation.d.ts.map