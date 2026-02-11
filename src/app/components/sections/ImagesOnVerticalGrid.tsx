import { Text, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ImagesOnVerticalGridView } from '@/lib/mapIssueToEmailProps';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

type Props = ImagesOnVerticalGridView;

const columnStyle = {
  width: '33.33%',
  paddingRight: 8,
  paddingLeft: 8,
  verticalAlign: 'top' as const,
};

export function ImagesOnVerticalGrid({
  eyebrow,
  title,
  summaryHtml,
  postSummaryHtml,
  imageItems,
}: Props) {
  const items = imageItems ?? [];

  return (
    <>
      {eyebrow && (
        <Row>
          <Column style={{paddingBottom: '10px'}}>
            <Text style={styles.eyebrowCentered}>
              {eyebrow}
            </Text>
          </Column>
        </Row>
      )}

      {title && (
        <Row>
          <Column style={{paddingBottom: '10px'}}>
            <Text style={styles.h2Centered}>
              {title}
            </Text>
          </Column>
        </Row>
      )}

      {summaryHtml && (
        <Row>
          <Column style={{paddingBottom: '10px'}}>
            <div
              dangerouslySetInnerHTML={{ __html: summaryHtml }}
              style={styles.richTextCentered}
            />
        </Column>
        </Row>
      )}

      {(imageItems?.length ?? 0) > 0 && (
        <Row >
          {[0, 1, 2].map((index) => {
            const item = items[index];
            return (
              <Column
                key={index}
                colSpan={1}
                style={columnStyle}
              >
                {item?.imageUrl && !item.imageLink && (
                  <Img
                    src={item.imageUrl}
                    alt={item.imageAlt || item.caption || ''}
                    width="100%"
                    height="auto"
                    style={styles.image}
                  />
                )}
                {item?.imageUrl && item.imageLink && (
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
                {item?.caption && (
                <Row>
                  <Column style={{...styles.imageCaption}}>
                    {item.caption}
                  </Column>
                </Row>
                )}
                {item?.attribution && (
                  <Row>
                    <Column style={{...styles.imageAttribution}}>
                      {item.attribution}
                    </Column>
                  </Row>
                )}
                {item?.attribution2 && (
                  <Row> 
                    <Column style={{...styles.imageAttribution}}>
                      {item.attribution2}
                    </Column>
                  </Row>
                  
                )}
              </Column>
            );
          })}
        </Row>
      )}
      {postSummaryHtml && (
        <Row>
          <Column style={{paddingTop: '10px', paddingBottom: '0px', textAlign: 'center'}}>
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

