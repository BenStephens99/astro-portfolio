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
    ],
})
