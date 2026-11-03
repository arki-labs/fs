/**
 * `fileStorage`: the files-table lifecycle on SQLite (libSQL).
 *
 *   createUpload ──► pending ──confirm──► ready ──remove──► deleting ──sweep──► (row gone)
 *
 * The lifecycle is shared (`../lifecycle/storage.ts`); this file holds its
 * SQLite statements. As on Postgres, every deadline comes from the database
 * clock. `instant` columns are integer milliseconds on SQLite, so deadlines
 * are millisecond arithmetic: `max()` for `greatest`, `+ ms` for intervals.
 */
import type { AnyRelations } from 'drizzle-orm';
import type { LibSQLDatabase } from 'drizzle-orm/libsql';
import type { FileStorage, FileStorageOptions } from '../lifecycle/storage.js';
import type { FilesTable } from '../lifecycle/table.js';
import type { SignedUploadAdapter } from '../storage/types.js';
/**
 * The root Drizzle database (`createLibsqlDb` from `@arki/db/libsql`). Pass the
 * root handle, never a transaction: storage I/O must not run inside one.
 */
export type FilesDb = LibSQLDatabase<AnyRelations>;
/**
 * Builds the files lifecycle once, at boot. Synchronous and cheap: it only
 * validates `options` (`ARKI_FS_E001`) and the adapter (`ARKI_FS_E006`).
 *
 * @example
 * ```ts
 * const { db } = createLibsqlDb({ url: 'file:app.db', relations });
 * export const storage = fileStorage(db, createR2Storage({ ... }), {
 *   files, bucket: 'uploads', limits: { maxSize: 20_000_000, allowedMime: ['image/*', 'application/pdf'] },
 * });
 * ```
 */
export declare function fileStorage<T extends FilesTable<'sqlite'>>(db: FilesDb, adapter: SignedUploadAdapter, options: FileStorageOptions<T>): FileStorage<T>;
//# sourceMappingURL=storage.d.ts.map