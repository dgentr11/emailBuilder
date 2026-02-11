import { Section, Img, Text, Column, Row } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ArticleWithImageView } from '@/lib/mapIssueToEmailProps';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

type Props = ArticleWithImageView;

export function ArticleWithImage({
  imageUrl,
  imageAlt,
  imageLink,
  eyebrow,
  title,
  headingToggle,
  summaryHtml,
  url,
  urlText,
}: Props) {
  return (
	<>
		{imageUrl && (
			 <Row>
                <Column style={{paddingBottom: "10px"}}>
				   {imageLink && (
					<a href={imageLink} target="_blank" rel="noopener noreferrer">
					
						<Img
							src={imageUrl}
							alt={imageAlt || title}
							width="100%"
							height="auto"
							style={styles.image}
						/>
					</a>
					)}
					{!imageLink && (
						<Img
							src={imageUrl}
							alt={imageAlt || title}
							width="100%"
							height="auto"
							style={styles.image}
						/>
					)}
				</Column>
			</Row>
		)}
		<Section>
			{eyebrow && (
				<Row>
					<Column style={{paddingBottom: '10px'}}>
						<Text style={styles.eyebrowCentered}>
							{eyebrow}
						</Text>
					</Column>
			   </Row>
			)}

			{title && (
				<Row>
					<Column style={{paddingBottom: '16px'}}>
						<Text style={headingToggle ? styles.h1CenteredUpper : styles.h2CenteredUpper}>
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
			{url && (

				<table role="presentation" border={0} cellPadding={0} cellSpacing={0} align="center" style={{ margin: "auto" }}>
					<tbody>
						<tr>
						<td style={{ backgroundColor: "#ffffff", border: "3px solid #ff8200", borderRadius: '8px', padding: "12px 20px", textAlign: "center" }}>
							<a
							href={url}
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
							 <span style={{textDecoration: 'none', color: '#0078d4', fontWeight: 'bold'}}>{urlText}</span>
							</a>
						</td>
						</tr>
					</tbody>
				</table>
				
			)}
		</Section>
	
	</>
  );
}

