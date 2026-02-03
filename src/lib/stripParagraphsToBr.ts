const FONT_STYLE =
  'font-family: \'Montserrat\', Arial, Helvetica, sans-serif';
const BOLD_STYLE = `${FONT_STYLE}; font-size: 14px; font-weight: bold`;
const ITALIC_STYLE = `${FONT_STYLE}; font-size: 14px; font-style: italic`;

function replaceTagWithStyledSpan(
  html: string,
  tagName: string,
  spanStyle: string
): string {
  const openTagRegex = new RegExp(`<${tagName}(\\s[^>]*)?>`, 'gi');
  let result = html.replace(openTagRegex, () => `<span style="${spanStyle}">`);
  result = result.replace(new RegExp(`</${tagName}>`, 'gi'), '</span>');
  return result;
}

function addFontStyleToTag(html: string, tagName: string): string {
  const openTagRegex = new RegExp(
    `<${tagName}(\\s[^>]*)?>`,
    'gi'
  );
  return html.replace(openTagRegex, (match, rest = '') => {
    const hasStyle = /style\s*=/i.test(rest);
    if (hasStyle) {
      const newRest = rest.replace(
        /style\s*=\s*["']([^"']*)["']/i,
        (_: string, existing: string) => `style="${FONT_STYLE}; ${existing}"`
      );
      return `<${tagName}${newRest}>`;
    }
    const style = ` style="${FONT_STYLE}"`;
    return `<${tagName}${style}${rest}>`;
  });
}

export function stripParagraphsToBr(html: string): string {
  if (!html?.trim()) return html;
  let result = html;
  // Add font-family to <p> tags (keep as paragraph)
  result = addFontStyleToTag(result, 'p');
  // Replace <b> and <strong> with <span> (fontFamily + fontWeight: bold)
  result = replaceTagWithStyledSpan(result, 'strong', BOLD_STYLE);
  result = replaceTagWithStyledSpan(result, 'b', BOLD_STYLE);
  // Replace <em> and <i> with <span> (fontFamily + fontStyle: italic)
  result = replaceTagWithStyledSpan(result, 'em', ITALIC_STYLE);
  result = replaceTagWithStyledSpan(result, 'i', ITALIC_STYLE);
  // Add font-family to remaining inner elements
  const innerTags = ['a', 'ul', 'ol', 'li'];
  for (const tag of innerTags) {
    result = addFontStyleToTag(result, tag);
  }
  return result;
}