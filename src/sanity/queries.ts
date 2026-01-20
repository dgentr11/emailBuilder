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
    _type,
    image{asset->{url}, alt},
    eyebrow,
    title,
    summary,
    url,
    urlText,
    dividerToggle,
    header,
    listItems[]{
      itemImage{asset->{url}, alt},
      itemTitle,
      itemSummary,
      itemLinkURL,
      itemLinkText,
      itemDivider
    },
    paragraphItems[]{
      itemImage{asset->{url}, alt},
      paragraphItemTitle,
      paragraphItemSummary
    },
    simpleListURL,
    simpleListURLText,
    imageItems[]{
      image{
        asset->{url},
        alt,
        caption,
        attribution
      }
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
    _type,
    image{asset->{url}, alt},
    eyebrow,
    title,
    summary,
    url,
    urlText,
    dividerToggle,
    header,
    listItems[]{
      itemImage{asset->{url}, alt},
      itemTitle,
      itemSummary,
      itemLinkURL,
      itemLinkText,
      itemDivider
    },
    paragraphItems[]{
      itemImage{asset->{url}, alt},
      paragraphItemTitle,
      paragraphItemSummary
    },
    simpleListURL,
    simpleListURLText,
    imageItems[]{
      image{
        asset->{url},
        alt,
        caption,
        attribution
      }
    }
  },
  cta{label, href},
  status,
  outro
}
`;
