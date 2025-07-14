import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {
    fileURLToPath,
    URL,
} from 'node:url';
// @ts-expect-error temporary workaround for missing types
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)), 
            },
        ],
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
        ],
    },
});
