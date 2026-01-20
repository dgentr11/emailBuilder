import { Section, Heading, Img, Row, Column, Hr, Link } from '@react-email/components';
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
		<Section  style={{ marginTop: 20, verticalAlign: 'top' }} >
		  {listItems.map((item, index) => (
			
			<div key={index} >
				<Row>
					{item.itemImageUrl && (
						<Column width="25%" style={{ width: '25%', paddingRight: '12px', paddingBottom: '8px', paddingTop: '8px' }} valign="top">
						<Img
							src={item.itemImageUrl}
							alt={item.itemImageAlt || item.itemTitle || ''}
							width="100%"
							height="auto"
							style={styles.image}
						/>
						</Column>
					)}
					<Column width="75%" valign="top" style={{ width: '75%', paddingRight: '12px', verticalAlign: 'top', paddingBottom: '8px', paddingTop: '8px' }} >
						{item.itemTitle && (
						<Heading as="h3" style={{...styles.h3, marginTop: 0, marginBottom: 0}}>
							{item.itemTitle}
						</Heading>
						)}
						{item.itemSummaryHtml && (
							<div
								dangerouslySetInnerHTML={{ __html: item.itemSummaryHtml }}
								style={styles.richText}
							/>
						)}
						{item.itemLinkURL && (
							<Link 
								href={item.itemLinkURL}
								target='_blank'
								style={styles.listItemLink}
							>{item.itemLinkText}</Link>
						)}
					</Column>
				</Row>
				{item.itemDivider && (
					<Row>
						<Column>
							<Hr style={{...styles.itemDivider}} />
						</Column>
					</Row>
				)}
			</div>
		  ))}
		</Section>
	  )}
	</>
  );
}

