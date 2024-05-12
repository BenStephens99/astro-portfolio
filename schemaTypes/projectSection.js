import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectSection',
    title: 'Project Section',
    type: 'document',
    fields: [
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'imageCaption',
            title: 'Image Caption',
            type: 'string',
        }),
    ],
})
