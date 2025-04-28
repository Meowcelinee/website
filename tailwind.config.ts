import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                appear: {
                    '0%': {
                        opacity: '0',
                        scale: '95%',
                    },
                    '100%': {
                        opacity: '1',
                        scale: '100%',
                    },
                },
                appearTranslate: {
                    '0%': {
                        opacity: '0',
                        scale: '95%',
                        translate: '-50% 10px',
                    },
                    '100%': {
                        opacity: '1',
                        scale: '100%',
                        translate: '0px',
                    },
                },
                delayedAppear: {
                    '0%, 40%': {
                        opacity: '0',
                        scale: '93%',
                    },
                    '100%': {
                        opacity: '1',
                        scale: '100%',
                    },
                },
            },
            animation: {
                appear: 'appear 1.25s ease-in-out',
                appearTranslate: 'appearTranslate 1.25s ease-in-out',
                appearShort: 'appear 1s ease-in-out',
                appearShortTranslate: 'appearTranslate 1s ease-in-out',
                delayedAppear: 'delayedAppear 1.75s ease-in-out',
            },
        },
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            defaultFlavour: 'mocha',
        }),
    ],
} satisfies Config;
// export default config;
