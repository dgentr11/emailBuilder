import { Text, Img, Row, Column } from '@react-email/components';
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
        <Row>
          <Column style={{paddingBottom: '16px'}}>
            <Text style={styles.eyebrowCentered}>
              {eyebrow}
            </Text>
          </Column>
        </Row>
      )}

      {title && (
        <Text style={styles.h2Centered}>
          {title}
        </Text>
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
                {item.imageUrl && !item.imageLink && (
                  <Img
                    src={item.imageUrl}
                    alt={item.imageAlt || item.caption || ''}
                    width="100%"
                    height="auto"
                    style={styles.image}
                  />
                )}
                {item.imageUrl && item.imageLink && (
                  <a href={item.imageLink} target="_blank" rel="noopener noreferrer">
                    <Img
                      src={item.imageUrl}
                      alt={item.imageAlt || item.caption || ''}
                      width="100%"
                      height="auto"
                      style={styles.image}
                    />
                  </a>
                )}
                {item.caption && (
                  <Text style={{...styles.imageCaption, marginBottom: '0px', lineHeight: '12px'}}>
                    {item.caption}
                  </Text>
                )}
                {item.attribution && (
                  <Text style={{...styles.imageAttribution, marginTop: '0px'}}>
                    <em>{item.attribution}</em>
                  </Text>
                )}
              </Column>
          ))}
        </Row>
      )}
    </>
  );
}

