import type { OGData } from '@/type';
import { decode } from 'html-entities';
import iconv from 'iconv-lite';
import { parse } from 'node-html-parser';
import sanitizeHtml from 'sanitize-html';

/**
 * 指定された文字列内のHTMLエンティティをデコードし、サニタイズします。
 *
 * @param target - デコード対象の文字列
 * @returns デコードおよびサニタイズされた文字列
 */
export function sanitizeAndDecodeHtml(target: string): string {
    const decoded = decode(target);
    return sanitizeHtml(decoded, {
        allowedTags: [
            'b',
            'i',
            'em',
            'strong',
            'a',
            'br',
            'p',
            'ul',
            'ol',
            'li',
            'span',
            'table',
            'thead',
            'tbody',
            'tr',
            'th',
            'td',
            'code',
            'pre',
        ],
        allowedAttributes: {
            a: ['href', 'name', 'target'],
            span: ['style', 'class'],
        },
        allowedSchemes: ['http', 'https', 'mailto'],
    });
}

/**
 * HTMLのバッファからOGタグを抽出する関数
 *
 * @param bufferData - HTMLのバッファデータ
 * @param charset - デコードに使用する文字エンコーディング
 * @returns OGDataオブジェクト
 */
export function extractOGTags(bufferData: Buffer, charset: string): OGData {
    // バッファを指定されたエンコーディングでデコード
    const decodedHtml = iconv.decode(bufferData, charset);
    const root = parse(decodedHtml);

    const getMetaContent = (property: string): string | undefined => {
        const meta = root.querySelector(`meta[property="og:${property}"]`);
        return meta?.getAttribute('content');
    };

    const ogData: OGData = {
        title: getMetaContent('title'),
        description: getMetaContent('description'),
        image: getMetaContent('image'),
        url: getMetaContent('url'),
        siteName: getMetaContent('site_name'),
    };

    if (!ogData.title) {
        // フォールバック: <title>タグから取得
        ogData.title = root.querySelector('title')?.text || '';
    }
    if (!ogData.description) {
        // フォールバック: <meta name="description">タグから取得
        const metaDesc = root.querySelector('meta[name="description"]');
        ogData.description = metaDesc?.getAttribute('content') || '';
    }

    return ogData;
}
