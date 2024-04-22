import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                sm: '380px',
                // => @media (min-width: 640px) { ... }

                md: '768px',
                // => @media (min-width: 768px) { ... }

                lg: '1024px',
                // => @media (min-width: 1024px) { ... }

                xl: '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            fontFamily: {
                sans: ['CrimsonText', ...defaultTheme.fontFamily.sans],
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'full',
                    },
                },
            },
            rotate: {
                45: '45deg',
                135: '135deg',
                225: '225deg',
                315: '315deg',
            },
            animation: {
                twinkle: 'twinkle 2s ease-in-out forwards',
                meteor: 'meteor 3s ease-in-out forwards',
            },
            keyframes: {
                twinkle: {
                    '0%': {
                        opacity: 0,
                        transform: 'rotate(0deg)',
                    },
                    '50%': {
                        opacity: 1,
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'rotate(360deg)',
                    },
                },
                meteor: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(200%)',
                    },
                    '50%': {
                        opacity: 1,
                    },
                    '100%': {
                        opacity: 0,
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
