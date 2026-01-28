import {Text, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { SummaryWithImageView } from '@/lib/mapIssueToEmailProps';

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
      {imageUrl && !imageLink && (
          <Img
            src={imageUrl}
            alt={imageAlt || title || ''}
            width="100%"
            height="auto"
            style={styles.image}
          />
      )}
      
      {imageUrl && imageLink && (
        <a href={imageLink} target="_blank" rel="noopener noreferrer">
          <Img
            src={imageUrl}
            alt={imageAlt || title || ''}
            width="100%"
            height="auto"
            style={styles.image}
          />
        </a>
      )}


        {eyebrow && (
          <Row>
            <Column style={{paddingBottom: '10px', paddingTop: '32px'}}>
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
    </>
  );
}

