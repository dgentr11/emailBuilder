import { Section, Img } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { SimpleImageView } from '@/lib/mapIssueToEmailProps';

type Props = SimpleImageView;

export function SimpleImage({ imageUrl, imageAlt }: Props) {
  if (!imageUrl) return null;

  return (
    <Img
      src={imageUrl}
      alt={imageAlt || ''}
      width="100%"
      height="auto"
      style={styles.image}
    />
  );
}

