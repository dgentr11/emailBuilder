
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemaTypes from './schemaTypes';

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: 'Email Builder',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: schemaTypes }
});
