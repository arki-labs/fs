/**
 * `@arki/fs/orpc`: the files table over oRPC, contract-first.
 *
 * - `filesContract`: the four procedures. Add it to the app contract as `files`.
 * - `filesRouter(implementer.files, { storage, actor })`: their handlers.
 *
 * Output types reach the browser through the contract; nothing is restated.
 * Outputs never carry the bucket, key or owner.
 *
 * Each procedure lists the failures its storage call can return (`errorMap`),
 * so clients get them typed and can `reviveRpcError` them. Thrown faults
 * (`FileStorageError`) become plain `ORPCError`s with the `ARKI_FS_E00x` code in `data`.
 */
import type { Context, ImplementerInternal } from '@orpc/server';
import { z } from 'zod';
import type { UploadClient } from './files/upload-file.js';
import type { FileStorage } from './lifecycle/storage.js';
import type { FilesTable, OwnerOf } from './lifecycle/table.js';
export declare const filesContract: {
    createUpload: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        mime: z.ZodString;
        size: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
        url: z.ZodURL;
        method: z.ZodLiteral<"PUT">;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        expiresAt: z.ZodISODateTime;
    }, z.core.$strict>, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined> | import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
    confirmUpload: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
    }, z.core.$strict>, z.ZodObject<{
        id: z.ZodTemplateLiteral<`fil_${string}`>;
        mime: z.ZodString;
        size: z.ZodNumber;
        sha256: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            deleting: "deleting";
            pending: "pending";
            ready: "ready";
        }>;
        createdAt: z.ZodISODateTime;
    }, z.core.$strict>, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined> | import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
    }, {
        fileId: `fil_${string}`;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined> | import("@arki/failure").FailureDefinition<"fs.upload_mismatch", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
        reason: string;
    }, {
        fileId: `fil_${string}`;
        reason: string;
    }>> | import("@arki/failure").FailureDefinition<"fs.upload_pending", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
    }, {
        fileId: `fil_${string}`;
    }>> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
    url: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
        expiresIn: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>, z.ZodObject<{
        url: z.ZodURL;
        expiresAt: z.ZodISODateTime;
    }, z.core.$strict>, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
    }, {
        fileId: `fil_${string}`;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
    remove: import("@orpc/contract").ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
    }, z.core.$strict>, z.ZodVoid, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined> | import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
};
export type FilesContract = typeof filesContract;
/** Restore native oRPC rejection at the explicit client bridge before uploadFile owns execution. */
export declare function filesUploadClient(client: UploadClient): UploadClient;
/**
 * The handlers of {@link filesContract}. `storage` returns the service built
 * once at boot; `actor` returns the acting owner id (throw `UNAUTHORIZED` there
 * when there is none).
 *
 * @example
 * ```ts
 * const implementer = implement(appContract).$context<AppContext>();
 * export const router = implementer.router({
 *   files: filesRouter(implementer.files, { storage: () => storage, actor: ctx => ctx.userId }),
 * });
 * ```
 */
export declare function filesRouter<TInitialContext extends Context, TCurrentContext extends Context, T extends FilesTable>(implementer: ImplementerInternal<FilesContract, TInitialContext, TCurrentContext>, bind: {
    storage: (context: TCurrentContext) => FileStorage<T>;
    actor: (context: TCurrentContext) => OwnerOf<T>;
}): {
    createUpload: import("@orpc/server").ImplementedProcedure<TInitialContext, TCurrentContext, z.ZodObject<{
        mime: z.ZodString;
        size: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
        url: z.ZodURL;
        method: z.ZodLiteral<"PUT">;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        expiresAt: z.ZodISODateTime;
    }, z.core.$strict>, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined> | import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
    confirmUpload: import("@orpc/server").ImplementedProcedure<TInitialContext, TCurrentContext, z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
    }, z.core.$strict>, z.ZodObject<{
        id: z.ZodTemplateLiteral<`fil_${string}`>;
        mime: z.ZodString;
        size: z.ZodNumber;
        sha256: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            deleting: "deleting";
            pending: "pending";
            ready: "ready";
        }>;
        createdAt: z.ZodISODateTime;
    }, z.core.$strict>, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined> | import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
    }, {
        fileId: `fil_${string}`;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined> | import("@arki/failure").FailureDefinition<"fs.upload_mismatch", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
        reason: string;
    }, {
        fileId: `fil_${string}`;
        reason: string;
    }>> | import("@arki/failure").FailureDefinition<"fs.upload_pending", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
    }, {
        fileId: `fil_${string}`;
    }>> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
    url: import("@orpc/server").ImplementedProcedure<TInitialContext, TCurrentContext, z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
        expiresIn: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>, z.ZodObject<{
        url: z.ZodURL;
        expiresAt: z.ZodISODateTime;
    }, z.core.$strict>, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.file_wrong_state", import("@standard-schema/spec").StandardSchemaV1<{
        fileId: `fil_${string}`;
    }, {
        fileId: `fil_${string}`;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
    remove: import("@orpc/server").ImplementedProcedure<TInitialContext, TCurrentContext, z.ZodObject<{
        fileId: z.ZodTemplateLiteral<`fil_${string}`>;
    }, z.core.$strict>, z.ZodVoid, import("@orpc/contract").MergedErrorMap<Record<never, never>, import("@arki/failure/orpc").ErrorMapOf<readonly (import("@arki/failure").FailureDefinition<"contracts.random_source_unavailable", undefined> | import("@arki/failure").FailureDefinition<"failure.unexpected_defect", undefined> | import("@arki/failure").FailureDefinition<"fs.file_unavailable", import("@standard-schema/spec").StandardSchemaV1<{
        fileId?: `fil_${string}` | undefined;
    }, {
        fileId?: `fil_${string}` | undefined;
    }>> | import("@arki/failure").FailureDefinition<"fs.storage_cancelled", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_rejected", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_unavailable", undefined> | import("@arki/failure").FailureDefinition<"fs.storage_write_uncertain", undefined> | import("@arki/failure").FailureDefinition<"schema.async_required", undefined> | import("@arki/failure").FailureDefinition<"schema.invalid_input", import("@standard-schema/spec").StandardSchemaV1<unknown, {
        issues: readonly import("@standard-schema/spec").StandardSchemaV1.Issue[];
    }>> | import("@arki/failure").FailureDefinition<"schema.validator_defect", undefined>)[]>>, Record<never, never>>;
};
//# sourceMappingURL=orpc.d.ts.map