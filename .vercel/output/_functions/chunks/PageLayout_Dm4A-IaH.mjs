import { i as createAstro, c as createComponent, r as renderTemplate, b as addAttribute, j as renderScript, a as renderComponent, m as maybeRenderHead, k as renderSlot, l as renderHead } from './astro/server_RhclLlin.mjs';
import 'kleur/colors';
/* empty css                           */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const $$Astro$7 = createAstro("https://bogstadsmie.no");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/astro@5.1.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/astro@5.1.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://bogstadsmie.no");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/open-graph.jpg" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- Global Scripts --><script src="/js/scroll.js"><\/script><script src="/js/animate.js"><\/script>', "", ""])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderScript($$result, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/BaseHead.astro", undefined);

const SITE = {
  TITLE: "BOGSTAD GÅRD SMIE",
  DESCRIPTION: "Velkommen til Bogstad Gård smie. Her finner du informasjon om smeden Håkon Busk og bilder av hans arbeid.",
  AUTHOR: "Sindre Sauarlia"
};
const LINKS = [
  {
    TEXT: "Hjem",
    HREF: "/"
  },
  {
    TEXT: "Galleri",
    HREF: "/galleri"
  },
  {
    TEXT: "Kontakt",
    HREF: "/kontakt"
  }
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$5 = createAstro("https://bogstadsmie.no");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Container;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "w-full h-full mx-auto px-5",
    size === "sm" && "max-w-screen-sm",
    size === "md" && "max-w-screen-md",
    size === "lg" && "max-w-screen-lg",
    size === "xl" && "max-w-screen-xl",
    size === "2xl" && "max-w-screen-2xl"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Container.astro", undefined);

const $$Astro$4 = createAstro("https://bogstadsmie.no");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 w-full md:h-16 h-12 z-50 sm:py-10 py-8 md:px-2 sm:px-1" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Container", $$Container, { "size": "md", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class="relative h-full w-full" data-astro-cid-3ef6ksr2> <div class="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold" data-astro-cid-3ef6ksr2> <!-- LOGO GOES HERE --> <a href="/" class="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out md:hidden" data-astro-cid-3ef6ksr2> <svg class="size-6 fill-current" data-astro-cid-3ef6ksr2> <use href="/brand.svg#brand" data-astro-cid-3ef6ksr2></use> </svg> </a> </div> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-astro-cid-3ef6ksr2> <nav class="hidden md:flex items-center justify-center text-sm gap-1" data-astro-cid-3ef6ksr2> <!-- LOGO --> <a aria-label="Home" href="/" class="gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out mr-6 md:block hidden" data-astro-cid-3ef6ksr2> <svg class="size-6 fill-current" data-astro-cid-3ef6ksr2> <use href="/brand.svg#brand" data-astro-cid-3ef6ksr2></use> </svg> </a> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(LINK.TEXT, "aria-label")}${addAttribute(cn(
    "menu-item h-8 rounded-full px-3 text-current",
    "flex items-center justify-center",
    "transition-colors duration-300 ease-in-out",
    pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? " text-black dark:text-white underline-link" : " hover:text-black dark:hover:text-white hover:underline-link"
  ), "class")} data-astro-cid-3ef6ksr2> ${LINK.TEXT} </a>`)} </nav> </div> <!-- Mobile hamburger button --> <div class="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-2" data-astro-cid-3ef6ksr2> <button id="header-drawer-button"${addAttribute(`Toggle drawer open and closed`, "aria-label")}${addAttribute(cn(
    "flex md:hidden",
    "size-8 rounded-md items-center justify-center",
    "bg-transparent md:hover:bg-black/5 md:dark:hover:bg-white/20",
    "transition-all duration-300 ease-in-out"
  ), "class")} data-astro-cid-3ef6ksr2> <div class="burger-icon" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </div> </button> </div> </div> ` })} </header>  ${renderScript($$result, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Header.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://bogstadsmie.no");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentUrl = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(["", '<footer class="relative bg-white dark:bg-darkness"> <div class="animate"> <section class="py-5"> ', ' </section> </div> <!-- <section class=" py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25">\n      <Container size="md">\n        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">\n          <div class="flex flex-col items-center sm:items-start">\n            <a href="/" class="flex gap-1 w-fit font-semibold text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">\n              <svg class="size-6 fill-current">\n                <use href="/brand.svg#brand"/>\n              </svg>\n              {SITE.TITLE}\n            </a>\n          </div>\n          <div class="flex gap-2 justify-center sm:justify-end items-center">\n            <span class="relative flex h-3 w-3">\n              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300"></span>\n              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>\n            </span>\n            All systems normal\n          </div>\n        </div>\n      </Container>\n    </section> --> <section class="py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25 bg-black"> ', " </section> </footer> <script>\n    function goBackToTop(event) {\n        event.preventDefault();\n        window.scrollTo({\n            top: 0,\n            behavior: 'smooth',\n        });\n    }\n\n    function inintializeBackToTop() {\n        const backToTop = document.getElementById('back-to-top');\n        backToTop?.addEventListener('click', goBackToTop);\n    }\n\n    document.addEventListener('astro:after-swap', inintializeBackToTop);\n    inintializeBackToTop();\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-center sm:justify-end"> ${currentUrl == "/" && renderTemplate`<button id="back-to-top" aria-label="Back to top of page" class="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Til toppen
</div> </button>`} </div> ` }), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="h-full grid grid-cols-1 sm:grid-cols-2 gap-3"> <!-- TERMS AND PRIVACY --> <div class="order-2 sm:order-1 flex flex-col items-center justify-center sm:items-start"> <!-- <div class='legal'>
                            <a
                                href='/legal/terms'
                                class='text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out'>
                                Terms
                            </a> |
                            <a
                                href='/legal/privacy'
                                class='text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out'>
                                Privacy
                            </a>
                        </div> --> <div class="text-sm mt-2">&copy; 2024 | All rights reserved</div> </div> <div class="order-1 sm:order-2 flex justify-center sm:justify-end"> <div class="flex flex-wrap gap-1 items-center justify-center"> <!-- Mail --> <a${addAttribute("mailto:bogstadsmie@gmail.com", "href")} target="_blank"${addAttribute(`Send mail to ${SITE.TITLE}`, "aria-label")} class="group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20 blend"> <svg viewBox="0 0 50 50" class="size-full fill-current group-hover:fill-black group-hover:dark:fill-white blend"> <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z"></path> </svg> </a> <!-- Instagram --> <a${addAttribute("https://www.instagram.com/hawk.metaldesigns/", "href")} target="_blank"${addAttribute(`${SITE.TITLE} on Instagram`, "aria-label")} class="group size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20 blend"> <svg viewBox="0 0 50 50" class="size-full fill-current group-hover:fill-black group-hover:dark:fill-white blend"> <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path> </svg> </a> </div> </div> </div> ` }));
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Footer.astro", undefined);

const $$Astro$2 = createAstro("https://bogstadsmie.no");
const $$Drawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Drawer;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate`${maybeRenderHead()}<div id="drawer" class="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-950 transition-[height] duration-300 ease-in-out" data-astro-cid-hxtyo74s> <nav class="flex flex-col items-center space-y-2" data-astro-cid-hxtyo74s> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn(
    "flex items-center justify-center px-3 py-1 rounded-full",
    "text-current hover:text-black dark:hover:text-white",
    "hover:bg-black/5 dark:hover:bg-white/20",
    "transition-colors duration-300 ease-in-out",
    pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""
  ), "class")} data-astro-cid-hxtyo74s> ${LINK.TEXT} </a>`)} </nav> </div> `;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Drawer.astro", undefined);

const $$Astro$1 = createAstro("https://bogstadsmie.no");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/@vercel+speed-insights@1.1.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/@vercel+speed-insights@1.1.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro", undefined);

const $$Astro = createAstro("https://bogstadsmie.no");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | ${SITE.TITLE}`, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Drawer", $$Drawer, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/layouts/PageLayout.astro", undefined);

export { $$PageLayout as $, SITE as S };
