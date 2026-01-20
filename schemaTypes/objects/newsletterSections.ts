
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'newsletterSections',
  title: 'Section',
  type: 'array',
  options: {
    sortable: true,
  },
  of: [
	{
	  type: 'object',
	  name: 'articleWithImage',
	  title: 'Article with Image',
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
	},
	{
	  type: 'object',
	  name: 'listImageLeft',
	  title: 'List with Image on Left',
	  fields: [
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
		  name: 'listItems',
		  title: 'List Items',
		  type: 'array',
		  of: [ 
			{
				type: 'object',
				name: 'listItem',
				title: 'List Item',
				fields: [
					defineField({
						name: 'itemImage',
						type: 'image',
						title: 'List Item Image',
						options: { hotspot: true },
						fields: [
						defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
						],
					}),
					defineField({
						name: 'itemTitle',
						type: 'string',
						title: 'List Item Title'
					}),
					defineField({
						name: 'itemSummary',
						type: 'array',
						of: [{ type: 'block' }],
						title: 'List Item Summary'
					}),
					defineField({
						name: 'itemLinkURL',
						type: 'url',
						title: 'Item Link URL',
					  }),
					  defineField({
						name: 'itemLinkText',
						type: 'string',
						title: 'Item Link Text',
					  }),
					defineField({
						name: 'itemDivider',
						type: 'boolean',
						title: 'Show Divider after item?',
						initialValue: false
					}),
				]
			}
		   ],
		}),
	  ],
		preview: {
			select: {
				title: 'title',
				firstItemTitle: 'listItems.0.itemTitle',
				media: 'listItems.0.itemImage',
			},
			prepare({ title, firstItemTitle, media }) {
				return {
					title: 'List with Image on Left',
					subtitle: firstItemTitle || 'First item',
					media, 
				}
			},
		}
	},
	{
	  type: 'object',
	  name: 'divider',
	  title: 'Divider',
	  fields: [
		defineField({
			name: 'dividerToggle',
			type: 'boolean',
			title: 'Divider Toggle',
			initialValue: true,
			description: 'Toggle to enable/disable divider',
		})
	  ],
	  preview: {
		select: { title: 'title'},
		prepare(  selection ) {
			return {
			  title: 'Checkerboard Divider',

		  }
		}
	  }
	},
	{
		type: 'object',
		name: 'headerFourParagraphs',
		title: 'Header and Four Paragraphs',
		fields: [
			defineField({
				name: 'header',
				type: 'string',
				title: 'Header',
			}),
			defineField({
				name: 'summary',
				type: 'array',
				of: [{ type: 'block' }],
				title: 'Header Summary'
			}),
		  defineField({
			name: 'paragraphItems',
			title: 'Paragraph Items',
			type: 'array',
			validation: Rule => Rule.min(1).max(4).error('Paragraph Items must have between 1 and 4 items'),
			of: [ 
			  {
				  type: 'object',
				  name: 'paragraphItem',
				  title: 'Paragraph Item',
				  fields: [
					  defineField({
						  name: 'itemImage',
						  type: 'image',
						  title: 'Paragraph Item Image',
						  options: { hotspot: true },
						  fields: [
						  	defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
						  ],
					  }),
					  defineField({
						  name: 'paragraphItemTitle',
						  type: 'string',
						  title: 'Paragraph Item Title'
					  }),
					  defineField({
						  name: 'paragraphItemSummary',
						  type: 'array',
						  of: [{ type: 'block' }],
						  title: 'Paragraph Item Summary'
					  }),
				  ]
			  }
			 ],
		  }),
		],
		preview: {
			select: { title: 'title', subtitle: 'title'},
			prepare(selection) {
				const {title} = selection
				return {
				  title: 'Header and four paragraphs',
				  subtitle: title
			  	}
			}
		}
	  },
	  {
		type: 'object',
		name: 'summaryWithImage',
		title: 'Summary with Image',
		fields: [
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
				name: 'image',
				title: 'Image',
				type: 'image',
				options: { hotspot: true },
				fields: [
				defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
				],
			}),
		],
		preview: {
			select: { title: 'title', subtitle: 'title'},
			prepare(selection) {
				const {title} = selection
				return {
				  title: 'Summary with Image',
				  subtitle: title
			  	}
			}
		}
	  },
	  {
		type: 'object',
		name: 'simpleList',
		title: 'Simple List',
		fields: [
		  defineField({
			name: 'listItems',
			title: 'List Items',
			type: 'array',
			of: [ 
			  {
				  type: 'object',
				  name: 'listItem',
				  title: 'List Item',
				  fields: [ 
					  defineField({
						  name: 'itemTitle',
						  type: 'string',
						  title: 'List Item Title'
					  }),
					  defineField({
						  name: 'itemSummary',
						  type: 'array',
						  of: [{ type: 'block' }],
						  title: 'List Item Summary'
					  }),
					  defineField({
						name: 'itemDivider',
						type: 'boolean',
						title: 'Show Divider after item?',
						initialValue: false
					}),
				  ]
			  }
			 ],
		  }),
		  defineField({
			name: 'simpleListURL',
			type: 'url',
			title: 'Link href (URL)',
		  }),
		  defineField({
			name: 'simpleListURLText',
			type: 'string',
			title: 'Link Text',
		  }),
		],
		preview: {
			select: { title: 'title', subtitle: 'title'},
			prepare(selection) {
				return {
				  title: 'Simple List',
			  	}
			}
		}
	  },
	  {
		type: 'object',
		name: 'imagesOnVerticalGrid',
		title: 'images on Vertical Grid',
		fields: [
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
				name: 'imageItems',
				title: 'Image Items',
				type: 'array',
				validation: Rule => Rule.min(1).max(3).error('Image Items must have between 1 and 3 items'),
				of: [ 
				  {
					  type: 'object',
					  name: 'imageItem',
					  title: 'Image Item',
					  fields: [
						defineField({
							name: 'image',
							title: 'Image',
							type: 'image',
							options: { hotspot: true },
							fields: [
								defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
								defineField({ name: 'caption', type: 'string', title: 'Caption' }),
								defineField({ name: 'attribution', type: 'string', title: 'Attribution' }),
							],
						}),
					  ], 
					  preview: {
						select: { 
							title: 'image.caption', 
							subtitle: 'image.attribution',
							media: 'image'
						}
					  }
					}
				  ],
				}),
		],
		preview: {
			select: { 
				title: 'title', 
				subtitle: 'title',
				media: 'imageItems.0.image'
			},
			prepare({ title, media }) {
				return {
					title: 'Images on Vertical Grid',
					subtitle: title || '',
					media: media|| undefined
				}
			},
		  }
	  },
	  {
		type: 'object',
		name: 'richText',
		title: 'Rich Text',
		fields: [
			defineField({
				name: 'summary',
				type: 'array',
				of: [{ type: 'block' }],
				title: 'Rich Text Content'
			}),
		  
		],
		preview: {
			select: { title: 'title'},
			prepare(selection) {
				return {
				  title: 'Rich Text'
			  }
			}
		  }
	  },
	  {
		type: 'object',
		name: 'simpleImage',
		title: 'Simple Image',
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
		],
		preview: {
			select: { title: 'Simple Image', media: 'image'},
			prepare(selection) {
				const { media } = selection
				return {
				  title: 'Simple Image',
				  media: media
			  }
			}
		  }
	  },
	  {
		type: 'object',
		name: 'imageSummaryTwoImages',
		title: 'Image with Summary plus Two Images',
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
				title: 'Title',
				type: 'string',
			}),
			defineField({
				name: 'summary',
				title: 'Summary',
				type: 'string',
			}),
			defineField({
				name: 'imageItems',
				title: 'Two Image Items',
				type: 'array',
				validation: Rule => Rule.min(0).max(2).error('Image items cannot exceed 2'),
				of: [ 
				  {
					  type: 'object',
					  name: 'imageItem',
					  title: 'Image Item',
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
					  ], 
						preview: {
							select: {
							image: 'image',
							asset: 'image.asset',
							title: 'image.alt'
							},
								prepare({ image, asset, title }) {
								return {
									title: title || 'Image item',
									media: image || asset
								}
							}
						}
					}
				],
			}),
		],
		preview: {
			select: { title: 'Image with Summary plus Two Images', media: 'image'},
			prepare(selection) {
				const { media } = selection
				return {
				  title: 'Image with Summary plus Two Images',
				  media: media
			  }
			}
		  }
	  },
  ],
});
