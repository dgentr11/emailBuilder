import { Section, Heading, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ImagesOnVerticalGridView } from '@/lib/mapIssueToEmailProps';

type Props = ImagesOnVerticalGridView;

export function ImagesOnVerticalGrid({
  eyebrow,
  title,
  summaryHtml,
  imageItems,
}: Props) {
  // Calculate column width and padding based on number of items
  const itemCount = imageItems?.length || 0;
  
  const getColumnStyle = (index: number, total: number) => {
    const isLast = index === total - 1;
    const isFirst = index === 0;
    
    if (total === 1) {
      return {
        width: '100%',
        paddingRight: 0,
        paddingLeft: 0,
      };
    }
    
    if (total === 2) {
      return {
        width: '50%',
        paddingRight:  12,
        paddingLeft:  12,
      };
    }
    
    if (total === 3) {
      return {
        width: '33.33%',
        paddingRight:  8,
        paddingLeft:  8,
      };
    }
    
    // Fallback
    return {
      width: '33.33%',
      paddingRight:  8,
      paddingLeft:  8,
    };
  };

  return (
    <>
      {eyebrow && (
        <div style={{ ...styles.richTextCentered, fontSize: 12, textTransform: 'uppercase', letterSpacing: '1px', paddingBottom: 8, paddingTop: 0 }}>
          {eyebrow}
        </div>
      )}

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

      {imageItems && imageItems.length > 0 && (
        <Row style={{ marginTop: 20 }}>
          {imageItems.map((item, index) => (
              <Column
                key={index}
                colSpan={1}
                style={{
                  ...getColumnStyle(index, itemCount),
                  verticalAlign: 'top',
                }}
              >
                {item.imageUrl && (
                  <Img
                    src={item.imageUrl}
                    alt={item.imageAlt || item.caption || ''}
                    width="100%"
                    height="auto"
                    style={styles.image}
                  />
                )}
                {item.caption && (
                  <p style={styles.imageCaption}>
                    {item.caption}
                  </p>
                )}
                {item.attribution && (
                  <p style={styles.imageAttribution}>
                    {item.attribution}
                  </p>
                )}
              </Column>
          ))}
        </Row>
      )}
    </>
  );
}

