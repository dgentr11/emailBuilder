
'use client';

export default function DownloadButton({ html, title }: { html: string; title?: string }) {
  return (
    <button
      className="px-3 py-2 bg-green-600 text-white rounded"
      onClick={() => {
        try {
          const blob = new Blob([html], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${title ?? 'html download'}.html`;
          a.click();
          URL.revokeObjectURL(url);
        } catch (err) {
          console.error('Download failed', err);
          alert('Failed to start download. See console for details.');
        }
      }}
    >
      Download HTML
    </button>
  );
}
