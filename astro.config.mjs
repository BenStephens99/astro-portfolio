import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "p4zme5fk",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/admin"
  }), react(), svelte()]
});