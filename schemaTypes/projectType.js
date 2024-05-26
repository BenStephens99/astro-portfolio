import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectType',
    title: 'Project Type',
    type: 'document',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
        }),
        defineField({
            name: 'sortOrder',
            title: 'Sort Order',
            type: 'number',
        }),
    ],
})
