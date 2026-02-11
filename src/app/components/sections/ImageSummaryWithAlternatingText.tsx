import { Text, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ImageSummaryAlternatingTextView } from '@/lib/mapIssueToEmailProps';
import { tokens } from '@/emails/styles';
import { stripParagraphsToBr } from '@/lib/stripParagraphsToBr';

type Props = ImageSummaryAlternatingTextView;

export function ImageSummaryWithAlternatingText({
  imageUrl,
  imageAlt,
  imageLink,
  title,
  summary,
  alternatingTextItems,
  postSummaryHtml,
}: Props) {
  // Calculate column width and padding based on number of items

  return (
	<>
	  {imageUrl && !imageLink && (
		<Row>
		  <Column
			align="center"
			style={{ paddingBottom: '10px' }}
		  >
			<Img
			  src={imageUrl}
			  alt={imageAlt || ''}
			  width="100%"
			  height="auto"
			  style={styles.image}
			/>
		  </Column></Row>
	  )}

	  {imageUrl && imageLink && (
		<Row>
		  <Column
			align="center"
			style={{ paddingBottom: '10px' }}
		  >
			<a href={imageLink} target="_blank" rel="noopener noreferrer">
			  <Img
				src={imageUrl}
				alt={imageAlt || ''}
				width="100%"
				height="auto"
				style={styles.image}
			  />
			</a>
		  </Column>
		</Row>
	  )}

	  {title && (
		<Row>
		  <Column style={{paddingBottom: '16px'}}>
			<Text style={{...styles.h2Centered, marginTop: 0}}>
			  {title}
			</Text>
		  </Column>
		</Row>
	  )}

	  {summary && (
		<Row>
		  <Column style={{paddingBottom: '16px'}}>
			<Text style={styles.richTextCentered}>
			  {summary}
			</Text>
		  </Column>
		</Row>
	  )}

	  {alternatingTextItems && alternatingTextItems.length > 0 && (
		<>
		  {alternatingTextItems.map((item, index) => (
			<Row key={index} style={{ marginTop: index === 0 ? 20 : 16 }}>
			  {!item.imageOnRight ? (
				<>
				  <Column
					align="center"
					style={{ width: '50%', verticalAlign: 'middle', padding: '8px 8px', fontFamily: tokens.fonts.base }}
				  >
					{item.imageItemUrl && !item.imageItemLink && (
					  <Img
						src={item.imageItemUrl}
						alt={item.imageItemAlt || ''}
						width="100%"
						height="auto"
						style={styles.image}
					  />
					)}
					{item.imageItemUrl && item.imageItemLink && (
					  <a href={item.imageItemLink} target="_blank" rel="noopener noreferrer">
						<Img
						  src={item.imageItemUrl}
						  alt={item.imageItemAlt || ''}
						  width="100%"
						  height="auto"
						  style={styles.image}
						/>
					  </a>
					)}
				  </Column>
				  <Column
					style={{ width: '50%', verticalAlign: 'middle', padding: '8px 8px', fontFamily: tokens.fonts.base }}
				  >
					{item.textItem && (
					  <div
						dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(item.textItem) }}
						style={styles.richText}
					  />
					)}
				  </Column>
				</>
			  ) : (
				<>
				  <Column
					style={{ width: '50%', verticalAlign: 'middle', padding: '8px 8px', fontFamily: tokens.fonts.base }}
				  >
					{item.textItem && (
					  <div
						dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(item.textItem) }}
						style={styles.richText}
					  />
					)}
				  </Column>
				  <Column
					align="center"
					style={{ width: '50%', verticalAlign: 'middle', padding: '8px 8px', fontFamily: tokens.fonts.base }}
				  >
					{item.imageItemUrl && !item.imageItemLink && (
					  <Img
						src={item.imageItemUrl}
						alt={item.imageItemAlt || ''}
						width="100%"
						height="auto"
						style={styles.image}
					  />
					)}
					{item.imageItemUrl && item.imageItemLink && (
					  <a href={item.imageItemLink} target="_blank" rel="noopener noreferrer">
						<Img
						  src={item.imageItemUrl}
						  alt={item.imageItemAlt || ''}
						  width="100%"
						  height="auto"
						  style={styles.image}
						/>
					  </a>
					)}
				  </Column>
				</>
			  )}
			</Row>
		  ))}
		</>
	  )}
	  {postSummaryHtml && (
		<Row>
		  <Column style={{ paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
			<div
			  dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(postSummaryHtml) }}
			  style={styles.richText}
			/>
		  </Column>
		</Row>
	  )}
	</>
  );
}

