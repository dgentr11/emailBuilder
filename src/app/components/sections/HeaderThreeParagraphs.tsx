import { Text, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { HeaderThreeParagraphsView } from '@/lib/mapIssueToEmailProps';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

type Props = HeaderThreeParagraphsView;

export function HeaderThreeParagraphs({
   header,
   summaryHtml,
   paragraphItems
}: Props) {
  // Calculate column width and padding based on number of items
  const itemCount = paragraphItems?.length || 0;
  
  const getColumnStyle = (index: number, total: number) => {
    const isLast = index === total - 1;
    const isFirst = index === 0;
    
    if (total >= 3) {
      return {
        width: '33.33%',
        paddingRight:  8,
        paddingLeft:  8,
      };
    }
    
    // Fallback
    return {
      width: '50%',
      paddingRight:  8,
      paddingLeft:  8,
    };
  };

  return (
    <>

      {header && (
        <Text style={styles.h2Centered}>
          {header}
        </Text>
      )}

      {summaryHtml && (
        <div
          dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(summaryHtml) }}
          style={styles.richTextCentered}
        />
      )}

      {paragraphItems && paragraphItems.length > 0 && (
        <Row style={{ marginTop: 20 }}>
          {paragraphItems.map((item, index) => (
              <Column
                key={index}
                colSpan={1}
                style={{
                  ...getColumnStyle(index, itemCount),
                  verticalAlign: 'top',
                }}
              >
                {item.itemImageUrl && (
                  <Row>
                    <Column align="center">
                      {item.itemImageLink && (
                        <a href={item.itemImageLink} target="_blank" rel="noopener noreferrer">
                          <Img
                            src={item.itemImageUrl}
                            alt={item.itemImageAlt || ''}
                            width="100%"
                            style={styles.image}
                          />
                        </a>
                      )}
                      {!item.itemImageLink && (
                        <Img
                            src={item.itemImageUrl}
                            alt={item.itemImageAlt || ''}
                            width="100%"
                            style={styles.image}
                          />
                      )}
                    </Column>
                  </Row>
                  
                )}
                {item.paragraphItemTitle && (
                  <Text style={{...styles.h4, marginBottom: '0px'}}>
                    {item.paragraphItemTitle}
                  </Text>
                )}
                {item.paragraphItemSummaryHtml && (
                  <div style={{...styles.richTextCentered, marginTop: '0px'}}
                  />
                )}
              </Column>
          ))}
        </Row>
      )}
    </>
  );
}

