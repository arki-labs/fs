/** A row as clients see it: no bucket, key, owner or etag. */
export function toFileRecord(row) {
    return {
        id: row.id,
        mime: row.mime,
        size: row.size,
        sha256: row.sha256,
        status: row.status,
        createdAt: row.createdAt.toString(),
    };
}
//# sourceMappingURL=record.js.map