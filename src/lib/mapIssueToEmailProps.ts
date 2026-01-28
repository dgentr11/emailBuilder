
// lib/mapIssueToEmailProps.ts

import { portableTextToEmailHtml } from '@/lib/ptToEmailHtml';

/**
 * If you have @sanity/types installed, you can replace PTBlocks = PortableTextBlock[].
 * Keeping it as any[] here to avoid coupling.
 */
type PTBlocks = any[];

// Section type definitions matching the Sanity schema
export type ArticleWithImageSection = {
  _type: 'articleWithImage';
  image?: { asset?: { url?: string }; alt?: string, imageLink?: string } | null;
  eyebrow?: string;
  title: string;
  headingToggle?: boolean;
  summary?: PTBlocks;
  url?: string;
  urlText?: string;
};

export type ListImageLeftSection = {
  _type: 'listImageLeft';
  title?: string;
  summary?: PTBlocks;
  listItems?: Array<{
    itemImage?: { asset?: { url?: string }; alt?: string, imageLink?: string } | null;
    itemTitle?: string;
    itemSummary?: PTBlocks;
    itemLinkURL?: string;
    itemLinkText?: string;
    itemDivider?: boolean;
  }>;
};

export type DividerSection = {
  _type: 'divider';
  dividerToggle?: boolean;
};

export type HeaderFourParagraphsSection = {
  _type: 'headerFourParagraphs';
  header?: string;
  summary?: PTBlocks;
  paragraphItems?: Array<{
    itemImage?: { asset?: { url?: string }; alt?: string, imageLink?: string } | null;
    paragraphItemTitle?: string;
    paragraphItemSummary?: PTBlocks;
  }>;
};

export type HeaderThreeParagraphsSection = {
  _type: 'headerThreeParagraphs';
  header?: string;
  summary?: PTBlocks;
  paragraphItems?: Array<{
    itemImage?: { asset?: { url?: string }; alt?: string, imageLink?: string } | null;
    paragraphItemTitle?: string;
    paragraphItemSummary?: PTBlocks;
  }>;
};

export type SummaryWithImageSection = {
  _type: 'summaryWithImage';
  eyebrow?: string;
  title?: string;
  summary?: PTBlocks;
  image?: { asset?: { url?: string }; alt?: string, imageLink?: string } | null;
};

export type SimpleListSection = {
  _type: 'simpleList';
  listItems?: Array<{
    itemTitle?: string;
    itemSummary?: PTBlocks;
    itemDivider?: boolean;
  }>;
  simpleListURL?: string;
  simpleListURLText?: string;
};

export type ImagesOnVerticalGridSection = {
  _type: 'imagesOnVerticalGrid';
  eyebrow?: string;
  title?: string;
  summary?: PTBlocks;
  postSummary?: PTBlocks;
  imageItems?: Array<{
    image?: { asset?: { url?: string }; alt?: string; caption?: string; attribution?: string; imageLink?: string } | null;
  }>;
};

export type RichTextSection = {
  _type: 'richText';
  summary?: PTBlocks;
};

export type SimpleImageSection = {
  _type: 'simpleImage';
  image?: { asset?: { url?: string }; alt?: string, imageLink?: string } | null;
};

export type ImageSummaryTwoImages = {
  _type: 'imageSummaryTwoImages';
  image?: {  asset?: { url?: string }; alt?: string, imageLink?: string } | null;
  title?: string;
  summary?: string;
  imageItems?: Array<{
    image?: { asset?: { url?: string }; alt?: string; caption?: string; attribution?: string; imageLink?: string } | null;
  }>;
  postSummary?: PTBlocks;
}

export type ImageSummaryAlternatingText = {
  _type: 'imageSummaryAlternatingText';
  image?: {  asset?: { url?: string }; alt?: string, imageLink?: string } | null;
  title?: string;
  summary?: string;
  alternatingTextItems?: Array<{
    imageOnRight?: boolean;
    imageItem?: { asset?: { url?: string }; alt?: string; imageLink?: string } | null;
    textItem?: PTBlocks | null;
  }>;
  postSummary?: PTBlocks;
}

export type NewsletterSection = 
  | ArticleWithImageSection
  | ListImageLeftSection
  | DividerSection
  | HeaderFourParagraphsSection
  | HeaderThreeParagraphsSection
  | SummaryWithImageSection
  | SimpleListSection
  | ImagesOnVerticalGridSection
  | RichTextSection
  | SimpleImageSection
  | ImageSummaryTwoImages
  | ImageSummaryAlternatingText;

export type IssueDoc = {
  headerImage?: { asset?: { url?: string }; alt?: string } | null;
  title?: string;
  emailTitle?: string;
  publishDate?: string;
  intro?: PTBlocks;
  introRich?: PTBlocks | null;
  sections?: NewsletterSection[];
  status?: 'draft' | 'scheduled' | 'sent';
};

// Mapped section types for email components
export type ArticleWithImageView = {
  _type: 'articleWithImage';
  imageUrl?: string;
  imageAlt?: string;
  imageLink?: string;
  eyebrow?: string;
  title: string;
  headingToggle?: boolean;
  summaryHtml?: string;
  url?: string;
  urlText?: string;
};

export type ListImageLeftView = {
  _type: 'listImageLeft';
  title?: string;
  summaryHtml?: string;
  listItems?: Array<{
    itemImageUrl?: string;
    itemImageAlt?: string;
    itemImageLink?: string;
    itemTitle?: string;
    itemSummaryHtml?: string;
    itemLinkURL?: string;
    itemLinkText?: string;
    itemDivider?: boolean;
  }>;
};

export type DividerView = {
  _type: 'divider';
  dividerToggle?: boolean;
};

export type HeaderFourParagraphsView = {
  _type: 'headerFourParagraphs';
  header?: string;
  summaryHtml?: string;
  paragraphItems?: Array<{
    itemImageUrl?: string;
    itemImageAlt?: string;
    itemImageLink?: string;
    paragraphItemTitle?: string;
    paragraphItemSummaryHtml?: string;
  }>;
};

export type HeaderThreeParagraphsView = {
  _type: 'headerThreeParagraphs';
  header?: string;
  summaryHtml?: string;
  paragraphItems?: Array<{
    itemImageUrl?: string;
    itemImageAlt?: string;
    itemImageLink?: string;
    paragraphItemTitle?: string;
    paragraphItemSummaryHtml?: string;
  }>;
};

export type SummaryWithImageView = {
  _type: 'summaryWithImage';
  eyebrow?: string;
  title?: string;
  summaryHtml?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageLink?: string;
};

export type SimpleListView = {
  _type: 'simpleList';
  listItems?: Array<{
    itemTitle?: string;
    itemSummaryHtml?: string;
    itemDivider?: boolean;
  }>;
  simpleListURL?: string;
  simpleListURLText?: string;
};

export type ImagesOnVerticalGridView = {
  _type: 'imagesOnVerticalGrid';
  eyebrow?: string;
  title?: string;
  summaryHtml?: string;
  postSummaryHtml?: string;
  imageItems?: Array<{
    imageUrl?: string;
    imageAlt?: string;
    imageLink?: string;
    caption?: string;
    attribution?: string;
  }>;
};

export type RichTextView = {
  _type: 'richText';
  summaryHtml?: string;
};

export type SimpleImageView = {
  _type: 'simpleImage';
  imageUrl?: string;
  imageAlt?: string;
  imageLink?: string;
};

export type ImageSummaryTwoImagesView = {
  _type: 'imageSummaryTwoImages';
  imageUrl?: string;
  imageAlt?: string;
  imageLink?: string;
  title?: string;
  summary?: string;
  imageItems?: Array<{
    imageUrl?: string;
    imageAlt?: string;
    imageLink?: string;
  }>;
  postSummaryHtml?: string;
};

export type ImageSummaryAlternatingTextView = {
  _type: 'imageSummaryAlternatingText';
  imageUrl?: string;
  imageAlt?: string;
  imageLink?: string;
  title?: string;
  summary?: string;
  alternatingTextItems?: Array<{
    imageOnRight?: boolean;
    imageItemUrl?: string;
    imageItemAlt?: string;
    imageItemLink?: string;
    textItem?: string;
  }>;
  postSummaryHtml?: string;
};

export type SectionView = 
  | ArticleWithImageView
  | ListImageLeftView
  | DividerView
  | HeaderFourParagraphsView
  | HeaderThreeParagraphsView
  | SummaryWithImageView
  | SimpleListView
  | ImagesOnVerticalGridView
  | RichTextView
  | SimpleImageView
  | ImageSummaryTwoImagesView
  | ImageSummaryAlternatingTextView;

// Final props passed to WeeklyNewsletter
export type WeeklyNewsletterProps = {
  headerImageUrl?: string;
  headerImageAlt?: string;
  title?: string;
  publishDate?: string;
  introHtml?: string;
  sections: SectionView[];
  status?: 'draft' | 'scheduled' | 'sent';
};

/**
 * Convert a Portable Text array (or undefined) to email HTML.
 * Returns undefined if blocks are empty or not provided.
 */
function ptToHtml(blocks?: PTBlocks | null): string | undefined {
  const arr = (blocks && Array.isArray(blocks) ? blocks : []) as PTBlocks;
  return arr.length ? portableTextToEmailHtml(arr as any) : undefined;
}

/**
 * Maps a Sanity issue document into the props expected by the WeeklyNewsletter email component.
 * - Handles intro/outro as Portable Text → HTML
 * - Maps sections based on their _type discriminator
 * - Converts Portable Text to HTML for all rich text fields
 */
export function toEmailProps(doc: IssueDoc): WeeklyNewsletterProps {

  // Map sections based on their _type
  const sections: SectionView[] = (doc.sections ?? []).map((s): SectionView => {
    switch (s._type) {
      case 'articleWithImage': {
        return {
          _type: 'articleWithImage',
          imageUrl: s.image?.asset?.url,
          imageAlt: s.image?.alt,
          imageLink: s.image?.imageLink,
          eyebrow: s.eyebrow,
          title: s.title,
          headingToggle: s.headingToggle ?? false,
          summaryHtml: ptToHtml(s.summary),
          url: s.url ?? undefined,
          urlText: s.urlText,
        };
      }
      case 'listImageLeft': {
        return {
          _type: 'listImageLeft',
          title: s.title,
          summaryHtml: ptToHtml(s.summary),
          listItems: s.listItems?.map(item => ({
            itemImageUrl: item.itemImage?.asset?.url,
            itemImageAlt: item.itemImage?.alt,
            itemImageLink: item.itemImage?.imageLink,
            itemTitle: item.itemTitle,
            itemSummaryHtml: ptToHtml(item.itemSummary),
            itemLinkURL: item.itemLinkURL,
            itemLinkText: item.itemLinkText,
            itemDivider: item.itemDivider ?? false,
          })),
        };
      }
      case 'divider': {
        return {
          _type: 'divider',
          dividerToggle: s.dividerToggle ?? true,
        };
      }
      case 'headerFourParagraphs': {
        return {
          _type: 'headerFourParagraphs',
          header: s.header,
          summaryHtml: ptToHtml(s.summary),
          paragraphItems: s.paragraphItems?.map(item => ({
            itemImageUrl: item.itemImage?.asset?.url,
            itemImageAlt: item.itemImage?.alt,
            itemImageLink: item.itemImage?.imageLink,
            paragraphItemTitle: item.paragraphItemTitle,
            paragraphItemSummaryHtml: ptToHtml(item.paragraphItemSummary),
          })),
        };
      }
      case 'headerThreeParagraphs': {
        return {
          _type: 'headerThreeParagraphs',
          header: s.header,
          summaryHtml: ptToHtml(s.summary),
          paragraphItems: s.paragraphItems?.map(item => ({
            itemImageUrl: item.itemImage?.asset?.url,
            itemImageAlt: item.itemImage?.alt,
            itemImageLink: item.itemImage?.imageLink,
            paragraphItemTitle: item.paragraphItemTitle,
            paragraphItemSummaryHtml: ptToHtml(item.paragraphItemSummary),
          })),
        };
      }
      case 'summaryWithImage': {
        return {
          _type: 'summaryWithImage',
          eyebrow: s.eyebrow,
          title: s.title,
          summaryHtml: ptToHtml(s.summary),
          imageUrl: s.image?.asset?.url,
          imageAlt: s.image?.alt,
          imageLink: s.image?.imageLink,
        };
      }
      case 'simpleList': {
        return {
          _type: 'simpleList',
          listItems: s.listItems?.map(item => ({
            itemTitle: item.itemTitle,
            itemSummaryHtml: ptToHtml(item.itemSummary),
            itemDivider: item.itemDivider ?? false
          })),
          simpleListURL: s.simpleListURL,
          simpleListURLText: s.simpleListURLText,
        };
      }
      case 'imagesOnVerticalGrid': {
        return {
          _type: 'imagesOnVerticalGrid',
          eyebrow: s.eyebrow,
          title: s.title,
          summaryHtml: ptToHtml(s.summary),
          postSummaryHtml: ptToHtml(s.postSummary),
          imageItems: s.imageItems?.map(item => ({
            imageUrl: item.image?.asset?.url,
            imageAlt: item.image?.alt,
            imageLink: item.image?.imageLink,
            caption: item.image?.caption,
            attribution: item.image?.attribution,
          })),
        };
      }
      case 'richText': {
        return {
          _type: 'richText',
          summaryHtml: ptToHtml(s.summary),
        };
      }
      case 'simpleImage': {
        return {
          _type: 'simpleImage',
          imageUrl: s.image?.asset?.url,
          imageAlt: s.image?.alt,
        };
      }
        case 'imageSummaryTwoImages': {
          return {
            _type: 'imageSummaryTwoImages',
            imageAlt: s.image?.alt,
            imageUrl: s.image?.asset?.url,
            imageLink: s.image?.imageLink,
            title: s.title,
            summary: s.summary,
            postSummaryHtml: ptToHtml(s.postSummary),
            imageItems: s.imageItems?.map(item => ({
              imageUrl: item.image?.asset?.url,
              imageAlt: item.image?.alt,
              imageLink: item.image?.imageLink,
              caption: item.image?.caption,
              attribution: item.image?.attribution,
            })),
          };
        }
      case 'imageSummaryAlternatingText': {
        return {
          _type: 'imageSummaryAlternatingText',
          imageAlt: s.image?.alt,
          imageUrl: s.image?.asset?.url,
          imageLink: s.image?.imageLink,
          title: s.title,
          summary: s.summary,
          postSummaryHtml: ptToHtml(s.postSummary),
          alternatingTextItems: s.alternatingTextItems?.map(item => ({
            imageOnRight: item.imageOnRight ?? false,
            imageItemUrl: item.imageItem?.asset?.url,
            imageItemAlt: item.imageItem?.alt,
            imageItemLink: item.imageItem?.imageLink,
            textItem: ptToHtml(item.textItem),
          })),
        };
      }
      default: {
        // Fallback for unknown types
        const _exhaustive: never = s;
        throw new Error(`Unknown section type: ${(_exhaustive as any)._type}`);
      }
    }
  });


  return {
    headerImageUrl: doc.headerImage?.asset?.url,
    headerImageAlt: doc.headerImage?.alt,
    title: doc.title,
    publishDate: doc.publishDate,
    sections,
    status: doc.status,
  };
}