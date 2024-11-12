import starlightPlugin from '@astrojs/starlight-tailwind';
import type { Config } from 'tailwindcss';

// Generated color palettes
const accent = {
    100: 'hsl(65, 100%, 91%)', //--sl-color-accent-high
    200: 'hsl(65, 100%, 77%)', //--sl-color-accent-high
    300: 'hsl(65, 95%, 61%)', //--sl-color-accent-high
    400: 'hsl(65, 90%, 55%)', //--sl-color-accent-high
    500: 'hsl(58, 95%, 61%)', //--sl-color-accent-high
    600: 'hsl(65, 70%, 54%)', //--sl-color-accent-high
    700: 'hsl(65, 79%, 42%)', //--sl-color-accent
    800: 'hsl(54, 56%, 44%)', // --sl-color-accent-low
    900: 'hsl(59, 81%, 29%)', //--sl-color-accent-high
};
const gray = {
    100: '#f5f6f8',
    200: '#eceef2',
    300: '#c0c2c7',
    400: '#888b96',
    500: '#545861',
    700: '#353841',
    800: '#24272f',
    900: '#17181c',
};

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/tailwind.css'],
    theme: {
        extend: {
            colors: { accent, gray },
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
            mbump: '2px 2px 10px var(--sl-color-black), -2px -2px 10px var(--sl-color-gray-4)',
            'mbump-active': '2px 2px 10px var(--accent-700), -2px -2px 10px var(--accent-400)',
        },
    },
    plugins: [starlightPlugin()],
} satisfies Config;
