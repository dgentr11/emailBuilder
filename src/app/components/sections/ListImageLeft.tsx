import { Section, Text, Img, Row, Column, Hr, Link } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ListImageLeftView } from '@/lib/mapIssueToEmailProps';
import { tokens } from '@/emails/styles';
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
		  dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(summaryHtml) }}
		  style={styles.richTextCentered}
		/>
	  )}

	  {listItems && listItems.length > 0 && (
		<Section  style={{ marginTop: 20, verticalAlign: 'top' }} >
		  {listItems.map((item, index) => (
			
			<div key={index} >
				<Row>
					{item.itemImageUrl && !item.itemImageLink && (
						<Column width="25%" style={{ width: '25%', verticalAlign: 'top', paddingRight: '12px', paddingBottom: '12px', paddingTop: '12px' }} valign="top">
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
						<Column width="25%" style={{ width: '25%', verticalAlign: 'top', paddingRight: '12px', paddingBottom: '12px', paddingTop: '12px' }} valign="top">
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
					<Column width="75%" valign="top" style={{ width: '75%', verticalAlign: 'top', fontFamily: tokens.fonts.base, paddingRight: '12px', paddingBottom: '12px', paddingTop: '8px' }} >
							{item.itemTitle && (
								<Text style={{...styles.h3NoMargin}}>
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
										style={{ verticalAlign: 'middle', paddingTop: '4px'}}
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

