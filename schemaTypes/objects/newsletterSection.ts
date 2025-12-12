
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'newsletterSection',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
      ],
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: r => r.required(),
    }),
     defineField({
        name: 'summary',
        type: 'array',
        of: [{ type: 'block' }],
        title: 'Section Summary',
      }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Link',
    }),
    defineField({
      name: 'subsections',
      title: 'Subsections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'subsection',
          title: 'Subsection',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: r => r.required(),
            }),
            defineField({
              name: 'summary',
              type: 'array',
              of: [{ type: 'block' }],
              title: 'Subsection Summary',
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'Link',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
});
