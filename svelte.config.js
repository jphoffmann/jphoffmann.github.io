import {vitePreprocess} from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        alias: {
            $components: 'src/components',
        },
    },

    preprocess: [vitePreprocess({})],
};

export default config;
