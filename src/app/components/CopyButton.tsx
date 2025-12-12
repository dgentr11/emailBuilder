
'use client';

export default function CopyButton({ html }: { html: string }) {
  return (
    <button
      className="px-3 py-2 bg-blue-600 text-white rounded"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(html);
          alert('HTML copied to clipboard!');
        } catch (err) {
          console.error('Clipboard write failed', err);
          alert('Failed to copy to clipboard. See console for details.');
        }
      }}
    >
      Copy HTML
    </button>
  );
}
