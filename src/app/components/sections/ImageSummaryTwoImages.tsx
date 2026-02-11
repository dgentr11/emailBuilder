import {  Text, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ImageSummaryTwoImagesView } from '@/lib/mapIssueToEmailProps';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

type Props = ImageSummaryTwoImagesView;

export function ImageSummaryTwoImages({
  imageUrl,
  imageAlt,
  imageLink,
  title,
  summary,
  imageItems,
  postSummaryHtml,
}: Props) {
  // Calculate column width and padding based on number of items
  const itemCount = imageItems?.length || 0;

  const getColumnStyle = (index: number, total: number) => {
    const isLast = index === total - 1;
    const isFirst = index === 0;
    
    if (total === 1) {
      return {
        width: 'auto',
        paddingRight: 0,
        paddingLeft: 0,
      };
    }
    
    if (total === 2) {
      return {
        width: '50%',
        paddingRight: isFirst ? 8 : 0,
        paddingLeft: isLast ? 8 : 0,
      };
    }
    
    if (total >= 3) {
      return {
        width: '33.33%',
        paddingRight: isLast ? 0 : 8,
        paddingLeft: isFirst ? 0 : 8,
      };
    }
    
    return {
      width: '33.33%',
      paddingRight: isLast ? 0 : 8,
      paddingLeft: isFirst ? 0 : 8,
    };
  };
  
 
  return (
    <>
      {imageUrl && !imageLink && (
        <Row>
        <Column
        align="center"
        style={{paddingBottom: '10px'}}
        >
          <Img
            src={imageUrl}
            alt={imageAlt || ''}
            width="100%"
            height="auto"
            style={styles.image}
          />
          </Column></Row>
      )}

      {imageUrl && imageLink && (
        <Row>
        <Column
        align="center"
        style={{paddingBottom: '10px'}}
        >
          <a href={imageLink} target="_blank" rel="noopener noreferrer">
            <Img
              src={imageUrl}
              alt={imageAlt || ''}
              width="100%"
              height="auto"
              style={styles.image}
            />
          </a>
        </Column>
        </Row>
      )}

      {title && (
        <Row>
          <Column style={{paddingBottom: '16px'}}>
            <Text style={styles.h2Centered}>
              {title}
            </Text>
          </Column>
        </Row>
      )}

      {summary && (
        <Row>
          <Column style={{paddingBottom: '16px'}}>
            <Text style={styles.richTextCentered}>
              {summary}
            </Text>
          </Column>
        </Row>
      )}

      {imageItems && imageItems.length > 0 && (
        <Row style={{ marginTop: 20 }}>
          {imageItems.map((item, index) => (
              <Column
                align="center"
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
                    alt={item.imageAlt || ''}
                    width="100%"
                    height="auto"
                    style={styles.image}
                  />
                )}
                {item.imageUrl && item.imageLink && (
                  <a href={item.imageLink} target="_blank" rel="noopener noreferrer">
                    <Img
                      src={item.imageUrl}
                      alt={item.imageAlt || ''}
                      width="100%"
                      height="auto"
                      style={styles.image}
                    />
                  </a>
                )}
              </Column>
          ))}
        </Row>
      )}
      {postSummaryHtml && (
        <Row>
          <Column style={{paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
            <div
              dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(postSummaryHtml) }}
              style={styles.richText}
            />
          </Column>
        </Row>
      )}
    </>
  );
}

