
export interface PressReleaseEmailProps {
    _id: string;
    title: string;
    emailTitle?: string;
    publishDate?: string;
    pressReleaseArticle?: {
      image?: {
        asset?: { url: string };
        alt?: string;
        imageLink?: string;
      };
      eyebrow?: string;
      title?: string;
      summary?: any[];
      url?: string;
      urlText?: string;
    };
    slug?: { current: string };
    categories?: { _id: string; title: string; slug?: { current: string } }[];
    tags?: string[];
  }
  