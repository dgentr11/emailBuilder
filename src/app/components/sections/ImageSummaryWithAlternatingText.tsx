import React from 'react';
import { Text, Img, Row, Column } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ImageSummaryAlternatingTextView } from '@/lib/mapIssueToEmailProps';
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
			  width="auto"
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
				width="auto"
				height="auto"
				style={styles.image}
			  />
			</a>
		  </Column>
		</Row>
	  )}

	  {title && (
		<Text style={styles.h2Centered}>
		  {title}
		</Text>
	  )}

	  {summary && (
		<Text style={styles.richTextCentered}>
		  {summary}
		</Text>
	  )}

	  {alternatingTextItems && alternatingTextItems.length > 0 && (
		<Row style={{ marginTop: 20 }}>
		  {alternatingTextItems.map((item, index) => (
			<React.Fragment key={index}>
			  {!item.imageOnRight && (
				<>
				  <Column
					align="center"
					key={index}
					colSpan={1}
					style={{
					  width: '50%',
					  verticalAlign: 'middle',
					}}
				  >
					{item.imageItemUrl && !item.imageItemLink && (
					  <Img
						src={item.imageItemUrl}
						alt={item.imageItemAlt || ''}
						width="auto"
						height="auto"
						style={styles.image}
					  />
					)}
					{item.imageItemUrl && item.imageItemLink && (
					  <a href={item.imageItemLink} target="_blank" rel="noopener noreferrer">
						<Img
						  src={item.imageItemUrl}
						  alt={item.imageItemAlt || ''}
						  width="auto"
						  height="auto"
						  style={styles.image}
						/>
					  </a>
					)}
				  </Column>
				  <Column
					style={{
					  width: '50%',
					  verticalAlign: 'middle',
					}}
				  >
					{item.textItem && (
					  <div
					  dangerouslySetInnerHTML={{ __html: stripParagraphsToBr(item.textItem) }}
					  style={styles.richText}
					/>
					)}
				  </Column>
				</>
			  )}
			  {item.imageOnRight && (
				<>

				  <Column
					style={{
					  width: '50%',
					  verticalAlign: 'middle',
					}}
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
					key={index}
					colSpan={1}
					style={{
					  width: '50%',
					  verticalAlign: 'middle',
					}}
				  >
					{item.imageItemUrl && !item.imageItemLink && (
					  <Img
						src={item.imageItemUrl}
						alt={item.imageItemAlt || ''}
						width="auto"
						height="auto"
						style={styles.image}
					  />
					)}
					{item.imageItemUrl && item.imageItemLink && (
					  <a href={item.imageItemLink} target="_blank" rel="noopener noreferrer">
						<Img
						  src={item.imageItemUrl}
						  alt={item.imageItemAlt || ''}
						  width="auto"
						  height="auto"
						  style={styles.image}
						/>
					  </a>
					)}
				  </Column>
				</>
			  )}
			</React.Fragment>
          ))}
        </Row>
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

