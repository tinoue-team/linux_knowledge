import db from '@astrojs/db';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// ヘルパー関数経由で環境変数を呼び出す
const { SITE_URL, EDIT_SITE_URL, SOCIAL_GITHUB } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
    site: SITE_URL,
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
                './src/styles/over-w-props.css',
                './src/tailwind.css',
                // @font-face CSSファイルへの相対パス
                './src/fonts/font-face.css',
            ],
            editLink: {
                baseUrl: EDIT_SITE_URL,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            social: {
                github: SOCIAL_GITHUB,
            },
            // sidebar: [
            //     {
            //         label: 'Astro-Starlight',
            //         // autogenerate: { directory: 'astro-starlight' },

            //         items: [
            //             { label: 'Component', slug: '/astro-starlight/component' },
            //             { label: 'CSS', slug: '/astro-starlight/css' },
            //             { label: 'Guide', slug: '/astro-starlight/guide' },
            //         ],
            //     },
            //     {
            //         label: 'Linux',
            //         // link: '/linux/',
            //         autogenerate: { directory: 'linux' },
            //         // items: [
            //         //     { label: 'Linux 1', link: '/linux/post/' },
            //         //     // { label: 'Linux 2', link: '/linux/linux-2/' },
            //         // ],
            //     },
            // ],
            // カスタム 404 ページを利用するか
            // disable404Route: true,
            credits: true,
        }),
        tailwind({
            // デフォルトのベーススタイルを無効にする
            applyBaseStyles: false,
        }),
    ],
    output: 'hybrid',
    adapter: netlify(),
    // adapter: isProd ? netlify() : '',
    // 特定のパターンのページを事前レンダリング
    // prerender: {
    //     paths: ['/blog/*', '/about', '/products/[...slug]'],
    // },
});
