
// lib/mapTrainingToEmailProps.ts
import { portableTextToEmailHtml } from '@/lib/ptToEmailHtml';
import { formatPublishOrUpdatedDate, isValidDateString } from '@/lib/formatDate';


type PTBlocks = any[];

export type TrainingSection = {
  title: string;
  summary?: PTBlocks;
  summaryRich?: PTBlocks | null;
  url?: string | null;
  image?: { asset?: { url?: string }; alt?: string } | null;
  subsections?: Array<{
    title: string;
    summary?: PTBlocks;
    summaryRich?: PTBlocks | null;
    url?: string | null;
    image?: { asset?: { url?: string }; alt?: string } | null;
  }>;
};

export type TrainingDoc = {
  _type: 'trainingNewsletter';
  headerImage?: { asset?: { url?: string }; alt?: string } | null;
  publishDate?: string;
  title?: string;
  subtitle?: string;
  intro?: PTBlocks;
  introRich?: PTBlocks | null;
  sections?: TrainingSection[];
  outro?: PTBlocks;
  cta?: { label?: string; href?: string } | null;
  status?: 'draft' | 'scheduled' | 'sent';
  _updatedAt?: string;
};

export type TrainingNewsletterProps = {
  headerImageUrl?: string;
  headerImageAlt?: string;
  publishDate?: string;             // raw
  publishDateFormatted?: string;
  title?: string;
  subtitle?: string;
  introHtml?: string;
  sections: Array<{
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
  }>;
  outroHtml?: string;
  ctaLabel?: string;
  ctaHref?: string;
  status?: 'draft' | 'scheduled' | 'sent';
};

// helper
function ptToHtml(blocks?: PTBlocks | null): string | undefined {
  const arr = (blocks && Array.isArray(blocks) ? blocks : []) as PTBlocks;
  return arr.length ? portableTextToEmailHtml(arr as any) : undefined;
}

export function toTrainingEmailProps(doc: TrainingDoc): TrainingNewsletterProps {
  const introHtml = ptToHtml(
    (doc.introRich && doc.introRich.length ? doc.introRich : doc.intro) ?? []
  );

  const sections = (doc.sections ?? []).map((s) => {
    const summaryHtml = ptToHtml(
      (s.summaryRich && s.summaryRich.length ? s.summaryRich : s.summary) ?? []
    );

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

  
  const hasValidPublishDate = isValidDateString(doc.publishDate);
  const publishDateFormatted = formatPublishOrUpdatedDate({
    publishDate: doc.publishDate,
    _updatedAt: doc._updatedAt,
  });


  const outroHtml = ptToHtml(doc.outro ?? []);

  return {
    headerImageUrl: doc.headerImage?.asset?.url,
    headerImageAlt: doc.headerImage?.alt,
    title: doc.title,
    subtitle: doc.subtitle,
    introHtml,
    sections,
    outroHtml,
    ctaLabel: doc.cta?.label ?? undefined,
    ctaHref: doc.cta?.href ?? undefined,
    status: doc.status,
    publishDate: hasValidPublishDate ? doc.publishDate : undefined,
    publishDateFormatted,
  };

}
