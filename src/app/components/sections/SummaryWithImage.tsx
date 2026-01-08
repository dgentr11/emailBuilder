import { Section, Heading, Img } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { SummaryWithImageView } from '@/lib/mapIssueToEmailProps';

type Props = SummaryWithImageView;

export function SummaryWithImage({
  eyebrow,
  title,
  summaryHtml,
  imageUrl,
  imageAlt,
}: Props) {
  return (
    <>
      {imageUrl && (
        <Img
          src={imageUrl}
          alt={imageAlt || title || ''}
          width="100%"
          height="auto"
          style={styles.image}
        />
      )}

      {eyebrow && (
        <div style={{ ...styles.richTextCentered, fontSize: 12, textTransform: 'uppercase', letterSpacing: '1px', paddingBottom: 8, paddingTop: 16 }}>
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
    </>
  );
}

