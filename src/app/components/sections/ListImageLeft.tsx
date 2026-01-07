import { Section, Heading, Img } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ListImageLeftView } from '@/lib/mapIssueToEmailProps';

type Props = ListImageLeftView;

export function ListImageLeft({
  title,
  summaryHtml,
  listItems,
}: Props) {
  return (
    <>
      {title && (
        <Heading as="h2" style={styles.h2Centered}>
          {title}
        </Heading>
      )}

      {summaryHtml && (
        <div
          dangerouslySetInnerHTML={{ __html: summaryHtml }}
          style={styles.richTextCentered}
        />
      )}

      {listItems && listItems.length > 0 && (
        <div style={{ marginTop: 20 }}>
          {listItems.map((item, index) => (
            <div key={index} style={{ marginBottom: 20, display: 'flex', gap: 16 }}>
              {item.itemImageUrl && (
                <div style={{ flexShrink: 0, width: 120 }}>
                  <Img
                    src={item.itemImageUrl}
                    alt={item.itemImageAlt || item.itemTitle || ''}
                    width="120"
                    height="auto"
                    style={styles.image}
                  />
                </div>
              )}
              <div style={{ flex: 1 }}>
                {item.itemTitle && (
                  <Heading as="h3" style={styles.h3}>
                    {item.itemTitle}
                  </Heading>
                )}
                {item.itemSummaryHtml && (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.itemSummaryHtml }}
                    style={styles.richText}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

