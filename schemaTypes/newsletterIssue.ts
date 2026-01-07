
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'newsletterIssue',
  title: 'Newsletter',
  description: 'A general newsletter template with many section options',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Internal title for display in the Studio',
    }),
     defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'newsletterSections',
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
