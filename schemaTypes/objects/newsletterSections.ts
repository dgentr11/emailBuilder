
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
			defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
			name: 'headingToggle',
			type: 'boolean',
			title: 'Make Title H1?',
			initialValue: false
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
						defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
		}),
		defineField({
			name: 'previewImage',
			type: 'image',
			title: 'Preview Image',
			hidden: true,
			description: 'Internal field for preview - references checkerboard divider image',
			options: {
				accept: 'image/*'
			}
		})
	  ],
	  preview: {
		select: { 
			image: 'previewImage',
			asset: 'previewImage.asset'
		},
		prepare(selection) {
			const { image, asset } = selection;
			// Fallback to hardcoded asset reference if previewImage is not set
			const media = image || asset || {
				_type: 'image',
				asset: {
					_type: 'reference',
					_ref: 'image-35a6953400339f172fe89c59e24abec864d5e01f-300x34-jpg'
				}
			};
			return {
			  title: 'Checkerboard Divider',
			  subtitle: 'Orange and white checkerboard pattern',
			  media: media
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
						  	defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
			select: { 
				header: 'header',
				firstItemImage: 'paragraphItems[0].itemImage',
				firstItemAsset: 'paragraphItems[0].itemImage.asset'
			},
			prepare(selection) {
				const {header, firstItemImage, firstItemAsset} = selection
				return {
				  title: header || 'Header and four paragraphs',
				  subtitle: header ? 'Four paragraph items' : undefined,
				  media: firstItemImage || firstItemAsset
			  	}
			}
		}
	  },
	  {
		type: 'object',
		name: 'headerThreeParagraphs',
		title: 'Header and three centered paragraphs',
		fields: [
			defineField({
				name: 'header',
				type: 'string',
				title: 'Header Title',
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
				validation: Rule => Rule.min(1).max(4).error('Paragraph Items must have between 1 and 3 items'),
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
								  defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
				  title: 'Header and three centered paragraphs',
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
				defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
				],
			}),
		],
		preview: {
			select: { 
				title: 'title',
				eyebrow: 'eyebrow',
				image: 'image',
				asset: 'image.asset'
			},
			prepare(selection) {
				const {title, eyebrow, image, asset} = selection
				return {
				  title: title || eyebrow || 'Summary with Image',
				  subtitle: eyebrow && title ? eyebrow : undefined,
				  media: image || asset
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
								defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
			defineField({
				name: 'postSummary',
				type: 'array',
				of: [{ type: 'block' }],
				title: 'Post Summary',
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
				defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
				defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
								defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
			defineField({
				name: 'postSummary',
				title: 'Post Summary',
				type: 'array',
				of: [{ type: 'block' }],
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
	  {
		type: 'object',
		name: 'imageSummaryAlternatingText',
		title: 'Image with Summary plus 50/50 Image/Text Blocks',
		fields: [
			defineField({
				name: 'image',
				title: 'Image',
				type: 'image',
				options: { hotspot: true },
				fields: [
				defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
				defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
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
				name: 'alternatingTextItems',
				title: 'Alternating Text/Image Items',
				type: 'array',
				of: [ 
				  {
					  type: 'object',
					  name: 'imageTextItem',
					  title: 'Image/Text Item',
					  fields: [
						defineField({
							name: 'imageOnRight',
							type: 'boolean',
							title: 'Image on Right?',
							initialValue: false
						}),
						defineField({
							name: 'imageItem',
							title: 'Image Item',
							type: 'image',
							options: { hotspot: true },
							fields: [
								defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
								defineField({name: 'imageLink', type: 'url', title: 'Image Link'}),
							],
							
						}),
						defineField({
							name: 'textItem',
							title: 'Text Item',
							type: 'array',
							of: [{ type: 'block' }],
						})
					  ], 
						preview: {
							select: {
								imageItem: 'imageItem',
								asset: 'imageItem.asset',
								alt: 'imageItem.alt',
								textItem: 'textItem'
							},
							prepare({ imageItem, asset, alt, textItem }) {
								// Extract text from Portable Text array for title
								const getTextFromBlocks = (blocks: any[]) => {
									if (!blocks || !Array.isArray(blocks)) return '';
									return blocks
										.filter(block => block._type === 'block' && block.children)
										.map(block => 
											block.children
												.filter((child: any) => child._type === 'span')
												.map((child: any) => child.text)
												.join('')
										)
										.join(' ')
										.substring(0, 50) || '';
								};
								
								const textPreview = getTextFromBlocks(textItem);
								const title = textPreview || alt || 'Image/Text Item';
								
								return {
									title: title,
									subtitle: alt ? `Alt: ${alt}` : undefined,
									media: imageItem || asset
								}
							}
						}
					}
				],
			})
		],
		preview: {
			select: { title: 'Image with Summary plus Two Images', media: 'image'},
			prepare(selection) {
				const { media } = selection
				return {
				  title: 'Image with Summary plus 50/50 Image/Text Blocks',
				  media: media
			  }
			}
		  }
	  },
  ],
});
