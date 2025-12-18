
// lib/mapPressReleaseToEmailProps.ts
import { portableTextToEmailHtml } from '@/lib/ptToEmailHtml';

type PTBlocks = any[];

export type PressReleaseDoc = {
  _type: 'pressRelease';
  _id: string;
  title?: string;
  publishDate?: string; // Sanity 'datetime' resolves to ISO string
  emailTitle?: string,
  subtitle?: string;
  content?: PTBlocks;
  contentRich?: PTBlocks | null;
  headerImage?: { asset?: { url?: string }; alt?: string } | null;
  cta?: { label?: string; href?: string } | null;
};

export type PressReleaseProps = {
  title?: string;
  emailTitle?: string,
  publishDate?: string;
  subtitle?: string;
  headerImageUrl?: string;
  headerImageAlt?: string;
  contentHtml?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function ptToHtml(blocks?: PTBlocks | null): string | undefined {
  const arr = (blocks && Array.isArray(blocks) ? blocks : []) as PTBlocks;
  return arr.length ? portableTextToEmailHtml(arr as any) : undefined;
}

export function toPressReleaseEmailProps(doc: PressReleaseDoc): PressReleaseProps {
  const contentHtml = ptToHtml(
    (doc.contentRich && doc.contentRich.length ? doc.contentRich : doc.content) ?? []
  );

  return {
    title: doc.title,
    emailTitle: doc.emailTitle,
    publishDate: doc.publishDate,
    subtitle: doc.subtitle,
    headerImageUrl: doc.headerImage?.asset?.url,
    headerImageAlt: doc.headerImage?.alt,
    contentHtml,
    ctaLabel: doc.cta?.label ?? undefined,
    ctaHref: doc.cta?.href ?? undefined,
  };
}
