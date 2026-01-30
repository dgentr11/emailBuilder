import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import schemaTypes from './schemaTypes';

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: 'Email Builder',
  basePath: '/studio',
  plugins: [
    deskTool(),
    media({
      creditLine: {
        enabled: true,
        excludeSources: ['unsplash'],
      },
      maximumUploadSize: 10_000_000, // 10MB
    }),
  ],
  schema: { types: schemaTypes },
  form: {
    file: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter((source) => source !== mediaAssetSource),
    },
  },
});
