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
                    label: 'Astro Starlight',
                    items: [
                        {
                            label: 'ガイド',
                            autogenerate: { directory: 'astro-starlight/guide' },
                        },
                        {
                            label: 'Component',
                            collapsed: true,
                            autogenerate: { directory: 'astro-starlight/component' },
                        },
                        {
                            label: 'CSS',
                            autogenerate: { directory: 'astro-starlight/css' },
                        },
                        {
                            label: '要件',
                            autogenerate: { directory: 'astro-starlight/requirement' },
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
                                    label: 'ハードウェア機器',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/hardware' },
                                },
                                {
                                    label: 'OS',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/os' },
                                },
                                {
                                    label: 'リポジトリ・パッケージ',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/repository-package' },
                                },
                                {
                                    label: 'ネットワーク について',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/network' },
                                },
                                {
                                    label: 'システム管理',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/system-manage' },
                                },
                                {
                                    label: 'Webサーバ',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/web-server' },
                                },
                                {
                                    label: 'Mail について',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/mail' },
                                },
                                {
                                    label: 'ログ管理',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/log-manage' },
                                },
                                {
                                    label: 'DNS について',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/dns' },
                                },
                                {
                                    label: 'シェルスクリプト',
                                    collapsed: true,
                                    autogenerate: { directory: 'linux/posts/shellscript' },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Usacloud',
                    autogenerate: { directory: 'usacloud' },
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
                            label: 'さくらクラウド プロバイダ',
                            autogenerate: { directory: 'terraform/sakuracloud-provider-services' },
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
                {
                    label: 'Ansible',
                    items: [
                        {
                            label: 'Ansible の基本',
                            autogenerate: { directory: 'ansible/about-ansible' },
                        },
                        {
                            label: 'Ansible コマンド',
                            autogenerate: { directory: 'ansible/cmds' },
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
        // vue({
        //     // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
        //     // For example <img src="/images/logo.png"> will not work without the code below
        //     template: {
        //         transformAssetUrls: {
        //             includeAbsolute: false,
        //         },
        //     },
        // }),
    ],
    output: 'hybrid',
    adapter: netlify(),
    // adapter: isProd ? netlify() : '',
    // 特定のパターンのページを事前レンダリング
    // prerender: {
    //     paths: ['/blog/*', '/about', '/products/[...slug]'],
    // },
});
