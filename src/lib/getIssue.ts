
import { client } from '@/sanity/client';
import { LATEST_SCHEDULED, SCHEMA_TYPES, DOC_BY_ID } from '@/sanity/queries';

export async function getIssueById(id: string) {
  return client.fetch(DOC_BY_ID, { id }, { next: { revalidate: 0 } });
}

export async function getLatestScheduledIssue() {
  return client.fetch(LATEST_SCHEDULED, {}, { next: { revalidate: 0 } });
}

export async function getSchemaTypes() {
  return client.fetch<string[]>(SCHEMA_TYPES);
}

export async function getLatestByType(type: string, limit = 8) {
  const query = `
    *[_type == $type && !(_id in path("drafts.**"))]
    | order(_updatedAt desc)[0...$limit]{
      _id,
      _type,
      title,
      issueNumber,
      publishDate,
      status,
      _updatedAt
    }
  `;
  return client.fetch(query, { type, limit });
}
