import db from '@astrojs/db';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://linuledge-test.netlify.app',
    integrations: [
        preact(),
        db(),
        starlight({
            title: 'Linuledge',
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            // social: {
            //     github: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            // },
            // sidebar: [
            //     {
            //         label: 'Guides',
            //         autogenerate: { directory: 'guides' },
            //     },
            //     {
            //         label: 'Blog',
            //         autogenerate: { directory: 'blog' },
            //     },
            // ],
        }),
    ],
    output: 'hybrid',
    adapter: netlify(),
    // 特定のパターンのページを事前レンダリング
    // prerender: {
    //     paths: ['/blog/*', '/about', '/products/[...slug]'],
    // },
});
