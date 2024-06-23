import { defineField, defineType } from 'sanity'
import { CodeBlockIcon } from '@sanity/icons'

export default defineType({
    name: 'projectType',
    title: 'Projects',
    type: 'document',
    icon: CodeBlockIcon,
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
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
