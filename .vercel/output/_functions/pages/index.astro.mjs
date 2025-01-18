import { i as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, j as renderScript } from '../chunks/astro/server_RhclLlin.mjs';
import 'kleur/colors';
import { S as SITE, $ as $$PageLayout } from '../chunks/PageLayout_Dm4A-IaH.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DukZ8Fl9.mjs';
import 'clsx';
import { Divider } from '@nextui-org/divider';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://bogstadsmie.no");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { btntext = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="md:mt-4 mt-2 bg-black text-neutral-200 rounded-md px-4 py-1.5 hover:bg-neutral-900 border border-neutral-600 text-nowrap transition-colors"> ${btntext} </button>`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/components/Button.astro", undefined);

const background_image = new Proxy({"src":"/_astro/pc_bg.BWm5BDZN.JPG","width":4928,"height":3264,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/assets/images/pc_bg.JPG";
							}
							
							return target[name];
						}
					});

const background_image_mobile = new Proxy({"src":"/_astro/mobile_bg.DHTfs7xB.JPG","width":3264,"height":4928,"format":"jpg","orientation":8}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/assets/images/mobile_bg.JPG";
							}
							
							return target[name];
						}
					});

const smie = new Proxy({"src":"/_astro/hakon_smie.BOK1XaH5.jpeg","width":720,"height":1079,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/assets/images/hakon_smie.jpeg";
							}
							
							return target[name];
						}
					});

const bilde_venstre = new Proxy({"src":"/_astro/index_left.CUO4bn7S.jpeg","width":957,"height":1388,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/assets/images/index_left.jpeg";
							}
							
							return target[name];
						}
					});

const bilde_hoyre = new Proxy({"src":"/_astro/index_right.CVLcwbFf.jpg","width":2777,"height":4500,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/assets/images/index_right.jpg";
							}
							
							return target[name];
						}
					});

const bilde_hoyre_2 = new Proxy({"src":"/_astro/bokstøtte.BWu1dGOj.jpeg","width":1750,"height":1313,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/assets/images/bokstøtte.jpeg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://bogstadsmie.no");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const carouselImages = [bilde_venstre, bilde_hoyre_2, bilde_hoyre];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Hjem", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="background-desktop" class="animate fixed w-full h-full hidden md:block"${addAttribute({
    backgroundImage: `linear-gradient(rgba(8,8,8,0.5), rgba(8,8,8,0.5)), url(${background_image.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }, "style")}${addAttribute(background_image.src, "data-bg-url")}></div> <div id="background-mobile" class="animate fixed w-full h-full md:hidden"${addAttribute({
    backgroundImage: `linear-gradient(rgba(8,8,8,0.5), rgba(8,8,8,0.5)), url(${background_image_mobile.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }, "style")}${addAttribute(background_image_mobile.src, "data-bg-url")}></div>  <section class="relative h-screen w-full"> <div class="animate absolute h-full w-full flex items-center justify-center"> <div class="relative w-full h-full flex justify-center"> <h1 id="bogstad-smie-title" class="md:text-6xl sm:text-4xl text-3xl flex md:items-end my-32">
BOGSTAD SMIE
</h1> </div> </div> </section>  <div class="relative bg-white dark:bg-darkness md:pt-2 pt-2"> <div id="main-section" class="mx-auto flex flex-col md:gap-24 gap-8 items-center max-w-screen-lg p-5"> <!-- About Section --> <section class="flex flex-col md:flex-row md:items-center gap-4 md:gap-10"> <div class="w-full md:w-2/3"> <h2 class="text-2xl md:text-3xl font-semibold mb-3 md:mb-8">Velkommen til smia på Bogstad Gård</h2> <div class="flex flex-col gap-1.5"> <p>
Håkon Busk er smed på Bogstad Gård og har en Bachelor of Arts i kunstsmiing fra Hereford,
                            School of Arts and Crafts i England.
</p> <p>
I arbeidet sitt ønsker han å fremme kvalitet i minimalistisk moderne design som håndlages på
                            Bogstad Gård. Dette tar form som skulpturer, interiørdesign og eksteriørdesign som
                            spesialtilpasses i smidd stål.
</p> <p>
Håkon tar bestillinger der han samarbeider tett med kunder for å utvikle og skape
                            skreddersydde ideer og produkter til kundens behov.
</p> </div> </div> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full max-h-[400px] object-contain md:w-1/3 rounded-md self-center", "src": smie, "alt": "Smie", "widths": [120, 240, 360, 480, 600], "quality": "mid", "sizes": "(max-width: 768px) 100vw, 50vw", "loading": "eager" })} </section> ${renderComponent($$result2, "Divider", Divider, { "className": "opacity-30" })} <!-- Images section --> <section> <!-- Carousel for small screens --> <div class="md:hidden relative w-full h-[400px] fade-in-element"> <div id="carousel" class="w-full h-full relative"> ${carouselImages.map((img, index) => renderTemplate`<div${addAttribute(`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`, "class")}> ${renderComponent($$result2, "Image", $$Image, { "src": img, "alt": `Slide ${index + 1}`, "width": 500, "class": "w-full h-full object-cover", "quality": "mid", "loading": "eager" })} </div>`)} </div> <button id="prevBtn" class="absolute sm:-left-12 left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-20"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="nextBtn" class="absolute sm:-right-12 right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 border p-2 rounded-full z-20"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> <!-- Grid for larger screens --> <div class="hidden md:grid grid-cols-3 md:gap-8 gap-4"> ${carouselImages.map((img, index) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "rounded-md object-cover filter contrast-[0.9] md:h-[24rem] h-[18rem] img-zoom", "src": img, "alt": `Skulptur ${index + 1}`, "widths": [360, 480, 600, 720], "quality": "high", "loading": "eager" })}`)} </div> <div class="max-w-screen-md mx-auto flex md:flex-row flex-col items-center justify-center md:gap-8 md:mt-6 pt-2"> <p class="mt-4">Ta en kikk i galleriet for å se mer.</p> <a href="/galleri"> ${renderComponent($$result2, "Button", $$Button, { "btntext": "Til galleri" })} </a> </div> </section> <!-- Contact section --> <section class="flex justify-center md:mb-16"> <div> <p class="font-bold text-xl">Kontakt:</p> <p>Ta gjerne kontakt for oppdrag og spesialbestillinger</p> <div class="grid grid-cols-4 gap-2 mt-4 auto-cols-min"> <!-- Mail --> <div class="col-span-1 flex items-center gap-1"> <span class="whitespace-nowrap truncate">E-mail:</span> </div> <div class="col-span-3 truncate"> <a${addAttribute("mailto:hawk.metaldesigns@gmail.com", "href")} target="_blank" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
hawk.metaldesigns@gmail.com
</span> </a> </div> <!-- Phone --> <div class="col-span-1 flex items-center gap-1"> <span class="whitespace nowrap truncate">Telefon:</span> </div> <div class="col-span-3 truncate"> <a${addAttribute("tel:48241206", "href")} target="_blank" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
48241206
</span> </a> </div> </div> </div> </section> </div> </div> ${renderScript($$result2, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/index.astro", undefined);

const $$file = "/Users/sindre/Library/CloudStorage/Dropbox/00Prog/10webapp/Hakons_smed_nettside/Smithy-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
