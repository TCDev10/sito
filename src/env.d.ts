/// <reference types="astro/client" />

type PhotosBucket = {
  get(key: string): Promise<{ text(): Promise<string>; arrayBuffer(): Promise<ArrayBuffer>; httpMetadata?: { contentType?: string } } | null>;
  put(key: string, value: string | ArrayBuffer | Uint8Array | ReadableStream, options?: { httpMetadata?: { contentType?: string } }): Promise<unknown>;
  delete(key: string): Promise<unknown>;
  list(options?: { prefix?: string }): Promise<{ objects: { key: string }[] }>;
};

type RuntimeEnv = {
  PHOTOS_BUCKET?: PhotosBucket;
  ADMIN_TOKEN?: string;
};

declare namespace App {
  interface Locals {
    runtime?: {
      env: RuntimeEnv;
    };
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly ADMIN_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
