import {Text, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { SummaryWithImageView } from '@/lib/mapIssueToEmailProps';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

type Props = SummaryWithImageView;

export function SummaryWithImage({
  eyebrow,
  title,
  summaryHtml,
  imageUrl,
  imageAlt,
  imageLink,
}: Props) {
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
          <Column style={{paddingBottom: '16px'}}>
            <Text style={{...styles.h2Centered, marginTop: 0}}>
              {title}
            </Text>
          </Column>
        </Row>
      )}

      {summaryHtml && (
        <Row>
          <Column style={{paddingBottom: '16px'}}>
            <div
              dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(summaryHtml) }}
              style={styles.richTextCentered}
            />
          </Column>
        </Row>
      )}
       {imageUrl && !imageLink && (
        <Row>
          <Column style={{paddingBottom: '10px'}}>
          <Img
            src={imageUrl}
            alt={imageAlt || title || ''}
            width="100%"
            height="auto"
            style={styles.image}
          />
          </Column>
        </Row>
      )}
      
      {imageUrl && imageLink && (
        <Row>
          <Column style={{paddingBottom: '10px'}}>      
        <a href={imageLink} target="_blank" rel="noopener noreferrer">
          <Img
            src={imageUrl}
            alt={imageAlt || title || ''}
            width="100%"
            height="auto"
            style={styles.image}
          />
        </a>
        </Column>
        </Row>
        )}
    </>
  );
}

