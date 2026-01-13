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

                newWebsiteLinkAppear: {
                    '0%, 30%': {
                        opacity: '0',
                        translate: '-50% 10px',
                        scale: '60%',
                    },
                    '45%': {
                        opacity: '100%',
                    },
                    '60%': {
                        rotate: '0deg',
                        translate: '15% 25px',
                    },
                    '80%': {
                        translate: '-6% -5px',
                        rotate: '-300deg',
                    },
                    '100%': {
                        rotate: '360deg',
                        scale: '100%',
                    },
                },
                newWebsiteSubtextAppear: {
                    '0%, 30%': {
                        opacity: '0',
                        translate: '-50% 50px',
                        scale: '30%',
                    },
                    '45%': {
                        opacity: '100%',
                    },
                    '60%': {
                        rotate: '0deg',
                        translate: '15% 75px',
                    },
                    '80%': {
                        translate: '-6% -15px',
                        rotate: '1000deg',
                    },
                    '100%': {
                        rotate: '-360deg',
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
                newWebsiteLinkAppear: 'newWebsiteLinkAppear 3.5s linear',
                newWebsiteSubtextAppear: 'newWebsiteSubtextAppear 5s ease-in',
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
