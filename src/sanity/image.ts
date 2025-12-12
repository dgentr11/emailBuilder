
import createImageUrlBuilder from '@sanity/image-url';

export const urlFor = (source: any) =>
  createImageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  }).image(source);
