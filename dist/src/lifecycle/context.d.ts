import type { FileErrorCode } from '../files/errors.js';
/** Lifecycle at DEBUG, store failures at WARN. Never URLs, credentials or bytes. */
export declare const filesLog: import("@arki/log").Logger;
export declare function fail(code: FileErrorCode, message: string, cause?: unknown): never;
//# sourceMappingURL=context.d.ts.map