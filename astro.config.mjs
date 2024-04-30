import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [sanity({
    projectId: "p4zme5fk",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/admin"
  }), react(), svelte()]
});