
import type { SchemaTypeDefinition } from 'sanity';

import newsletterSection from './objects/newsletterSection';
import newsletterIssue from './newsletterIssue';
import newsletterTraining from './newsletterTraining';
import pressRelease from './pressRelease';

const schemaTypes: SchemaTypeDefinition[] = [
  newsletterSection,
  newsletterIssue,
  newsletterTraining,
  pressRelease
];

export default schemaTypes;
