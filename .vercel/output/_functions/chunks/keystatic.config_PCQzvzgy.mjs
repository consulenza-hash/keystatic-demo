import { config, singleton, fields, collection } from '@keystatic/core';

const keystaticConfig = config({
  storage: {
    kind: "local"
  },
  collections: {
    // ── ARTICOLI ──────────────────────────────────────────────────────────
    articoli: collection({
      label: "Articoli",
      slugField: "titolo",
      path: "src/content/articoli/*",
      format: { contentField: "contenuto" },
      schema: {
        titolo: fields.slug({ name: { label: "Titolo" } }),
        descrizione: fields.text({
          label: "Descrizione breve",
          description: "Appare nei risultati di ricerca e nei social",
          multiline: true
        }),
        data: fields.date({ label: "Data pubblicazione" }),
        immagine: fields.image({
          label: "Immagine di copertina",
          directory: "public/images/articoli",
          publicPath: "/images/articoli/"
        }),
        contenuto: fields.markdoc({
          label: "Contenuto"
        })
      }
    })
  },
  singletons: {
    // ── HOMEPAGE ──────────────────────────────────────────────────────────
    homepage: singleton({
      label: "Homepage",
      path: "src/content/homepage",
      schema: {
        titolo: fields.text({ label: "Titolo principale" }),
        sottotitolo: fields.text({
          label: "Sottotitolo",
          multiline: true
        }),
        cta_testo: fields.text({ label: "Testo bottone CTA" }),
        cta_link: fields.text({ label: "Link bottone CTA" })
      }
    }),
    // ── IMPOSTAZIONI ──────────────────────────────────────────────────────
    impostazioni: singleton({
      label: "Impostazioni Sito",
      path: "src/content/impostazioni",
      schema: {
        nome_sito: fields.text({ label: "Nome del sito" }),
        descrizione_sito: fields.text({
          label: "Descrizione sito",
          multiline: true
        }),
        email: fields.text({ label: "Email di contatto" }),
        whatsapp: fields.text({ label: "Numero WhatsApp" })
      }
    })
  }
});

export { keystaticConfig as k };
