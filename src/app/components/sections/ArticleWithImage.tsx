import { Section, Heading, Button, Img, Text } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { ArticleWithImageView } from '@/lib/mapIssueToEmailProps';

type Props = ArticleWithImageView;

export function ArticleWithImage({
  imageUrl,
  imageAlt,
  eyebrow,
  title,
  summaryHtml,
  url,
  urlText,
}: Props) {
  return (
	<Section style={styles.section}>
		{imageUrl && (
			<Img
			src={imageUrl}
			alt={imageAlt || title}
			width="100%"
			height="auto"
			style={styles.image}
			/>
		)}
		<Section>
			{eyebrow && (
			<Text style={{ ...styles.richTextCentered, fontSize: 12, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>
				{eyebrow}
			</Text>
			)}

			<Heading as="h2" style={styles.h2Centered}>
			{title}
			</Heading>

			{summaryHtml && (
			<div
				dangerouslySetInnerHTML={{ __html: summaryHtml }}
				style={styles.richTextCentered}
			/>
			)}
			{url && (
				<div style={{ textAlign: 'center', marginTop: 12 }}>
					<Button href={url} style={styles.primaryButton}>
						{urlText || 'Read more'}
					</Button>
				</div>
			)}
		</Section>
	
	</Section>
  );
}

