import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// eslint-disable-next-line no-undef
const root = path.resolve(__dirname, 'src');
const assetsDir = path.resolve(root, 'assets');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.m4a'],
    resolve: {
        alias: [
            { find: '@src', replacement: root },
            { find: '@assets', replacement: assetsDir },
        ],
    },
});
