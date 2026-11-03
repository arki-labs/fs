import type { ColumnKit, Dialect } from '@arki/db/columns';
import type { IdColumnSource } from '@arki/db/id';
export type FilesTableOptions<TOwner extends string> = {
    /** The owner id kind, e.g. the app's `defineId('usr_')`. Its type becomes `ownerId`'s type. */
    owner: IdColumnSource<TOwner>;
    /** Table name. Default `'files'`. Also prefixes the constraint and index names. */
    name?: string;
};
/**
 * The files table: one row per stored object, written before any byte is.
 * No foreign key on `owner_id`: deleting an owner must not drop the row that
 * carries the cleanup duty. The kit picks the dialect and where the table
 * lives: `pgColumns(schema?)` or `sqliteColumns({ prefix? })`.
 *
 * @example
 * ```ts
 * export const files = filesTable(pgColumns(), { owner: userId });
 * ```
 */
export declare function filesTable<D extends Dialect, TOwner extends string>(c: ColumnKit<D>, options: FilesTableOptions<TOwner>): import("@arki/db/columns").TableOf<D, string, {
    /** `fil_` + 24 random characters. */
    id: import("@arki/db/columns").ColumnSpec<D, "id", Omit<import("@arki/db/columns").NoFlags & {
        notNull: true;
    } & {
        primaryKey: true;
    }, "type"> & {
        type: `fil_${string}`;
    } & {
        default: true;
        defaultFn: true;
    }>;
    ownerId: import("@arki/db/columns").ColumnSpec<D, "id", Omit<import("@arki/db/columns").NoFlags & {
        notNull: true;
    }, "type"> & {
        type: TOwner;
    }>;
    /** The binding name from `fileStorage(..., { bucket })`, e.g. `'uploads'`. */
    bucket: import("@arki/db/columns").ColumnSpec<D, "text", import("@arki/db/columns").NoFlags & {
        notNull: true;
    }>;
    /** `${keyPrefix}/${id}`. Derived by the server, never sent by a client. */
    key: import("@arki/db/columns").ColumnSpec<D, "text", import("@arki/db/columns").NoFlags & {
        notNull: true;
    }>;
    mime: import("@arki/db/columns").ColumnSpec<D, "text", import("@arki/db/columns").NoFlags & {
        notNull: true;
    }>;
    size: import("@arki/db/columns").ColumnSpec<D, "bigint", import("@arki/db/columns").NoFlags & {
        notNull: true;
    }>;
    /** Lowercase hex. Only set with `verify: 'hash'`. */
    sha256: import("@arki/db/columns").ColumnSpec<D, "char", {
        enum: [string, ...string[]];
    }>;
    etag: import("@arki/db/columns").ColumnSpec<D, "text", {
        enum: [string, ...string[]];
    }>;
    status: import("@arki/db/columns").ColumnSpec<D, "text", {
        enum: ["pending", "ready", "deleting"];
    } & {
        notNull: true;
    } & {
        default: true;
    }>;
    /** When the PUT URL dies (database time). */
    expiresAt: import("@arki/db/columns").ColumnSpec<D, "instant", import("@arki/db/columns").NoFlags & {
        notNull: true;
    }>;
    /** When the sweep may act. Null on ready rows. */
    cleanupAt: import("@arki/db/columns").ColumnSpec<D, "instant", import("@arki/db/columns").NoFlags>;
    cleanupAttempts: import("@arki/db/columns").ColumnSpec<D, "integer", import("@arki/db/columns").NoFlags & {
        notNull: true;
    } & {
        default: true;
    }>;
    createdAt: import("@arki/db/columns").ColumnSpec<D, "instant", import("@arki/db/columns").NoFlags & {
        notNull: true;
    } & {
        default: true;
    }>;
    confirmedAt: import("@arki/db/columns").ColumnSpec<D, "instant", import("@arki/db/columns").NoFlags>;
}>;
/**
 * The files table of dialect `D` with owner ids `TOwner`. The defaults give any
 * files table: use it as the bound of generic code, `T extends FilesTable`.
 * Distributed over `D`, so the default is one table per dialect, never one
 * table of a mixed dialect.
 */
export type FilesTable<D extends Dialect = Dialect, TOwner extends string = string> = D extends Dialect ? ReturnType<typeof filesTable<D, TOwner>> : never;
/** A row of the files table `T`. */
export type FileRow<T extends FilesTable> = T['$inferSelect'];
/** The owner id type of the files table `T`, e.g. `` `usr_${string}` ``. */
export type OwnerOf<T extends FilesTable> = FileRow<T>['ownerId'];
//# sourceMappingURL=table.d.ts.map