import { FileStorage } from '@flystorage/file-storage';
/** Build the Flystorage handle inside an `fs.s3.initialize_storage` span; a throw marks it `UnexpectedDefect`. */
export declare const initializeStorage: (bucketName?: string, optionalPathPrefix?: string, region?: string) => FileStorage;
//# sourceMappingURL=s3.d.ts.map