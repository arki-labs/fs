import type { FilesTable } from '../lifecycle/table.js';
import type { FilesDb } from './storage.js';
/**
 * Claims due rows with one `UPDATE … WHERE id IN (SELECT … LIMIT n) RETURNING`
 * inside a write transaction. SQLite has one writer and no `SKIP LOCKED`:
 * libSQL opens the transaction with `BEGIN IMMEDIATE`, which takes the only
 * write lock, so sweepers in different processes take turns instead of running
 * side by side. Each still claims rows no other sweeper holds, because a claim
 * moves `cleanup_at` past now before the lock is released.
 *
 * The claim pushes `cleanup_at` out with backoff (1 min, doubling, at most
 * 1 day), in milliseconds: `instant` columns are integer milliseconds here.
 */
export declare function claimDue(db: FilesDb, files: FilesTable<'sqlite'>, bucket: string, batch: number): Promise<{
    id: `fil_${string}`;
    key: string;
}[]>;
//# sourceMappingURL=cleanup.d.ts.map