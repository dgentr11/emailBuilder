
import { toHTML } from '@portabletext/to-html';

export function portableTextToEmailHtml(blocks: any[]): string {
  return toHTML(blocks, {
  });
}
