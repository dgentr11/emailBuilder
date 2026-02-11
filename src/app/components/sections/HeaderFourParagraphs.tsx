import { Img, Row, Column, Text } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { HeaderFourParagraphsView } from '@/lib/mapIssueToEmailProps';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

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
      <Row>
        <Column style={{paddingBottom: '16px'}}>
          
            <Text style={{...styles.h2Centered, marginTop: 0}}>
              {header}
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
                    verticalAlign: 'top',
                    paddingRight: itemIndex === 0 ? 12 : 0,
                    paddingLeft: itemIndex === 1 ? 12 : 0,
                    paddingTop: '8px',
                    paddingBottom: '8px',
                  }}
                >
                    {item.itemImageUrl && !item.itemImageLink && (
                      <Img
                        alt={item.itemImageAlt || item.paragraphItemTitle || ''}
                        height="48"
                        src={item.itemImageUrl}
                        width="48"
                      />
                    )}
                    {item.itemImageUrl && item.itemImageLink && (
                      <a href={item.itemImageLink} target="_blank" rel="noopener noreferrer">
                        <Img
                          alt={item.itemImageAlt || item.paragraphItemTitle || ''}
                          height="48"
                          src={item.itemImageUrl}
                          width="48"
                        />
                      </a>
                    )}
                    {item.paragraphItemTitle && (
                      <Text
                        style={{
                          margin: '0px',
                          marginTop: 4,
                          marginBottom: 4,
                          fontSize: 16,
                          lineHeight: '20px',
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
                        dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(item.paragraphItemSummaryHtml) }}
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
                    verticalAlign: 'top',
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

