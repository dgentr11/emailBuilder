import { Section } from '@react-email/components';
import { styles } from '@/emails/styles';
import type { RichTextView } from '@/lib/mapIssueToEmailProps';

type Props = RichTextView;

export function RichText({ summaryHtml }: Props) {
  if (!summaryHtml) return null;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: summaryHtml }}
      style={styles.richText}
    />
  );
}

