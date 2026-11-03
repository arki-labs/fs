/** The first line, or undefined for an empty file. Every terminal path closes the stream. */
export declare function readFirstLine(pathToFile: string, options?: {
    signal?: AbortSignal;
}): Promise<string | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_not_found", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | undefined>;
//# sourceMappingURL=read-first-line.d.ts.map