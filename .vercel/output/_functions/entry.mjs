import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_3QZYPYkp.mjs';
import { manifest } from './manifest_Cvvg5tIU.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/galleri.astro.mjs');
const _page2 = () => import('./pages/kontakt.astro.mjs');
const _page3 = () => import('./pages/robots.txt.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/galleri.astro", _page1],
    ["src/pages/kontakt.astro", _page2],
    ["src/pages/robots.txt.ts", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "43e7bd36-a07e-4c09-92cf-33d38960bf22",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
