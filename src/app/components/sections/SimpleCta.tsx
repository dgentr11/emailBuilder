import type { SimpleCtaView } from '@/lib/mapIssueToEmailProps';

type Props = SimpleCtaView;

export function SimpleCta({ url, urlText }: Props) {
  if (!url) return null;

  return (
    <table role="presentation" border={0} cellPadding={0} cellSpacing={0} align="center" style={{ margin: 'auto' }}>
      <tbody>
        <tr>
          <td style={{
            backgroundColor: '#ffffff',
            border: '3px solid #ff8200',
            borderRadius: '8px',
            padding: '12px 20px',
            textAlign: 'center',
          }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#0078d4',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              <span style={{ textDecoration: 'none', color: '#0078d4', fontWeight: 'bold' }}>
                {urlText || url}
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
