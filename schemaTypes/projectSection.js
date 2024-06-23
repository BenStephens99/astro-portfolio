import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectSection',
    title: 'Project Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
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
