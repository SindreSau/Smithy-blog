import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://smithy-blog.vercel.app/',
    integrations: [
        mdx(),
        sitemap(),
        solidJs(),
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
    ],
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),
});
