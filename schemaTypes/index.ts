
import type { SchemaTypeDefinition } from 'sanity';

import newsletterSections from './objects/newsletterSections';
import newsletterIssue from './newsletterIssue';
import newsletterTraining from './newsletterTraining';
import pressRelease from './pressRelease';


const schemaTypes: SchemaTypeDefinition[] = [
  newsletterSections,
  newsletterIssue,
  newsletterTraining,
  pressRelease,
];

export default schemaTypes;
