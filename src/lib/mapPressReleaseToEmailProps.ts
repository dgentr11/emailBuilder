
import { PressReleaseEmailProps } from "../types/pressRelease";

export function mapPressReleaseToEmailProps(doc: any): PressReleaseEmailProps {
  return {
    _id: doc._id,
    title: doc.title ?? "",
    emailTitle: doc.emailTitle ?? doc.title,
    publishDate: doc.publishDate ?? "",
    pressReleaseArticle: doc.pressReleaseArticle
      ? {
          image: doc.pressReleaseArticle.image
            ? {
                asset: {
                  url: doc.pressReleaseArticle.image.asset?.url ?? ""
                },
                alt: doc.pressReleaseArticle.image.alt ?? "",
                imageLink: doc.pressReleaseArticle.image.imageLink ?? ""
              }
            : undefined,
          eyebrow: doc.pressReleaseArticle.eyebrow ?? "",
          title: doc.pressReleaseArticle.title ?? "",
          summary: doc.pressReleaseArticle.summary ?? [],
          url: doc.pressReleaseArticle.url ?? "",
          urlText: doc.pressReleaseArticle.urlText ?? ""
        }
      : undefined,
    slug: doc.slug,
    categories: doc.categories ?? [],
    tags: doc.tags ?? []
  };
}
