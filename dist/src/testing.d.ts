import type { SignedUrlOptions, StoredFile, StoredFileMetadata, StoreOptions } from './storage/types.js';
export type MemoryUploadAdapter = ReturnType<typeof memoryUploadAdapter>;
declare function getUrl(key: string): string;
/** An in-memory store with signed uploads. One instance per test. */
export declare function memoryUploadAdapter(): {
    capabilities: {
        signedPut: true;
    };
    put(key: string, data: Buffer, options?: StoreOptions): Promise<StoredFile>;
    get(key: string): Promise<Buffer | null>;
    delete(key: string): Promise<void>;
    deleteMany(keys: string[]): Promise<void>;
    exists(key: string): Promise<boolean>;
    getUrl: typeof getUrl;
    getSignedUrl(key: string, options?: SignedUrlOptions): Promise<string>;
    getMetadata(key: string): Promise<StoredFileMetadata | null>;
    list(prefix: string): Promise<string[]>;
    browserPut(url: string, body: Uint8Array, headers: Record<string, string>): Promise<Response>;
};
export {};
//# sourceMappingURL=testing.d.ts.map