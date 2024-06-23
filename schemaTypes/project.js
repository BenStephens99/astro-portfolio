import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',            
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'openInNewTab',
            title: 'Open in New Tab',
            type: 'boolean',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'technology' }] }],
        }),
        defineField({
            name: 'github',
            title: 'GitHub',
            type: 'url',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [{ type: 'projectSection' }],
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ],
})
