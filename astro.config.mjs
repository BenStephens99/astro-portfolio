import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/static';
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.benstephens.uk",
  output: 'static',
  adapter: vercel({ 
    webAnalytics: { enabled: true },
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: "monthly",
    }), 
    sanity({
      projectId: "p4zme5fk",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin"
    }), react(), svelte()]
});
