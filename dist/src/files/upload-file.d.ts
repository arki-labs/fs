import type { FailureOf } from '@arki/failure';
import type { CONFIRM_UPLOAD_FAILURES, CREATE_UPLOAD_FAILURES } from './failures.js';
import type { FileRecord, UploadTicket } from './schemas.js';
import type { FileId, UploadRequest } from './types.js';
export type UploadClient = {
    createUpload(input: UploadRequest): Promise<UploadTicket | FailureOf<(typeof CREATE_UPLOAD_FAILURES)[number]>>;
    confirmUpload(input: {
        fileId: FileId;
    }): Promise<FileRecord | FailureOf<(typeof CONFIRM_UPLOAD_FAILURES)[number]>>;
};
export type UploadFileOptions = {
    onProgress?: (sent: number, total: number) => unknown;
    signal?: AbortSignal;
};
export declare function uploadFile(client: UploadClient, blob: Blob, options?: UploadFileOptions): Promise<import("@arki/failure").Failure<"contracts.random_source_unavailable", undefined> | import("@arki/failure").Failure<"failure.unexpected_defect", undefined> | import("@arki/failure").Failure<"fs.file_unavailable", {
    fileId?: `fil_${string}` | undefined;
}> | import("@arki/failure").Failure<"fs.file_wrong_state", {
    fileId: `fil_${string}`;
}> | import("@arki/failure").Failure<"fs.storage_cancelled", undefined> | import("@arki/failure").Failure<"fs.storage_rejected", undefined> | import("@arki/failure").Failure<"fs.storage_unavailable", undefined> | import("@arki/failure").Failure<"fs.storage_write_uncertain", undefined> | import("@arki/failure").Failure<"fs.upload_mismatch", {
    fileId: `fil_${string}`;
    reason: string;
}> | import("@arki/failure").Failure<"fs.upload_pending", {
    fileId: `fil_${string}`;
}> | import("@arki/failure").Failure<"schema.async_required", undefined> | import("@arki/failure").Failure<"schema.invalid_input", {
    issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
}> | import("@arki/failure").Failure<"schema.validator_defect", undefined> | {
    id: `fil_${string}`;
    mime: string;
    size: number;
    sha256: string | null;
    status: "deleting" | "pending" | "ready";
    createdAt: string;
}>;
//# sourceMappingURL=upload-file.d.ts.map