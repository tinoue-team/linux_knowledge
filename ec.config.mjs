import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
    expressiveCode: true,
    type: 'none',
    themes: ['dark-plus', 'light-plus'],
    plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    frames: {
        // removeCommentsWhenCopyingTerminalFrames: 'code',
        // extractFileNameFromCode: false,
        // Example: Hide the "Copy to clipboard" button
        showCopyToClipboardButton: true,
        borderWidth: '0px', // ボーダーをなしに
        // borderColor: 'transparent', // ボーダー色を透明に
        // shadowColor: 'transparent', // シャドウ色を透明に
        backgroundColor: 'transparent', // 背景色を透明に
        codePaddingInline: '3rem',
    },

    defaultProps: {
        type: 'none',
        wrap: false,
        tabWidth: 4,
        showLineNumbers: false,
        overridesByLang: {
            // Example: Override the background color for JavaScript
            // js: {
            //     backgroundColor: '#000',
            // },
            // 'bash,sh': {
            //     showLineNumbers: false,
            // }
        },
    },

    styleOverrides: {
        borderRadius: '0.5rem',
        codeBackground: 'hsl(245deg 77% 9% / 28%)',
        // You can optionally override the plugin's default styles here
        frames: {
            // type: 'none',
            showCopyToClipboardButton: true,
            // shadowColor: '#124',
            borderWidth: '0px',
            borderColor: 'transparent',
            // シャドウをなしに
            shadowColor: 'transparent',
            // 背景色を透明に
            backgroundColor: 'transparent',
        },
    },
};
