import { Section, Heading, Img } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ImagesOnVerticalGridView } from '@/lib/mapIssueToEmailProps';

type Props = ImagesOnVerticalGridView;

export function ImagesOnVerticalGrid({
  eyebrow,
  title,
  summaryHtml,
  imageItems,
}: Props) {
  return (
    <>
      {eyebrow && (
        <p style={{ ...styles.richTextCentered, fontSize: 12, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>
          {eyebrow}
        </p>
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
        <div style={{ marginTop: 20 }}>
          {imageItems.map((item, index) => (
            <div key={index} style={{ marginBottom: 20 }}>
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
                <p style={{ ...styles.richText, fontStyle: 'italic', marginTop: 8, textAlign: 'center' }}>
                  {item.caption}
                </p>
              )}
              {item.attribution && (
                <p style={{ ...styles.richText, fontSize: 12, marginTop: 4, textAlign: 'center', color: '#666' }}>
                  {item.attribution}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

