import { Section } from '@react-email/components';
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

type SectionRendererProps = {
  section: SectionView;
  isLast: boolean;
};

export function SectionRenderer({ section, isLast }: SectionRendererProps) {
  const sectionStyle = isLast ? styles.sectionLast : styles.section;

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
      default: {
        const _exhaustive: never = section;
        console.warn(`Unknown section type: ${(_exhaustive as any)._type}`);
        return null;
      }
    }
  };

  // Divider doesn't need a Section wrapper
  if (section._type === 'divider') {
    return <Section style={sectionStyle}>{renderSectionContent()}</Section>;
  }

  return (
    <Section style={sectionStyle}>
      {renderSectionContent()}
    </Section>
  );
}

