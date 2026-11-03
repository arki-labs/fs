/**
 * The wire shapes of the files table, written once. Types are inferred from
 * these schemas, except `UploadRequest` (`./types.ts`), which an exact type test
 * locks to its schema. Browser-safe: no Drizzle, no Node APIs.
 */
import { z } from 'zod';
/** The file states, in lifecycle order. The table's `status` column takes the same tuple. */
export declare const FILE_STATUSES: readonly ['pending', 'ready', 'deleting'];
/** `pending` until the server saw the object; `ready` after; `deleting` until the sweep removes row and object. */
export declare const fileStatus: z.ZodEnum<{
    deleting: "deleting";
    pending: "pending";
    ready: "ready";
}>;
export type FileStatus = z.infer<typeof fileStatus>;
/** A plain `type/subtype`. No parameters, no control characters. */
export declare const mimeSchema: z.ZodString;
/** What a client asks for before it uploads. */
export declare const uploadRequest: z.ZodObject<{
    mime: z.ZodString;
    size: z.ZodNumber;
}, z.core.$strict>;
/** A signed, create-only PUT grant. Send `headers` unchanged. */
export declare const uploadTicket: z.ZodObject<{
    fileId: z.ZodTemplateLiteral<`fil_${string}`>;
    url: z.ZodURL;
    method: z.ZodLiteral<"PUT">;
    headers: z.ZodRecord<z.ZodString, z.ZodString>;
    expiresAt: z.ZodISODateTime;
}, z.core.$strict>;
/** What clients see of a file. No bucket, key, owner or etag. */
export declare const fileRecord: z.ZodObject<{
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
}, z.core.$strict>;
/** What `cleanupOrphans` accepts: how many due rows one sweep claims. */
export declare const cleanupOptions: z.ZodObject<{
    batch: z.ZodDefault<z.ZodNumber>;
}, z.core.$strict>;
/** A GET URL and the moment it stops working, so screens can refresh before then. */
export declare const signedFileUrl: z.ZodObject<{
    url: z.ZodURL;
    expiresAt: z.ZodISODateTime;
}, z.core.$strict>;
export type UploadTicket = z.infer<typeof uploadTicket>;
export type FileRecord = z.infer<typeof fileRecord>;
export type SignedFileUrl = z.infer<typeof signedFileUrl>;
//# sourceMappingURL=schemas.d.ts.map