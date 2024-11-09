import starlightPlugin from '@astrojs/starlight-tailwind';
import type { Config } from 'tailwindcss';

// Generated color palettes
const accent = {
    200: '#b3c7ff', //--sl-color-accent-high
    600: '#e7ff34', //--sl-color-accent
    // 600: '#364bff',
    // 900: '#182775',
    950: '#131e4f', // --sl-color-accent-low
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
    },
    plugins: [starlightPlugin()],
} satisfies Config;
