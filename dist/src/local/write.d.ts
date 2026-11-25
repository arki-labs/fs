/**
 * Appends `data` to the end of a file, creating the file when it is missing. Returns nothing on success, or
 * a failure: `StorageRejected` when nothing was written (a missing directory, `EACCES`, a read-only file
 * system) and `StorageWriteUncertain` when the append may have partly happened (`ENOSPC`, an I/O fault).
 */
export declare function writeToTheFileEnd(pathToFile: string, data: string | Uint8Array): Promise<import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | undefined>;
//# sourceMappingURL=write.d.ts.map