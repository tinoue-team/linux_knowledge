// 1. ユーティリティを`astro:content`からインポート
import { defineCollection, z } from 'astro:content';

// 2. 各コレクションに`type`と`schema`を定義
const cmdCollection = defineCollection({
    type: 'content', // v2.5.0以降
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string().default('Anonymous'),
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
        tags: z.array(z.string()),
    }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
    cmd: cmdCollection,
};
