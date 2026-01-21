import { Img, Row, Column, Text } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { HeaderFourParagraphsView } from '@/lib/mapIssueToEmailProps';

type Props = HeaderFourParagraphsView;

// Helper function to chunk array into groups of 2
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export function HeaderFourParagraphs({
  header,
  summaryHtml,
  paragraphItems,
}: Props) {
  // Chunk paragraph items into groups of 2
  const itemPairs = paragraphItems ? chunkArray(paragraphItems, 2) : [];

  return (
    <>
      {header && (
        <Text style={{...styles.h2Centered, marginTop: 0}}>
          {header}
        </Text>
      )}

      {summaryHtml && (
        <div
          dangerouslySetInnerHTML={{ __html: summaryHtml }}
          style={styles.richTextCentered}
        />
      )}

      {itemPairs.length > 0 && (
        <>
          {itemPairs.map((pair, pairIndex) => (
            <Row key={pairIndex} style={{ marginTop: pairIndex === 0 ? 16 : 16 }}>
              {pair.map((item, itemIndex) => (
                <Column
                  key={itemIndex}
                  colSpan={1}
                  style={{
                    width: '50%',
                    paddingRight: itemIndex === 0 ? 12 : 0,
                    paddingLeft: itemIndex === 1 ? 12 : 0,
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    verticalAlign: 'baseline',
                  }}
                >
                  {item.itemImageUrl && (
                    <Img
                      alt={item.itemImageAlt || item.paragraphItemTitle || ''}
                      height="48"
                      src={item.itemImageUrl}
                      width="48"
                    />
                  )}
                  {item.paragraphItemTitle && (
                    <Text
                      style={{
                        margin: '0px',
                        marginTop: 0,
                        marginBottom: 8,
                        fontSize: 18,
                        lineHeight: '26px',
                        fontWeight: 600,
                        color: 'rgb(17,24,39)',
                      }}
                    >
                      {item.paragraphItemTitle}
                    </Text>
                  )}
                  {item.paragraphItemSummaryHtml && (
                    <div
                      style={{
                        marginBottom: '0px',
                        marginTop: '8px',
                        fontSize: 14,
                        lineHeight: '1.5',
                        color: '#000000',
                      }}
                      dangerouslySetInnerHTML={{ __html: item.paragraphItemSummaryHtml }}
                    />
                  )}
                </Column>
              ))}
              {/* If odd number of items, add empty column to maintain layout */}
              {pair.length === 1 && (
                <Column
                  colSpan={1}
                  style={{
                    width: '50%',
                    paddingLeft: 12,
                    verticalAlign: 'baseline',
                  }}
                />
              )}
            </Row>
          ))}
        </>
      )}
    </>
  );
}

