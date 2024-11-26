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
    // サイトマップ有効化
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
                maxHeadingLevel: 4,
            },
            social: {
                github: SOCIAL_GITHUB,
            },
            sidebar: [
                {
                    label: 'astro-starlight',
                    items: [
                        {
                            label: 'guide',
                            autogenerate: { directory: 'astro-starlight/guide' },
                        },
                        {
                            label: 'Component',
                            autogenerate: { directory: 'astro-starlight/component' },
                        },
                        {
                            label: 'CSS',
                            autogenerate: { directory: 'astro-starlight/css' },
                        },
                    ],
                },
                {
                    label: 'Linux',
                    items: [
                        {
                            label: 'コマンド',
                            collapsed: true,
                            autogenerate: { directory: 'linux/cmd' },
                        },
                        {
                            label: '記事',
                            items: [
                                {
                                    label: 'Mail について',
                                    autogenerate: { directory: 'linux/posts/mail' },
                                },
                                {
                                    label: 'ネットワーク について',
                                    autogenerate: { directory: 'linux/posts/network' },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Terraform',
                    items: [
                        {
                            label: 'Terraform について',
                            autogenerate: { directory: 'terraform/about-terraform' },
                        },
                        {
                            label: 'AWS プロバイダ',
                            autogenerate: { directory: 'terraform/aws-provider-services' },
                        },
                        {
                            label: 'Terraform コマンド',
                            collapsed: true,
                            items: [
                                {
                                    label: '主要なワークフローコマンド',
                                    autogenerate: { directory: 'terraform/cmds/main-commands' },
                                },
                                {
                                    label: '一般的でないコマンドや高度なコマンド',
                                    autogenerate: {
                                        directory: 'terraform/cmds/all-other-commands',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
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
