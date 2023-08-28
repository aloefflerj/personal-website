import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import mdx from '@mdx-js/rollup';
import emojiPlugin from 'remark-emoji';

// eslint-disable-next-line no-undef
const root = path.resolve(__dirname, 'src');
const assetsDir = path.resolve(root, 'assets');

const mdxOptions = {
    remarkPlugins: [emojiPlugin],
    rehypePlugins: [],
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mdx(mdxOptions)],
    assetsInclude: ['**/*.m4a'],
    resolve: {
        alias: [
            { find: '@src', replacement: root },
            { find: '@assets', replacement: assetsDir },
        ],
    },
    optimizeDeps: {
        exclude: ['js-big-decimal'],
    },
});
