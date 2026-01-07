import { Section, Heading, Img } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { HeaderFourParagraphsView } from '@/lib/mapIssueToEmailProps';

type Props = HeaderFourParagraphsView;

export function HeaderFourParagraphs({
  header,
  summaryHtml,
  paragraphItems,
}: Props) {
  return (
    <>
      {header && (
        <Heading as="h2" style={styles.h2Centered}>
          {header}
        </Heading>
      )}

      {summaryHtml && (
        <div
          dangerouslySetInnerHTML={{ __html: summaryHtml }}
          style={styles.richTextCentered}
        />
      )}

      {paragraphItems && paragraphItems.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {paragraphItems.map((item, index) => (
            <div key={index} style={{ marginBottom: 24 }}>
              {item.itemImageUrl && (
                <Img
                  src={item.itemImageUrl}
                  alt={item.itemImageAlt || item.paragraphItemTitle || ''}
                  width="100%"
                  height="auto"
                  style={styles.image}
                />
              )}
              {item.paragraphItemTitle && (
                <Heading as="h3" style={styles.h3}>
                  {item.paragraphItemTitle}
                </Heading>
              )}
              {item.paragraphItemSummaryHtml && (
                <div
                  dangerouslySetInnerHTML={{ __html: item.paragraphItemSummaryHtml }}
                  style={styles.richText}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

