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
            expressiveCode: {
                expressiveCode: true,
                type: 'none',
                themes: ['dark-plus', 'light-plus'],
                // frame: 'none',
                defaultFrame: 'none',
                frames: {
                    // removeCommentsWhenCopyingTerminalFrames: 'code',
                    // extractFileNameFromCode: false,
                    // Example: Hide the "Copy to clipboard" button
                    showCopyToClipboardButton: true,
                    borderWidth: '0px', // ボーダーをなしに
                    borderColor: 'transparent', // ボーダー色を透明に
                    shadowColor: 'transparent', // シャドウ色を透明に
                    backgroundColor: 'transparent', // 背景色を透明に
                },
                // frames: false,

                defaultProps: {
                    type: 'none',
                    wrap: true,
                    overridesByLang: {
                        // Example: Override the background color for JavaScript
                        // js: {
                        //     backgroundColor: '#000',
                        // },
                    },
                },

                styleOverrides: {
                    borderRadius: '0.5rem',

                    // You can optionally override the plugin's default styles here
                    frames: {
                        // type: 'none',
                        showCopyToClipboardButton: true,
                        // shadowColor: '#124',
                        borderWidth: '0px',
                        borderColor: 'transparent',
                        // シャドウをなしに
                        shadowColor: 'transparent',
                        // 背景色を透明に
                        backgroundColor: 'transparent',
                    },
                },
            },
        }),
    ],
    output: 'hybrid',
    adapter: netlify(),
    // 特定のパターンのページを事前レンダリング
    // prerender: {
    //     paths: ['/blog/*', '/about', '/products/[...slug]'],
    // },
});
