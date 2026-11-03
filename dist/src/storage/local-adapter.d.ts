import type { LocalStorageConfig, SignedUrlOptions, StorageAdapter, StorageCallOptions, StoreOptions } from './types.js';
export declare class LocalStorageAdapter implements StorageAdapter {
    private readonly config;
    constructor(config: LocalStorageConfig);
    private filePath;
    put(key: string, data: Buffer, options?: StoreOptions): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
        key: string;
        size: number;
        url: string;
        contentType: string | undefined;
    }>;
    get(key: string, options?: StorageCallOptions): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | NonSharedBuffer | null>;
    delete(key: string, options?: StorageCallOptions): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | undefined>;
    deleteMany(keys: string[], options?: StorageCallOptions): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | undefined>;
    exists(key: string, options?: StorageCallOptions): Promise<boolean | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined>>;
    getUrl(key: string): string;
    getSignedUrl(key: string, options?: SignedUrlOptions): Promise<string | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined>>;
    getMetadata(key: string, options?: StorageCallOptions): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
        key: string;
        size: number;
        contentType: string;
        lastModified: Date;
        etag: string;
    } | null>;
    list(prefix: string, options?: StorageCallOptions): Promise<string[] | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }> | import("@arki/failure").Failure<"schema.validator_defect", undefined>>;
}
export declare function createLocalStorageAdapter(config: LocalStorageConfig): LocalStorageAdapter;
//# sourceMappingURL=local-adapter.d.ts.map