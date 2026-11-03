/**
 * Storage - Factory
 *
 * Creates storage instances based on configuration
 */
import type { StorageConfig } from './types.js';
export { createLocalStorageAdapter } from './local-adapter.js';
export { createS3StorageAdapter } from './s3-adapter.js';
export { createR2Storage } from './r2.js';
export type { R2StorageConfig } from './r2.js';
export type * from './types.js';
export * from './failures.js';
/**
 * Create a storage instance based on the provided configuration
 *
 * Automatically selects the appropriate adapter (local or S3) based on
 * the provider specified in the config.
 *
 * @example
 * ```ts
 * // Local storage
 * const storage = createStorage({
 *   provider: 'local',
 *   basePath: '/var/data/uploads',
 *   baseUrl: 'https://cdn.example.com/uploads'
 * });
 *
 * // S3 storage
 * const storage = createStorage({
 *   provider: 's3',
 *   bucket: 'my-bucket',
 *   prefix: 'uploads',
 *   baseUrl: 'https://cdn.example.com'
 * });
 * ```
 */
export declare function createStorage(config: StorageConfig): import("./local-adapter.js").LocalStorageAdapter | import("./s3-adapter.js").S3StorageAdapter;
//# sourceMappingURL=index.d.ts.map