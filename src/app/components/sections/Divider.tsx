import { Img, Section } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { DividerView } from '@/lib/mapIssueToEmailProps';

type Props = DividerView;

export function Divider({ dividerToggle = true }: Props) {
  const dividerImage = 'https://facilities.utk.edu/wp-content/uploads/2025/02/4132f2ac-de6d-454f-a908-812dea0a4179.png';
  if (!dividerToggle) return null;

  return (
    <Section align="center" style={styles.dividerContainer}>
      <Img width="100%" height="23" src={dividerImage} alt="Checkerboard Divider" style={styles.divider} />
    </Section>
  )
}
