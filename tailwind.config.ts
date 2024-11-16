import starlightPlugin from '@astrojs/starlight-tailwind';
import type { Config } from 'tailwindcss';

// Generated color palettes
const accent = {
    100: 'var(--accent-100)', //--sl-color-accent-high
    200: 'var(--accent-200)', //--sl-color-accent-high
    300: 'var(--accent-300)', //--sl-color-accent-high
    400: 'var(--accent-400)', //--sl-color-accent-high
    500: 'var(--accent-500)', //--sl-color-accent-high
    600: 'var(--accent-600)', //--sl-color-accent-high
    700: 'var(--accent-700)', //--sl-color-accent
    800: 'var(--accent-800)', //
    // 800: 'hsla(54, 78%, 23%, 0.75)', //
    900: 'var(--accent-900)', // --sl-color-accent-low
};
const gray = {
    100: 'hsla(220, 19%, 94, 0.8)', // --sl-color-gray-1
    200: 'hsla(223, 6%, 77%, 0.8)', // --sl-color-gray-2
    300: 'hsla(227, 6%, 56%, 0.8)', // --sl-color-gray-3
    400: 'hsla(222, 7%, 35%, 0.8)', // --sl-color-gray-4
    // 500: 'var(--sl-color-gray-5)', // --sl-color-gray-5
    500: 'hsla(225, 10%, 23%, 0.8)', // --sl-color-gray-5
    600: 'hsla(224, 14%, 16%, 0.8)', // --sl-color-gray-6
    700: 'hsla(230, 13%, 9%, 0.8)', // --sl-color-gray-7
    800: 'hsla(180, 11%, 2%, 0.8)', // --sl-color-gray-8
    900: 'hsla(0, 0%, 0%, 0.8)', // --sl-color-black
};

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/tailwind.css'],
    theme: {
        extend: {
            colors: { accent, gray },
            textShadow: {
                neon: 'var(--text-shadow)',
            },
        },
        fontFamily: {
            // 好みのテキストフォント。Starlightはデフォルトでシステムフォントスタックを使用します。
            sans: ['"Atkinson Hyperlegible"'],
            // 好みのコードフォント。Starlightはデフォルトでシステムの等幅フォントを使用します。
            mono: ['"IBM Plex Mono"'],
        },
        fontSize: {
            '2xs': '0.67rem',
            xs: '0.75rem',
            sm: '0.8rem',
            base: '0.88rem',
            lg: '0.95rem',
            xl: '1rem',
            '2xl': '1.2rem',
            '3xl': '1.4rem',
            '4xl': '1.7rem',
            '5xl': '2rem',
            '6xl': '3.2rem',
        },
        boxShadow: {
            // depressed
            's-depressed':
                'inset 2px 2px 8px var(--sl-color-gray-8), inset -2px -2px 8px var(--sl-color-gray-2)',
            // bump
            sbump: '4px 2px 12px -2px var(--sl-color-black), -4px -2px 12px -2px var(--sl-color-gray-2)',
            'sbump-active':
                '4px 2px 12px -2px var(--accent-700), -4px -2px 12px -2px var(--accent-400)',
            mbump: '6px 4px 20px -2px var(--sl-color-black), -6px -4px 20px -2px var(--sl-color-gray-4)',
            'mbump-active':
                '6px 4px 20px -2px var(--accent-700), -6px -4px 20px -2px var(--accent-400)',
            // distinct
            // description
            'xs-distinct':
                'inset -1px -1px 2px var(--sl-color-gray-8), inset 1px 1px 2px var(--sl-color-gray-2), 1px 1px 2px var(--sl-color-black), -1px -1px 2px var(--sl-color-gray-2)',
        },
    },
    plugins: [
        starlightPlugin(),
        // plugin(function ({matchUtilities, theme}) {
        //     matchUtilities(
        //         {
        //             'text-shadow': value => ({
        //                 textShadow: value,
        //             }),
        //         },
        //         { values: theme('textShadow') },
        //     );
        // })
    ],
} satisfies Config;
