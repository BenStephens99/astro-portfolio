import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'astro-portfolio',

  projectId: 'p4zme5fk',
  dataset: 'production',

  plugins: [structureTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
