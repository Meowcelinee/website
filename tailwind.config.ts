import type { Config } from 'tailwindcss';

const config: Config = {
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
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
            },
            animation: {
                appear: 'appear 1.25s ease-in-out',
                appearShort: 'appear 1s ease-in',
            },
        },
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            defaultFlavour: 'macchiato',
        }),
    ],
};
export default config;
