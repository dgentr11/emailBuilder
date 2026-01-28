
import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'pressRelease',
	title: 'Press Release',
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
			type: 'date'
		}),
		defineField({
			type: 'object',
			name: 'pressReleaseArticle',
			title: 'Article with Image',
			fields: [
			  defineField({
				name: 'image',
				title: 'Image',
				type: 'image',
				options: { hotspot: true },
				fields: [
				  defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
				  defineField({ name: 'imageLink', type: 'url', title: 'Image Link'}),
				],
			  }),
			  defineField({
				name: 'eyebrow',
				type: 'string',
				title: 'Eyebrow',
			  }),
			  defineField({
				name: 'title',
				type: 'string',
				title: 'Title',
			  }),
			  defineField({
				name: 'summary',
				type: 'array',
				of: [{ type: 'block' }],
				title: 'Summary',
			  }),
			  defineField({
				name: 'url',
				type: 'url',
				title: 'Link',
				validation: Rule => Rule.uri({
				  scheme: ['http', 'https', 'mailto', 'tel']
				})
			  }),
			  defineField({
				  name: 'urlText',
				  type: 'string',
				  title: 'Link Text',
				}),
			],
			preview: {
			  select: { title: 'title',  subtitle: 'title', media: 'image'},
			  prepare({ title, media }) {
				  return {
					  title: 'Article with Image',
					  subtitle: title || '',
					  media, 
				  }
			  },
			}
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
