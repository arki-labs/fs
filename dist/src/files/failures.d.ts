/**
 * The file is missing, belongs to another bucket binding, or the policy denied
 * the call. One failure for all three on purpose, so a caller cannot probe which
 * files exist; the debug log says which it was. `fileId` is the id the caller
 * asked for, and is absent when the policy refused a new upload.
 * @fix Check the file id and that this user may use the file.
 * @verify bun run test -- src/files/files.test.ts
 */
export declare const FileUnavailable: import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
    fileId?: `fil_${string}` | undefined;
}, {
    fileId?: `fil_${string}` | undefined;
}>>;
/** Declared refusals of upload creation, including failure before an object key or row exists. */
export declare const CREATE_UPLOAD_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
    fileId?: `fil_${string}` | undefined;
}, {
    fileId?: `fil_${string}` | undefined;
}>>, import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined>];
/** Confirm came before the PUT finished. The row stays pending, so confirming again later is fine.
 * @fix Finish the PUT to the ticket URL, then confirm again.
 * @verify bun run test -- src/files/files.test.ts
 */
export declare const UploadPending: import("@arki/failure").FailureDefinition<"fs.upload_pending", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
}, {
    fileId: `fil_${string}`;
}>>;
/**
 * The file is not in the state the call needs: a URL for a file that is not
 * ready, a confirm on a file being deleted, or a confirm after the window passed.
 * The debug log says which.
 * @fix Confirm a pending upload before you ask for its URL; a deleted or expired upload needs a new upload.
 * @verify bun run test -- src/files/files.test.ts
 */
export declare const FileWrongState: import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
}, {
    fileId: `fil_${string}`;
}>>;
/** The stored size, type or hash differs from the upload request. The row is now deleting.
 * @fix Upload the file again, with the size and type the upload request declared.
 * @verify bun run test -- src/files/files.test.ts
 */
export declare const UploadMismatch: import("@arki/failure").FailureDefinition<"fs.upload_mismatch", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
    reason: string;
}, {
    fileId: `fil_${string}`;
    reason: string;
}>>;
export declare const CONFIRM_UPLOAD_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
    fileId?: `fil_${string}` | undefined;
}, {
    fileId?: `fil_${string}` | undefined;
}>>, import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
}, {
    fileId: `fil_${string}`;
}>>, import("@arki/failure").FailureDefinition<"fs.upload_pending", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
}, {
    fileId: `fil_${string}`;
}>>, import("@arki/failure").FailureDefinition<"fs.upload_mismatch", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
    reason: string;
}, {
    fileId: `fil_${string}`;
    reason: string;
}>>, import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined>];
export declare const FILE_URL_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
    fileId?: `fil_${string}` | undefined;
}, {
    fileId?: `fil_${string}` | undefined;
}>>, import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
}, {
    fileId: `fil_${string}`;
}>>, import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>];
export declare const REMOVE_FILE_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
    fileId?: `fil_${string}` | undefined;
}, {
    fileId?: `fil_${string}` | undefined;
}>>, import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined>];
export declare const UPLOAD_FILE_FAILURES: readonly [import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
    fileId?: `fil_${string}` | undefined;
}, {
    fileId?: `fil_${string}` | undefined;
}>>, import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined>, import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
    fileId?: `fil_${string}` | undefined;
}, {
    fileId?: `fil_${string}` | undefined;
}>>, import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
}, {
    fileId: `fil_${string}`;
}>>, import("@arki/failure").FailureDefinition<"fs.upload_pending", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
}, {
    fileId: `fil_${string}`;
}>>, import("@arki/failure").FailureDefinition<"fs.upload_mismatch", import("@standard-schema/spec").StandardSchemaV1<{
    fileId: `fil_${string}`;
    reason: string;
}, {
    fileId: `fil_${string}`;
    reason: string;
}>>, import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined>, import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}>>, import("@arki/failure").FailureDefinition<"schema.async_required", undefined>, import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>, import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined>, import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined>];
//# sourceMappingURL=failures.d.ts.map