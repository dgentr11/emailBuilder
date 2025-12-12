
// lib/mapIssueToEmailProps.ts

import { portableTextToEmailHtml } from '@/lib/ptToEmailHtml';

/**
 * If you have @sanity/types installed, you can replace PTBlocks = PortableTextBlock[].
 * Keeping it as any[] here to avoid coupling.
 */
type PTBlocks = any[];

export type NewsletterSubsection = {
  title: string;
  summary?: PTBlocks;
  summaryRich?: PTBlocks | null;
  url?: string | null;
  image?: { asset?: { url?: string }; alt?: string } | null;
};

export type NewsletterSection = {
  title: string;
  summary?: PTBlocks;
  summaryRich?: PTBlocks | null;
  url?: string | null;
  image?: { asset?: { url?: string }; alt?: string } | null;

  // Optional nested subsections
  subsections?: NewsletterSubsection[];
};

export type IssueDoc = {
  headerImage?: { asset?: { url?: string }; alt?: string } | null;
  title?: string;
  issueNumber?: number;
  publishDate?: string; // Sanity 'datetime' resolves to ISO string
  intro?: PTBlocks;
  introRich?: PTBlocks | null;
  sections?: NewsletterSection[];
  outro?: PTBlocks;
  cta?: { label?: string; href?: string } | null;
  status?: 'draft' | 'scheduled' | 'sent';
};

// What the email component expects per section
export type SectionView = {
  title: string;
  summaryHtml?: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  subsections?: Array<{
    title: string;
    summaryHtml?: string;
    url?: string;
    imageUrl?: string;
    imageAlt?: string;
  }>;
};

// Final props passed to WeeklyNewsletter
export type WeeklyNewsletterProps = {
  headerImageUrl?: string;
  headerImageAlt?: string;
  title?: string;
  issueNumber: number;
  publishDate?: string;
  introHtml?: string;
  sections: SectionView[];
  outroHtml?: string;
  ctaLabel?: string;
  ctaHref?: string;
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
 * - Maps sections and optional nested subsections
 * - Prefers "Rich" variants when present (future-friendly)
 */
export function toEmailProps(doc: IssueDoc): WeeklyNewsletterProps {
  // Intro: prefer introRich if present; else intro
  const introHtml = ptToHtml(
    (doc.introRich && doc.introRich.length ? doc.introRich : doc.intro) ?? []
  );

  // Sections
  const sections: SectionView[] = (doc.sections ?? []).map((s) => {
    const summaryHtml = ptToHtml(
      (s.summaryRich && s.summaryRich.length ? s.summaryRich : s.summary) ?? []
    );

    // Subsections (optional)
    const subsections =
      (s.subsections ?? []).map((ss) => {
        const subSummaryHtml = ptToHtml(
          (ss.summaryRich && ss.summaryRich.length ? ss.summaryRich : ss.summary) ?? []
        );

        return {
          title: ss.title,
          summaryHtml: subSummaryHtml,
          url: ss.url ?? undefined,
          imageUrl: ss.image?.asset?.url,
          imageAlt: ss.image?.alt,
        };
      }) || undefined;

    return {
      title: s.title,
      summaryHtml,
      url: s.url ?? undefined,
      imageUrl: s.image?.asset?.url,
      imageAlt: s.image?.alt,
      subsections,
    };
  });


  // Outro
  const outroHtml = ptToHtml(doc.outro ?? []);

  return {
    headerImageUrl: doc.headerImage?.asset?.url,
    headerImageAlt: doc.headerImage?.alt,
    title: doc.title,
    issueNumber: doc.issueNumber ?? 0,
    publishDate: doc.publishDate,
    introHtml,
    sections,
    outroHtml,
    ctaLabel: doc.cta?.label ?? undefined,
    ctaHref: doc.cta?.href ?? undefined,
    status: doc.status,
  };
}