import type { FileRow, FilesTable } from './table.js';
/** A row as clients see it: no bucket, key, owner or etag. */
export declare function toFileRecord(row: FileRow<FilesTable>): {
    id: `fil_${string}`;
    mime: string;
    size: number;
    sha256: string | null;
    status: "deleting" | "pending" | "ready";
    createdAt: string;
};
//# sourceMappingURL=record.d.ts.map