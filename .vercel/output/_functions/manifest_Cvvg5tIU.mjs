import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_IXhxRvyV.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_RhclLlin.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.1.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/galleri.I520BoNR.css"}],"routeData":{"route":"/galleri","isIndex":false,"type":"page","pattern":"^\\/galleri\\/?$","segments":[[{"content":"galleri","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galleri.astro","pathname":"/galleri","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/galleri.I520BoNR.css"}],"routeData":{"route":"/kontakt","isIndex":false,"type":"page","pattern":"^\\/kontakt\\/?$","segments":[[{"content":"kontakt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kontakt.astro","pathname":"/kontakt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/galleri.I520BoNR.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://bogstadsmie.no","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/galleri.astro",{"propagation":"none","containsHead":true}],["/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/kontakt.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/galleri@_@astro":"pages/galleri.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.1.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/kontakt@_@astro":"pages/kontakt.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/astro@5.1.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CBpzkOT4.mjs","\u0000@astrojs-manifest":"manifest_Cvvg5tIU.mjs","@astrojs/solid-js/client.js":"_astro/client.Cy2dtwfB.js","@astrojs/react/client.js":"_astro/client.cWTbz2U5.js","/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.D3OXGjE4.js","/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts":"_astro/BaseHead.astro_astro_type_script_index_0_lang.BGfjo5mV.js","/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.B4Cbkr-y.js","/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/astro@5.1.7_jiti@1.21.7_rollup@4.30.1_typescript@5.7.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/@vercel+speed-insights@1.1.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BWHn_pKp.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts","function u(){const i=window.scrollY,r=window.innerHeight,n=document.getElementById(\"background-desktop\"),t=document.getElementById(\"background-mobile\"),e=document.getElementById(\"bogstad-smie-title\");e&&window.innerWidth>768&&(e.style.transition=\"transform 1s ease-in-out\",e.style.transform=`translateY(${Math.min(80,i)}px)`);const d=.6+Math.min(.5,i/r*1.5),l=`linear-gradient(rgba(8,8,8,${d}), rgba(8,8,8,${d}))`;if(n){const o=n.getAttribute(\"data-bg-url\");n.style.backgroundImage=`${l}, url(${o})`}if(t){const o=t.getAttribute(\"data-bg-url\");t.style.backgroundImage=`${l}, url(${o})`}}window.addEventListener(\"scroll\",u);window.addEventListener(\"resize\",u);u();function b(){const i=document.getElementById(\"carousel\"),r=document.getElementById(\"prevBtn\"),n=document.getElementById(\"nextBtn\"),t=i?Array.from(i.children):[];let e=0,s=null;function c(g){t.forEach((m,f)=>{m.style.opacity=f===g?\"1\":\"0\",m.style.zIndex=f===g?\"1\":\"0\"})}function d(){e=(e+1)%t.length,c(e)}function l(){e=(e-1+t.length)%t.length,c(e)}function o(){window.innerWidth<768&&s===null&&(s=window.setInterval(d,4e3))}function a(){s!==null&&(window.clearInterval(s),s=null)}r?.addEventListener(\"click\",()=>{l(),a(),o()}),n?.addEventListener(\"click\",()=>{d(),a(),o()}),o(),document.addEventListener(\"visibilitychange\",()=>{document.hidden?a():o()}),window.addEventListener(\"resize\",()=>{a(),o()})}function h(){const i=document.querySelectorAll(\".fade-in-element\"),r=new IntersectionObserver(n=>{n.forEach((t,e)=>{t.isIntersecting&&(setTimeout(()=>{t.target.classList.add(\"visible\")},e*100),r.unobserve(t.target))})},{root:null,rootMargin:\"0px\",threshold:.1});i.forEach(n=>{r.observe(n)})}function w(){b(),h()}document.addEventListener(\"DOMContentLoaded\",w);document.addEventListener(\"astro:page-load\",w);"],["/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:before-swap\",e=>[...e.newDocument.head.querySelectorAll('link[as=\"font\"]')].forEach(o=>o.remove()));"],["/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Header.astro?astro&type=script&index=0&lang.ts","function r(){const e=document.getElementById(\"drawer\"),t=document.getElementById(\"header-drawer-button\");e?.classList.toggle(\"open\"),t?.classList.toggle(\"open\"),e?.classList.contains(\"open\")&&(console.log(e),a())}function a(){const e=document.querySelectorAll(\"#drawer .menu-item\");console.log(e),e.forEach((t,o)=>{console.log(t),t.style.animation=`fadeInUp 0.5s ease forwards ${o*.1}s`})}function n(){document.getElementById(\"header-drawer-button\")?.addEventListener(\"click\",r)}document.addEventListener(\"astro:after-swap\",n);n();"],["/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/node_modules/.pnpm/@vercel+speed-insights@1.1.0_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var u=\"@vercel/speed-insights\",l=\"1.1.0\",f=()=>{window.si||(window.si=function(...n){(window.siq=window.siq||[]).push(n)})};function p(){return typeof window<\"u\"}function v(){try{const e=\"production\"}catch{}return\"production\"}function a(){return v()===\"development\"}function w(e,n){if(!e||!n)return e;let r=e;try{const s=Object.entries(n);for(const[i,t]of s)if(!Array.isArray(t)){const o=c(t);o.test(r)&&(r=r.replace(o,`/[${i}]`))}for(const[i,t]of s)if(Array.isArray(t)){const o=c(t.join(\"/\"));o.test(r)&&(r=r.replace(o,`/[...${i}]`))}return r}catch{return e}}function c(e){return new RegExp(`/${m(e)}(?=[/?#]|$)`)}function m(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}var d=\"https://va.vercel-scripts.com/v1/speed-insights\",h=`${d}/script.js`,S=`${d}/script.debug.js`,g=\"/_vercel/speed-insights/script.js\";function R(e={}){var n;if(!p()||e.route===null)return null;f();const s=!!e.dsn?h:g,i=e.scriptSrc||(a()?S:s);if(document.head.querySelector(`script[src*=\"${i}\"]`))return null;e.beforeSend&&((n=window.si)==null||n.call(window,\"beforeSend\",e.beforeSend));const t=document.createElement(\"script\");return t.src=i,t.defer=!0,t.dataset.sdkn=u+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=l,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),a()&&e.debug===!1&&(t.dataset.debug=\"false\"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:o=>{t.dataset.route=o??void 0}}}customElements.define(\"vercel-speed-insights\",class extends HTMLElement{constructor(){super();try{const n=JSON.parse(this.dataset.props??\"{}\"),r=JSON.parse(this.dataset.params??\"{}\"),s=w(this.dataset.pathname??\"\",r);R({route:s,...n,framework:\"astro\",beforeSend:window.speedInsightsBeforeSend})}catch(n){throw new Error(`Failed to parse SpeedInsights properties: ${n}`)}}});"]],"assets":["/_astro/headshot_v1.Bhkxi5hf.jpeg","/_astro/hakon_smie.BOK1XaH5.jpeg","/_astro/index_left.CUO4bn7S.jpeg","/_astro/bokstøtte.BWu1dGOj.jpeg","/_astro/index_right.CVLcwbFf.jpg","/_astro/crimson-text-vietnamese-400-normal.rDtJSp__.woff2","/_astro/crimson-text-latin-ext-400-normal.B_IkVVOe.woff2","/_astro/crimson-text-latin-400-normal.pRLgj_b_.woff2","/_astro/crimson-text-vietnamese-400-normal.DwuTIOAR.woff","/_astro/crimson-text-latin-ext-400-normal.CgOISYAx.woff","/_astro/crimson-text-latin-400-normal.qfr3ao9R.woff","/_astro/pc_bg.BWm5BDZN.JPG","/_astro/mobile_bg.DHTfs7xB.JPG","/_astro/galleri.I520BoNR.css","/brand.svg","/favicon.svg","/open-graph.jpg","/robots.txt","/social.svg","/ui.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/client.Cy2dtwfB.js","/_astro/client.cWTbz2U5.js","/js/animate.js","/js/scroll.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"98nLR0u1+5hsSghjCV3oFn6YAVGOggvBOc/7yYoxZdI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
