/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GITHUB_TOKEN: undefined | string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

