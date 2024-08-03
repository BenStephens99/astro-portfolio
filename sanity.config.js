import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';
import { media } from 'sanity-plugin-media';
import { BlockContentIcon, CodeBlockIcon, HomeIcon } from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'astro-portfolio',

  projectId: 'p4zme5fk',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Sections')
              .icon(HomeIcon)
              .child(S.documentTypeList('homeSection')),
            S.divider(),
            S.listItem()
              .title('Projects')
              .icon(CodeBlockIcon)
              .child(S.documentTypeList('projectType')),
            S.divider(),
            S.listItem()
              .title('Blog Posts')
              .icon(BlockContentIcon)
              .child(S.documentTypeList('blog')),
          ]),
    }),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
});
