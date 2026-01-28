export function stripParagraphsToBr(html: string): string {
    if (!html?.trim()) return html;
    const spacer = '<div style="height:0.6em;line-height:0;overflow:hidden;font-size:1px;">&nbsp;</div>';
    return html
      .replace(/<\/p>\s*<p(\s[^>]*)?>/gi, spacer)
      .replace(/<p(\s[^>]*)?>/gi, '')
      .replace(/<\/p>/gi, '');
  }