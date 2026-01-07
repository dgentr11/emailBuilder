import { Hr } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { DividerView } from '@/lib/mapIssueToEmailProps';

type Props = DividerView;

export function Divider({ dividerToggle = true }: Props) {
  if (!dividerToggle) return null;

  return <Hr style={styles.hr} />;
}

