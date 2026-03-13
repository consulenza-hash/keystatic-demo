import { c as createComponent } from './astro-component_Cb268GNt.mjs';
import 'piccolore';
import { n as renderHead, h as addAttribute, r as renderTemplate } from './entrypoint_BZVMAPuO.mjs';
import 'clsx';
import { createReader } from '@keystatic/core/reader';
import { k as keystaticConfig } from './keystatic.config_PCQzvzgy.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), keystaticConfig);
  const homepage = await reader.singletons.homepage.read();
  const articoli = await reader.collections.articoli.all();
  return renderTemplate`<html lang="it" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Demo Keystatic</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> <section class="hero" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>${homepage?.titolo ?? "Benvenuto"}</h1> <p data-astro-cid-j7pv25f6>${homepage?.sottotitolo}</p> <a${addAttribute(homepage?.cta_link ?? "/", "href")} data-astro-cid-j7pv25f6>${homepage?.cta_testo ?? "Scopri di più"}</a> </section> <div class="container" data-astro-cid-j7pv25f6> <p class="section-title" data-astro-cid-j7pv25f6>Articoli recenti</p> <div class="articoli-grid" data-astro-cid-j7pv25f6> ${articoli.map((a) => renderTemplate`<a${addAttribute(`/articoli/${a.slug}`, "href")} class="articolo-card" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>${a.entry.titolo}</h2> <p data-astro-cid-j7pv25f6>${a.entry.descrizione}</p> <p class="data" data-astro-cid-j7pv25f6>${a.entry.data}</p> </a>`)} </div> </div> <a href="/keystatic" class="admin-link" data-astro-cid-j7pv25f6>⚙ Admin</a> </body></html>`;
}, "D:/keystatic-demo/src/pages/index.astro", void 0);

const $$file = "D:/keystatic-demo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
