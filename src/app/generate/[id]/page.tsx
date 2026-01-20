
// src/app/generate/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getIssueById } from '@/lib/getIssue';
import { toEmailProps } from '@/lib/mapIssueToEmailProps';
import WeeklyNewsletter from '@/emails/WeeklyNewsletter';
import TrainingNewsletter from '@/emails/TrainingNewsletter';
import PressRelease from '@/emails/PressRelease';
import { render, pretty } from '@react-email/render';
import CopyButton from '../../components/CopyButton';
import DownloadButton from '../../components/DownloadButton';

export const revalidate = 0;

async function resolveParams(arg: { params: unknown }) {
  const p = (arg?.params ?? null) as any;
  if (p && typeof p === 'object' && 'then' in p) {
    return (await p) as { id?: string };
  }
  return p as { id?: string };
}

export default async function Page(
  arg:
    | { params: { id: string } }
    | { params: Promise<{ id: string }> }
) {
  const params = await resolveParams(arg);
  const id = params?.id;
  if (!id) {
    notFound();
  }

  let doc: any;
  try {
    doc = await getIssueById(id);
  } catch (e) {
    console.error('getIssueById failed:', e);
    doc = null;
  }

  if (!doc) {
    return (
      <main className="max-w-3xl mx-auto p-8">
        No issue found for id: <strong>{id}</strong>
      </main>
    );
  }

  // Decide which component + prop mapper to use based on _type
  let Component: React.ComponentType<any> = WeeklyNewsletter;
  let mapProps: (d: any) => any = toEmailProps;
  let defaultTitle = `Newsletter ${id}`;
  let defaultItems: any[] = [];

  switch (doc._type) {
    case 'newsletterIssue':
      Component = WeeklyNewsletter;
      mapProps = toEmailProps; // existing mapper
      defaultTitle = doc.title ?? defaultTitle;
      break;

    case 'newsletterTraining':
      Component = TrainingNewsletter;
      mapProps = toEmailProps;
      defaultTitle = doc.title ?? `Training Newsletter ${id}`;
      break;

    case 'pressRelease':
      Component = PressRelease;
      mapProps = toEmailProps;
      defaultTitle = doc.title ?? `Press Release ${id}`;
      break;

    default:
      console.warn('Unknown _type:', doc._type, '— falling back to WeeklyNewsletter');
      Component = WeeklyNewsletter;
      mapProps = toEmailProps;
  }

  let emailProps: any;
  try {
    emailProps = mapProps(doc);
  } catch (e) {
    console.error('prop mapper failed:', e);
    emailProps = { title: defaultTitle, items: defaultItems };
  }

  let html = '';
  try {
    const raw = await render(<Component {...emailProps} />);
    try {
      html = await pretty(raw);
    } catch (e) {
      console.warn('pretty() failed, using raw output:', e);
      html = raw;
    }
  } catch (e) {
    console.error('render() failed:', e);
    html = '<p>Failed to render email HTML.</p>';
  }

   const formattedDate = formatDateMMDDYYYY()

  return (
    <main className="max-w-7xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Generated Email HTML</h1>

      <div className="flex gap-3">
        <CopyButton html={html}  />
        <DownloadButton html={html} title={doc.title + '-' + (doc.publishDate ? doc.publishDate : formattedDate) } />
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <iframe
          title="preview"
          srcDoc={html}
          className="w-full border rounded"
          style={{ height: '1000px' }}
        />
      </section>
    </main>
  );
}



function formatDateMMDDYYYY(date: Date = new Date()): string {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}
