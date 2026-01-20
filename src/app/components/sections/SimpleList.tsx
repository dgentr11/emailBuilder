import { Section, Heading, Row, Hr, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { SimpleListView } from '@/lib/mapIssueToEmailProps';

type Props = SimpleListView;

export function SimpleList({
	listItems,
	simpleListURL,
	simpleListURLText,
}: Props) {
	return (
		<>
			{listItems && listItems.length > 0 && (
				<Section>
					{listItems.map((item, index) => (
						<div key={index}>
							<Row>
								<Column key={index} style={{ marginBottom: 16 }}>
									{item.itemTitle && (
										<Heading as="h3" style={styles.h3}>
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

			{simpleListURL && (
				<table role="presentation" border={0} cellPadding={0} cellSpacing={0} align="center" style={{ margin: "auto" }}>
					<tbody>
						<tr>
							<td style={{ backgroundColor: "#ffffff", border: "3px solid #ff8200", borderRadius: '8px', padding: "12px 20px", textAlign: "center" }}>
								<a
									href={simpleListURL}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										fontFamily: "Arial, Helvetica, sans-serif",
										fontSize: "16px",
										fontWeight: "bold",
										color: "#0078d4",
										textDecoration: "none",
										display: "inline-block",
									}}
								>
									{simpleListURLText}
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</>
	);
}

