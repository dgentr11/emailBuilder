
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pressRelease',
  title: 'Press Release / Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
      ],
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Internal/display title for the newsletter issue',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string', title: 'Button Text' }),
        defineField({ name: 'href', type: 'url', title: 'Button Link' }),
      ],
    }),
  ],
});
