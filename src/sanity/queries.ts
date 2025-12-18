import { groq } from 'next-sanity';

export const SCHEMA_TYPES = groq`
  array::unique(*[_type != null]._type) | order(@ desc)
`;

export const DOC_BY_ID = `
*[_id == $id][0]{
  _type,
  _id,
  headerImage{asset->{url}, alt},
  title,
  emailTitle,
  subtitle,
  cta{label, href},
  issueNumber,
  publishDate,
  status,
  intro,
  introRich,
  sections[]{
    title,
    summary,
    summaryRich,
    url,
    image{asset->{url}, alt},
    subsections[]{
      title,
      summary,
      summaryRich,
      url,
      image{asset->{url}, alt}
    }
  },
  outro,
  slug,
  content,
  contentRich,
  categories[]->{ _id, title, slug },
  tags
}
`;

export const LATEST_SCHEDULED = `
*[_type == "newsletterIssue"]
| order(publishDate desc)[0]{
  _id,
  headerImage{
    asset->{
      url
    },
    alt
  },
  title,
  emailTitle,
  issueNumber,
  publishDate,
  intro,
  sections[]{
    title,
    summary,
    url,
    image{
      asset->{
        url
      },
      alt
    },
    subsections[]{
      title,
      summary,
      url,
      image{
        asset->{
          url
        },
        alt
      }
    }
  },
  cta{label, href},
  status,
  outro
}
`;
