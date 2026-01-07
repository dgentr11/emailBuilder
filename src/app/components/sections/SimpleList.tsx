import { Section, Heading, Button } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { SimpleListView } from '@/lib/mapIssueToEmailProps';

type Props = SimpleListView;

export function SimpleList({
  listItems,
  simpleListURL,
  simpleListURLText,
}: Props) {
  return (
    <>
      {listItems && listItems.length > 0 && (
        <div>
          {listItems.map((item, index) => (
            <div key={index} style={{ marginBottom: 16 }}>
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
          ))}
        </div>
      )}

      {simpleListURL && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button href={simpleListURL} style={styles.primaryButton}>
            {simpleListURLText || 'Learn more'}
          </Button>
        </div>
      )}
    </>
  );
}

