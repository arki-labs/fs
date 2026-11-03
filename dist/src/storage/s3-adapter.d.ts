import type { S3StorageConfig, SignedUploadAdapter, SignedUrlOptions, StorageCallOptions, StoreOptions } from './types.js';
export declare class S3StorageAdapter implements SignedUploadAdapter {
    private readonly config;
    readonly capabilities: {
        readonly signedPut: true;
    };
    private readonly client;
    constructor(config: S3StorageConfig);
    put(key: string, data: Buffer, options?: StoreOptions): Promise<import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | {
        key: string;
        size: number;
        url: string;
        contentType: string | undefined;
        etag: string | undefined;
    }>;
    get(key: string, options?: StorageCallOptions): Promise<Buffer<ArrayBuffer> | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | null>;
    delete(key: string, options?: StorageCallOptions): Promise<import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | undefined>;
    deleteMany(keys: string[], options?: StorageCallOptions): Promise<import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | undefined>;
    exists(key: string, options?: StorageCallOptions): Promise<boolean | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined>>;
    getUrl(key: string): string;
    getSignedUrl(key: string, options?: SignedUrlOptions): Promise<string | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined>>;
    getMetadata(key: string, options?: StorageCallOptions): Promise<import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | {
        key: string;
        size: number;
        contentType: string;
        lastModified: Date;
        etag: string;
    } | null>;
    list(prefix: string, options?: StorageCallOptions): Promise<string[] | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined>>;
    private getFullKey;
}
export declare function createS3StorageAdapter(config: S3StorageConfig): S3StorageAdapter;
//# sourceMappingURL=s3-adapter.d.ts.map