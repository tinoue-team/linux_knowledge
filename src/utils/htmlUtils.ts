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
export function extractOGTags(bufferData: Buffer, charset: string, url: string): OGData {
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

    // '/' パス対策
    if (ogData.image?.startsWith('/')) {
        const domain = new URL(url).origin;
        ogData.image = domain + ogData.image;
    }

    return ogData;
}

/**
 * Link 要素から favicon の URL を取得する
 * @param url リンク先のURL
 * @returns favicon を取得する完全な URL
 */
export function getFaviconUrl(bufferData: Buffer, charset: string, url: string): string {
    // バッファを指定されたエンコーディングでデコード
    const decodedHtml = iconv.decode(bufferData, charset);
    const root = parse(decodedHtml);

    const domain = new URL(url).origin;
    let faviconPath = `${domain}/favicon.ico`;

    const iconHref =
        root.querySelector("link[rel='icon']")?.attributes?.href?.valueOf() ??
        root.querySelector("link[rel='shortcut icon']")?.attributes?.href?.valueOf();

    if (iconHref) {
        faviconPath = iconHref;
    }

    // '/' パス対策
    if (iconHref?.startsWith('/')) {
        faviconPath = domain + iconHref;
    }

    return faviconPath;
}
