const FONT_STYLE =
  'font-family: \'Montserrat\', Arial, Helvetica, sans-serif';
const BOLD_STYLE = `${FONT_STYLE}; font-size: 14px; font-weight: bold`;
const ITALIC_STYLE = `${FONT_STYLE}; font-size: 14px; font-style: italic`;
const ANCHOR_STYLE = `${FONT_STYLE}; color: #0078d4`;

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

function addStyleToTag(html: string, tagName: string, styleString: string): string {
  const openTagRegex = new RegExp(
    `<${tagName}(\\s[^>]*)?>`,
    'gi'
  );
  return html.replace(openTagRegex, (match, rest = '') => {
    const hasStyle = /style\s*=/i.test(rest);
    if (hasStyle) {
      const newRest = rest.replace(
        /style\s*=\s*["']([^"']*)["']/i,
        (_: string, existing: string) => `style="${styleString}; ${existing}"`
      );
      return `<${tagName}${newRest}>`;
    }
    const style = ` style="${styleString}"`;
    return `<${tagName}${style}${rest}>`;
  });
}

/** Restore mailto: and tel: in hrefs that lost the protocol (e.g. after portable text / sanitization). */
function restoreMailtoAndTelHrefs(html: string): string {
  return html.replace(
    /href\s*=\s*(["'])([^"']*)\1/gi,
    (_match, quote: string, url: string) => {
      const u = url.trim();
      if (!u) return `href=${quote}${u}${quote}`;
      // Already has a safe protocol or hash
      if (/^(https?:|mailto:|tel:|#)/i.test(u)) return `href=${quote}${u}${quote}`;
      // Email-like: contains @ and no protocol → treat as mailto
      if (u.includes('@')) return `href=${quote}mailto:${u}${quote}`;
      // Phone-like: digits, spaces, + - ( ) . and at least 10 digits → treat as tel
      if (/^[\d\s\-+().]+$/.test(u) && u.replace(/\D/g, '').length >= 10) {
        return `href=${quote}tel:${u}${quote}`;
      }
      return `href=${quote}${u}${quote}`;
    }
  );
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
  // Add font-family and color to anchor tags
  result = addStyleToTag(result, 'a', ANCHOR_STYLE);
  // Restore mailto: and tel: in hrefs if they were stripped (e.g. by portable text / sanitization)
  result = restoreMailtoAndTelHrefs(result);
  // Add font-family to remaining inner elements
  const innerTags = ['ul', 'ol', 'li'];
  for (const tag of innerTags) {
    result = addFontStyleToTag(result, tag);
  }
  return result;
}