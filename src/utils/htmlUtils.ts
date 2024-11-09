import { decode } from 'html-entities';
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
        ],
        allowedAttributes: {
            a: ['href', 'name', 'target'],
            span: ['style', 'class'],
        },
        allowedSchemes: ['http', 'https', 'mailto'],
    });
}
