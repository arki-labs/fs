import type { FilesTable } from '../lifecycle/table.js';
import type { FilesDb } from './storage.js';
/**
 * Claims due rows with `FOR UPDATE SKIP LOCKED`, so sweepers in several
 * processes run side by side and never take the same row. The claim pushes
 * `cleanup_at` out with backoff (1 min, doubling, at most 1 day) before any
 * delete.
 */
export declare function claimDue(db: FilesDb, files: FilesTable<'pg'>, bucket: string, batch: number): Promise<{
    id: `fil_${string}`;
    key: string;
}[]>;
//# sourceMappingURL=cleanup.d.ts.map