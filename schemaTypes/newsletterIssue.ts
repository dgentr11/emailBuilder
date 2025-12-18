
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'newsletterIssue',
  title: 'Facilities Services Newsletter',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Internal title for display in the Studio',
    }),
     defineField({
        name: 'emailTitle',
        title: 'Display Title',
        type: 'string',
        description: 'H1 title to be displayed on the email',
    }),
     defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    }),
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
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'newsletterSection' }],
    }),
    defineField({
      name: 'outro',
      title: 'Outro',
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
    defineField({
      name: 'status',
      title: 'Workflow Status',
      type: 'string',
      options: { list: ['draft', 'scheduled', 'sent'] },
      initialValue: 'draft',
    }),
  ],
});
