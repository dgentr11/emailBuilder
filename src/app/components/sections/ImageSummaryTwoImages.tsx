import {  Text, Heading, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ImageSummaryTwoImagesView } from '@/lib/mapIssueToEmailProps';

type Props = ImageSummaryTwoImagesView;

export function ImageSummaryTwoImages({
  imageUrl,
  imageAlt,
  title,
  summary,
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
      {imageUrl && (
          <Img
            src={imageUrl}
            alt={imageAlt || ''}
            width="100%"
            height="auto"
            style={styles.image}
          />
      )}

      {title && (
        <Heading as="h2" style={styles.h2Centered}>
          {title}
        </Heading>
      )}

      {summary && (
        <Text >
          {summary}
        </Text>
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
                    alt={item.imageAlt || ''}
                    width="100%"
                    height="auto"
                    style={styles.image}
                  />
                )}
    
              </Column>
          ))}
        </Row>
      )}
    </>
  );
}

