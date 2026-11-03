import type { FileId, UploadRequest } from '../files/types.js';
import type { SignedUploadAdapter } from '../storage/types.js';
import type { CleanupOptions } from './cleanup.js';
import type { FileStatements, StatementConfig } from './statements.js';
import type { FileRow, FilesTable, OwnerOf } from './table.js';
/** Who may do what. Every check gets the acting owner id. */
export type FilePolicy<T extends FilesTable> = {
    /** Default: everyone may create. */
    canCreate?: (actor: OwnerOf<T>, request: UploadRequest) => boolean | Promise<boolean>;
    /** Default: the owner only. */
    canRead?: (file: FileRow<T>, actor: OwnerOf<T>) => boolean | Promise<boolean>;
    /** Default: the owner only. */
    canRemove?: (file: FileRow<T>, actor: OwnerOf<T>) => boolean | Promise<boolean>;
};
export type FileStorageOptions<T extends FilesTable> = {
    files: T;
    /** Stable binding name stored in every row, e.g. `'uploads'`. Rows of another binding are invisible. */
    bucket: string;
    /** Key prefix. Default `'files'`. Keys are `${keyPrefix}/${fileId}`. */
    keyPrefix?: string;
    /** Required. `allowedMime` takes exact types and `type/*` wildcards. */
    limits: {
        maxSize: number;
        allowedMime: readonly string[];
    };
    /** Life of a PUT URL. Default 300. */
    uploadTtlSeconds?: number;
    /** Default life of a GET URL. Default 300. */
    urlTtlSeconds?: number;
    /** Longest GET URL a caller may ask for; longer is rejected, never clamped. Default 3600. */
    maxUrlTtlSeconds?: number;
    /** How long after a PUT URL expires an upload may still land. Default 900. */
    graceSeconds?: number;
    /** `'head'` (default) checks size and type; `'hash'` also downloads the object and stores its SHA-256. */
    verify?: 'head' | 'hash';
    policy?: FilePolicy<T>;
};
/** Inferred from the owned implementation; underlying Failure kinds cannot be erased. */
export type FileStorage<T extends FilesTable> = ReturnType<typeof createFileStorage<T>>;
export type FileUrlOptions = {
    expiresIn?: number;
    disposition?: 'inline' | 'attachment';
    filename?: string;
};
/**
 * Builds the files lifecycle once, at boot, on a dialect's statements.
 * Synchronous and cheap: it only validates `options` (`ARKI_FS_E001`) and the
 * adapter (`ARKI_FS_E006`). Apps call `fileStorage` from `@arki/fs/pg` or
 * `@arki/fs/sqlite`, which pass their statements here.
 */
export declare function createFileStorage<T extends FilesTable>(adapter: SignedUploadAdapter, options: FileStorageOptions<T>, statementsFor: (config: StatementConfig) => FileStatements<T>): {
    createUpload(actor: OwnerOf<T>, request: UploadRequest): Promise<import("@arki/failure").Failure<"contracts.random_source_unavailable", undefined> | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.file_unavailable", {
        fileId?: `fil_${string}` | undefined;
    }> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
        fileId: `fil_${string}`;
        url: string;
        method: "PUT";
        headers: Record<string, string>;
        expiresAt: string;
    }>;
    confirmUpload(actor: OwnerOf<T>, id: FileId): Promise<import("@arki/failure").Failure<"contracts.random_source_unavailable", undefined> | import("@arki/failure").Failure<"fs.file_unavailable", {
        fileId?: `fil_${string}` | undefined;
    }> | import("@arki/failure").Failure<"fs.file_wrong_state", {
        fileId: `fil_${string}`;
    }> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"fs.upload_mismatch", {
        fileId: `fil_${string}`;
        reason: string;
    }> | import("@arki/failure").Failure<"fs.upload_pending", {
        fileId: `fil_${string}`;
    }> | FileRow<T> | import("../storage/types.js").StorageReadFailure>;
    get(actor: OwnerOf<T>, id: FileId): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.file_unavailable", {
        fileId?: `fil_${string}` | undefined;
    }> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | FileRow<T>>;
    url(actor: OwnerOf<T>, id: FileId, options?: FileUrlOptions): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.file_unavailable", {
        fileId?: `fil_${string}` | undefined;
    }> | import("@arki/failure").Failure<"fs.file_wrong_state", {
        fileId: `fil_${string}`;
    }> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
        url: string;
        expiresAt: string;
    }>;
    remove(actor: OwnerOf<T>, id: FileId): Promise<import("@arki/failure").Failure<"contracts.random_source_unavailable", undefined> | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.file_unavailable", {
        fileId?: `fil_${string}` | undefined;
    }> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
        physical: 'scheduled';
    } | {
        physical: 'done';
    }>;
    cleanupOrphans(cleanupOptions?: CleanupOptions): Promise<import("@arki/failure").Failure<"contracts.random_source_unavailable", undefined> | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
        removed: number;
        failed: number;
        more: boolean;
    }>;
};
//# sourceMappingURL=storage.d.ts.map