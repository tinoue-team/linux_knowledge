// 1. ユーティリティを`astro:content`からインポート
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// 2. 各コレクションに`type`と`schema`を定義
const cmdCollection = defineCollection({
    type: 'content', // v2.5.0以降
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
    docs: defineCollection({ schema: docsSchema() }),
    cmd: cmdCollection,
};
