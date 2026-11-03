/** The requested local file does not exist.
 * @fix Correct the filename or create the file before reading it.
 * @verify bun run test -- src/local/read-first-line.test.ts
 */
export declare const StorageNotFound: import("@arki/failure").FailureDefinition<"fs.storage_not_found", undefined>;
/** A read could not reach its storage backend.
 * @fix Restore connectivity or filesystem availability before choosing a new attempt.
 * @verify bun run test -- src/storage/outcomes.test.ts
 */
export declare const StorageUnavailable: import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>;
/** Storage explicitly refused an operation without confirming a write.
 * @fix Correct permissions, the object key or the provider request.
 * @verify bun run test -- src/storage/outcomes.test.ts
 */
export declare const StorageRejected: import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>;
/** An external write may have happened, but its final state was not confirmed.
 * @fix Reconcile the object or durable file row before retrying; cancellation does not undo a write.
 * @verify bun run test -- src/storage/outcomes.test.ts
 */
export declare const StorageWriteUncertain: import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined>;
/** Cancellation prevented the next phase or stopped a read; acknowledged earlier writes remain.
 * @fix Respect cancellation and reconcile earlier upload tickets or durable rows before another attempt.
 * @verify bun run test -- src/storage/outcomes.test.ts
 */
export declare const StorageCancelled: import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>;
/** Read/signing operations perform no external write. */
export declare const STORAGE_READ_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>];
/** Dispatched writes preserve uncertainty instead of claiming that nothing happened. */
export declare const STORAGE_WRITE_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined>];
export declare const FILE_READ_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.storage_not_found", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>];
//# sourceMappingURL=failures.d.ts.map