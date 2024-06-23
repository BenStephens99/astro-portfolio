import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'technology',
    title: 'Technologies',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image'
        }),
    ],
})
