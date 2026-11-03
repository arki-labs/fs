/**
 * `fileStorage`: the files-table lifecycle on Postgres.
 *
 *   createUpload ──► pending ──confirm──► ready ──remove──► deleting ──sweep──► (row gone)
 *
 * The lifecycle is shared (`../lifecycle/storage.ts`); this file holds its
 * Postgres statements. Every deadline comes from the database clock (`now()`).
 */
import type { AnyRelations } from 'drizzle-orm';
import type { PgAsyncDatabase, PgQueryResultHKT } from 'drizzle-orm/pg-core';
import type { FileStorage, FileStorageOptions } from '../lifecycle/storage.js';
import type { FilesTable } from '../lifecycle/table.js';
import type { SignedUploadAdapter } from '../storage/types.js';
/**
 * The root Drizzle database (`PgAsyncDatabase`, as in `@arki/journal`). Pass the
 * root handle, never a transaction: storage I/O must not run inside one.
 */
export type FilesDb = PgAsyncDatabase<PgQueryResultHKT, AnyRelations>;
/**
 * Builds the files lifecycle once, at boot. Synchronous and cheap: it only
 * validates `options` (`ARKI_FS_E001`) and the adapter (`ARKI_FS_E006`).
 *
 * @example
 * ```ts
 * export const storage = fileStorage(db, createR2Storage({ ... }), {
 *   files, bucket: 'uploads', limits: { maxSize: 20_000_000, allowedMime: ['image/*', 'application/pdf'] },
 * });
 * ```
 */
export declare function fileStorage<T extends FilesTable<'pg'>>(db: FilesDb, adapter: SignedUploadAdapter, options: FileStorageOptions<T>): FileStorage<T>;
//# sourceMappingURL=storage.d.ts.map