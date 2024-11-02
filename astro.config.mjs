import db from '@astrojs/db';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://linuledge-test.netlify.app',
    integrations: [
        preact(),
        db(),
        starlight({
            title: 'Linuledge',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '日本語',
                    lang: 'ja',
                },
                en: {
                    label: 'English',
                },
            },
            logo: {
                src: './src/assets/linuledge-logo.svg',
                // replacesTitle: true,
            },
            customCss: [
                './src/styles/custom.css',
                // @font-face CSSファイルへの相対パス
                './src/fonts/font-face.css',
            ],
            editLink: {
                baseUrl: 'https://github.com/kinmapping/linuledge/edit/main/docs/',
            },
            // customCss: ['./src/styles/custom.css', './src/tailwind.css'],
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            social: {
                github: 'https://github.com/kinmapping/linuledge',
            },
            sidebar: [
                {
                    label: 'Astro-Starlight',
                    autogenerate: { directory: 'Astro-Starlight' },
                },
                {
                    label: 'Linux',
                    // link: '/linux/',
                    autogenerate: { directory: 'Linux' },
                },
            ],
            // カスタム 404 ページを利用するか
            // disable404Route: true,
        }),
        tailwind({
            // デフォルトのベーススタイルを無効にする
            // applyBaseStyles: false,
        }),
    ],
    output: 'hybrid',
    adapter: netlify(),
    // 特定のパターンのページを事前レンダリング
    // prerender: {
    //     paths: ['/blog/*', '/about', '/products/[...slug]'],
    // },
});
