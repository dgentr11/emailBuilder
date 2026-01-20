import { Section, Heading, Img, Row, Column, Hr } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ListImageLeftView } from '@/lib/mapIssueToEmailProps';

type Props = ListImageLeftView;

export function ListImageLeft({
  title,
  summaryHtml,
  listItems,
}: Props) {
  return (
	<>
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

	  {listItems && listItems.length > 0 && (
		<Section style={{ marginTop: 20, verticalAlign: 'top' }} >
		  {listItems.map((item, index) => (
			
			<Row key={index} >
				<div>
					{item.itemImageUrl && (
						<Column width="30%" style={{ width: '30%', paddingRight: '12px', paddingBottom: '8px', paddingTop: '8px' }}>
						<Img
							src={item.itemImageUrl}
							alt={item.itemImageAlt || item.itemTitle || ''}
							width="100%"
							height="auto"
							style={styles.image}
						/>
						</Column>
					)}
					<Column width="70%" valign="top" style={{ width: '70%', paddingRight: '12px', verticalAlign: 'top', paddingBottom: '8px', paddingTop: '8px' }}>
						{item.itemTitle && (
						<Heading as="h3" style={{...styles.h3, marginTop: 0}}>
							{item.itemTitle}
						</Heading>
						)}
						{item.itemSummaryHtml && (
						<div
							dangerouslySetInnerHTML={{ __html: item.itemSummaryHtml }}
							style={styles.richText}
						/>
						)}
						
					</Column>
				</div>
				{item.itemDivider && (
					<Hr style={{...styles.itemDivider}} />
				)}
				
			</Row>
		  ))}
		</Section>
	  )}
	</>
  );
}

