// 1. ユーティリティを`astro:content`からインポート

import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

// 2. 各コレクションに`type`と`schema`を定義
const cmdCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/cmd' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z
            .object({
                url: z.string().optional(),
                alt: z.string().optional(),
            })
            .optional(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        draft: z.boolean().default(true),
        author: z.string().default('Anonymous'),
        pubDatetime: z.date(),
        modDatetime: z.date(),
    }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    cmd: cmdCollection,
    i18n: defineCollection({
        loader: i18nLoader(),
        schema: i18nSchema({
            extend: z.object({
                'custom.label': z.string().optional(),
            }),
        }),
    }),
};
