import { Section, Text, Img, Row, Column, Hr, Link } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ListImageLeftView } from '@/lib/mapIssueToEmailProps';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

type Props = ListImageLeftView;

export function ListImageLeft({
  title,
  summaryHtml,
  listItems,
}: Props) {
  return (
	<>
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

	  {listItems && listItems.length > 0 && (
		<Section  style={{ marginTop: 20, verticalAlign: 'top' }} >
		  {listItems.map((item, index) => (
			
			<div key={index} >
				<Row>
					{item.itemImageUrl && !item.itemImageLink && (
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
					{item.itemImageUrl && item.itemImageLink && (
						<Column width="25%" style={{ width: '25%', paddingRight: '12px', paddingBottom: '8px', paddingTop: '8px' }} valign="top">
							<a href={item.itemImageLink} target="_blank" rel="noopener noreferrer">
								<Img
									src={item.itemImageUrl}
									alt={item.itemImageAlt || item.itemTitle || ''}
									width="100%"
									height="auto"
									style={styles.image}
								/>
							</a>
						</Column>
					)}
					<Column width="75%" valign="top" style={{ width: '75%', paddingRight: '0', verticalAlign: 'top', paddingBottom: '20px', paddingTop: '8px' }} >
						{item.itemTitle && (
						<Text style={{...styles.h3, marginTop: 0, marginBottom: '8px'}}>
							{item.itemTitle}
						</Text>
						)}
						{item.itemSummaryHtml && (
							<div
								dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(item.itemSummaryHtml) }}
								style={styles.richText}
							/>
						)}
						{item.itemLinkURL && (
							<Row>
								<Column 
									align="left"
									valign="middle"
									style={{ verticalAlign: 'middle', paddingTop: '8px'}}
								>
									<Link 
										href={item.itemLinkURL}
										target='_blank'
										style={styles.listItemLink}
									>{item.itemLinkText}
										&nbsp;&nbsp;<Img
											src={"https://facilities.utk.edu/wp-content/uploads/2026/01/Email-Arrow-Link.png"}
											alt={'arrow'}
											width="16px"
											height="10px"
											style={{display: 'inline', paddingLeft: '2px', paddingTop: '2px'}}
										/>
									</Link>
								</Column>
							</Row>
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

