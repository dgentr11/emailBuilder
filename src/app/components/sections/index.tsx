import { Section, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { SectionView } from '@/lib/mapIssueToEmailProps';
import { ArticleWithImage } from './ArticleWithImage';
import { ListImageLeft } from './ListImageLeft';
import { Divider } from './Divider';
import { HeaderFourParagraphs } from './HeaderFourParagraphs';
import { SummaryWithImage } from './SummaryWithImage';
import { SimpleList } from './SimpleList';
import { ImagesOnVerticalGrid } from './ImagesOnVerticalGrid';
import { RichText } from './RichText';
import { SimpleImage } from './SimpleImage';
import { SimpleCta } from './SimpleCta';
import { ImageSummaryTwoImages } from './ImageSummaryTwoImages';
import { HeaderThreeParagraphs } from './HeaderThreeParagraphs';
import { ImageSummaryWithAlternatingText } from './ImageSummaryWithAlternatingText';

type SectionRendererProps = {
  section: SectionView;
  isLast: boolean;
  template?: "pressRelease" | "newsletter" | "training";
};

export function SectionRenderer({ section, isLast, template }: SectionRendererProps) {
  let sectionStyle = isLast ? styles.sectionLast : styles.section;
  
 if (template === "pressRelease") {
  sectionStyle = { ...sectionStyle, textAlign: 'left' };
}

  const renderSectionContent = () => {
    switch (section._type) {
      case 'articleWithImage':
        return <ArticleWithImage {...section} />;
      case 'listImageLeft':
        return <ListImageLeft {...section} />;
      case 'divider':
        return <Divider {...section} />;
      case 'headerFourParagraphs':
        return <HeaderFourParagraphs {...section} />;
      case 'headerThreeParagraphs':
          return <HeaderThreeParagraphs {...section} />;
      case 'summaryWithImage':
        return <SummaryWithImage {...section} />;
      case 'simpleList':
        return <SimpleList {...section} />;
      case 'imagesOnVerticalGrid':
        return <ImagesOnVerticalGrid {...section} />;
      case 'richText':
        return <RichText {...section} />;
      case 'simpleImage':
        return <SimpleImage {...section} />;
      case 'simpleCta':
        return <SimpleCta {...section} />;
      case 'imageSummaryTwoImages':
        return <ImageSummaryTwoImages {...section} />
      case 'imageSummaryAlternatingText':
        return <ImageSummaryWithAlternatingText {...section} />
      default: {
        const _exhaustive: never = section;
        console.warn(`Unknown section type: ${(_exhaustive as any)._type}`);
        return null;
      }
    }
  };

  // Divider doesn't need a Section wrapper
  if (section._type === 'divider') {
    return <Section><Row><Column>{renderSectionContent()} </Column></Row></Section>;
  }

  return (
    <Section >
      <Row><Column style={sectionStyle}>{renderSectionContent()} </Column></Row>
    </Section>
  );
}

