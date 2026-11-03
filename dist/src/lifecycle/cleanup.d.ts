import type { SignedUploadAdapter } from '../storage/types.js';
import type { FileStatements } from './statements.js';
import type { FilesTable } from './table.js';
export type CleanupOptions = {
    batch?: number;
};
export type CleanupResult = {
    removed: number;
    failed: number;
    more: boolean;
};
export declare function cleanupOrphans<T extends FilesTable>(statements: FileStatements<T>, adapter: SignedUploadAdapter, options?: CleanupOptions): Promise<import("@arki/failure").Failure<"contracts.random_source_unavailable", undefined> | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
    removed: number;
    failed: number;
    more: boolean;
}>;
//# sourceMappingURL=cleanup.d.ts.map