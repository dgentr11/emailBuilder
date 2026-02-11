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
		<Row>
			<Column style={{paddingBottom: '16px'}}>
				<Text style={{...styles.h2Centered, marginTop: 0}}>
					{title}
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

	  {listItems && listItems.length > 0 && (
		<Section  style={{ marginTop: 20, verticalAlign: 'top' }} >
		  {listItems.map((item, index) => (
			
			<div key={index} >
				<Row>
					{item.itemImageUrl && !item.itemImageLink && (
						<Column width="25%" style={{ width: '25%', verticalAlign: 'top' }} valign="top">
							<div style={{ paddingRight: '12px', paddingBottom: '12px', paddingTop: '12px' }}>
							<Img
								src={item.itemImageUrl}
								alt={item.itemImageAlt || item.itemTitle || ''}
								width="100%"
								height="auto"
								style={styles.image}
							/>
						</div>
						</Column>
						
					)}
					{item.itemImageUrl && item.itemImageLink && (
						<Column width="25%" style={{ width: '25%', verticalAlign: 'top' }} valign="top">
							<div style={{ paddingRight: '12px', paddingBottom: '12px', paddingTop: '12px' }}>
								<a href={item.itemImageLink} target="_blank" rel="noopener noreferrer">
									<Img
										src={item.itemImageUrl}
										alt={item.itemImageAlt || item.itemTitle || ''}
										width="100%"
										height="auto"
										style={styles.image}
									/>
								</a>
							</div>
						</Column>
					)}
					<Column width="75%" valign="top" style={{ width: '75%', verticalAlign: 'top', fontFamily: tokens.fonts.base }} >
						<div style={{ paddingRight: '12px', paddingBottom: '12px', paddingTop: '8px' }}>
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
												src={"https://cdn.sanity.io/images/qzfk7kdf/production/f5445009c8fb653a2a3415e62f424f99782431da-20x14.png"}
												alt={'arrow'}
												width="16px"
												height="10px"
												style={{display: 'inline', paddingLeft: '2px', paddingTop: '2px'}}
											/>
										</Link>
									</Column>
								</Row>
							)}
						</div>
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

