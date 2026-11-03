/**
 * The files lifecycle as one behavior suite, run against every dialect: PGlite
 * (`../pg/storage.test.ts`) and libSQL (`../sqlite/storage.test.ts`), each with
 * the memory adapter. Every step of the plan's § 5 and every error code has a
 * case here; the races on a real Postgres live in `../pg/files.pg.test.ts`.
 * Time passing is simulated by moving a row's deadlines into the past.
 */
import type { MockInstance } from 'vitest';
import type { IdOf } from '@arki/contracts';
import type { Dialect } from '@arki/db/columns';
import type { FileId } from '../files/types.js';
import type { SignedUploadAdapter } from '../storage/types.js';
import type { FileStorage, FileStorageOptions } from './storage.js';
import type { FileRow, FilesTable } from './table.js';
export declare const userId: import("@arki/contracts").IdDeclaration<"usr_">;
export type UserId = IdOf<typeof userId>;
/** The suite's table on either dialect. */
export type UserFiles = FilesTable<Dialect, UserId>;
export type StorageSetup = Omit<FileStorageOptions<UserFiles>, 'files'>;
/** What the suite needs from one dialect: its `fileStorage` and a few direct reads and writes. */
export type StorageHarness = {
    storage: (adapter: SignedUploadAdapter, options: StorageSetup) => FileStorage<UserFiles>;
    spyOnInsert: () => MockInstance;
    row: (id: FileId) => Promise<FileRow<UserFiles> | undefined>;
    rowCount: () => Promise<number>;
    /** The newest pending row of `bucket`. */
    newestPending: (bucket: string) => Promise<FileId | undefined>;
    /** Time passes: the PUT URL expired two hours ago and the grace ran out a second ago. */
    expire: (id: FileId) => Promise<void>;
    /** Moves `cleanup_at` to `offsetMs` from now (database time); negative is overdue. */
    dueIn: (id: FileId, offsetMs: number) => Promise<void>;
    setStatus: (id: FileId, status: 'deleting') => Promise<void>;
    setAttempts: (id: FileId, attempts: number) => Promise<void>;
};
/** Runs the whole lifecycle suite on one dialect; `label` names it in the test output. */
export declare function describeFileStorage(label: string, harness: StorageHarness): void;
//# sourceMappingURL=storage.behavior.d.ts.map