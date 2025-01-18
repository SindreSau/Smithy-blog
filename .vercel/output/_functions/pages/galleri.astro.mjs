import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_RhclLlin.mjs';
import 'kleur/colors';
import { S as SITE, $ as $$PageLayout } from '../chunks/PageLayout_Dm4A-IaH.mjs';
export { renderers } from '../renderers.mjs';

const $$Galleri = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Galleri", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="md:gap-16 gap-8 md:pt-24 sm:pt-20 pt-8 container mx-auto max-w-6xl"> <h1 class="text-3xl font-bold">Galleri</h1> </div> ` })}`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/galleri.astro", undefined);

const $$file = "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/galleri.astro";
const $$url = "/galleri";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Galleri,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
