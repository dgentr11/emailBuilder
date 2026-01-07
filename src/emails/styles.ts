
import type { CSSProperties } from 'react';

export const tokens = {
  
  colors: {
    brand: '#ff8200',
    primary: '#0078d4',
    white: '#ffffff',
    smokey: '#222222',
    gray600: '#666',
    gray700: '#888',
    bg: '#f5f5f5',
  },
  fonts: {
    base: '"Montserrat", Arial, sans-serif',
  },
  spacing: {
    xs: 6,
    sm: 8,
    md: 12,
    lg: 20,
    xl: 30,
  },
  widths: {
    container: 600,
  },
};

const withFont = (style: CSSProperties): CSSProperties => ({
  fontFamily: tokens.fonts.base,
  ...style,
});

export const styles = {
  body: withFont({
    backgroundColor: tokens.colors.bg,
  }),
  container: withFont({
    maxWidth: tokens.widths.container,
    margin: '0 auto',
    backgroundColor: tokens.colors.white,
    paddingTop: tokens.spacing.xl,
    paddingBottom: 0,
    marginTop: tokens.spacing.xl,
  }),
  innerContainer: withFont({
    paddingLeft: tokens.spacing.lg,
    paddingRight: tokens.spacing.lg,
    paddingBottom: tokens.spacing.xl,
    paddingTop: '0',
  }),
  outerContainer: withFont({
    padding: 0,
    maxWidth: tokens.widths.container,
  }),
  innerContainerTop: withFont({
    paddingBottom: tokens.spacing.md,
    paddingLeft: tokens.spacing.lg,
    paddingRight: tokens.spacing.lg,
  }),
  templateLogo: withFont({
    textAlign: 'center',
    display: 'block',
    maxWidth: '150px',
    width: '100%',
    margin: '0 auto',
  }),
  header: withFont({
    textAlign: 'center',
    paddingBottom: 0,
    paddingTop: tokens.spacing.lg
  }),
  headerImageContainer: withFont({
    fontSize: '0',
    padding: '0',
    margin: '0',
    lineHeight: '0'
  }),
  h1: withFont({
    fontSize: 30,
    margin: '10px 0 4px',
    lineHeight: '28px',
    textAlign: 'center',
  }),
   h1Left: withFont({
    fontSize: 30,
    margin: '10px 0 4px',
    lineHeight: '28px',
    textAlign: 'left',
  }),
  section: withFont({
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.lg,
  }),
   sectionCentered: withFont({
    paddingTop: tokens.spacing.xl,
    paddingBottom: tokens.spacing.xl,
    textAlign: 'center'
  }),
  image: withFont({
    display: 'block',
    border: 0,
    margin: '0 auto',
    textAlign: 'center',
  }),
  imageCover: withFont({
    display: 'block',
    border: 0,
    margin: '0 auto',
    textAlign: 'center',
    objectFit: 'cover'
  }),
  h2: withFont({
    fontSize: 24,
    margin: '12px 0',
    lineHeight: '24px',
  }),
  h2Centered: withFont({
    fontSize: 24,
    margin: '12px 0 0',
    lineHeight: '24px',
    textAlign: 'center',
    fontWeight: 'bold',
  }),
  richText: withFont({
    fontSize: 14,
    lineHeight: '22px',
  }),
   richTextCentered: withFont({
    fontSize: 16,
    textAlign: 'center',
    lineHeight: '22px',
  }),
  richTextLeft: withFont({
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: '0',
    lineHeight: '22px',
  }),
  primaryButton: withFont({
    marginTop: tokens.spacing.sm,
    backgroundColor: tokens.colors.primary,
    color: '#fff',
    padding: '8px 12px',
    textDecoration: 'none',
    borderRadius: 0,
    display: 'inline-block',
  }),
  subsectionsWrapper: withFont({
    marginTop: tokens.spacing.md,
  }),
  subsection: withFont({}),
  h3: withFont({
    fontSize: 18,
    margin: '8px 0 6px',
    lineHeight: '22px',
  }),
  secondaryButton: withFont({
    marginTop: tokens.spacing.xs,
    backgroundColor: tokens.colors.brand,
    color: '#fff',
    padding: '8px 12px',
    textDecoration: 'none',
    borderRadius: 0,
    display: 'inline-block',
  }),
  footerCta: withFont({
    textAlign: 'center',
    paddingBottom: tokens.spacing.xl
  }),
  footerButton: withFont({
    backgroundColor: '#ffffff',
    color: tokens.colors.primary,
    border: `3px solid ${tokens.colors.brand}`,
    fontWeight: 600,
    padding: '12px 20px',
    textDecoration: 'none',
    borderRadius: 8,
    display: 'inline-block',
  }),
  footer: withFont({
    padding: '30px 0',
    textAlign: 'center',
    maxWidth: '600px'
  }),
  footerText: withFont({
    fontSize: 12,
    color: tokens.colors.gray700,
  }),
  hr: withFont({
    width: '180px',
    marginTop: tokens.spacing.xl,
    marginBottom: tokens.spacing.xl,
    borderTop: `4px dotted ${tokens.colors.brand}`,
  }),
  footerDivider: withFont({
    textAlign: 'center',
    paddingTop: tokens.spacing.lg,
  }),
  footerDividerIcon: withFont({
    margin: '0 auto'
  }),
  footerLower: withFont({
    backgroundColor: tokens.colors.smokey,
    maxWidth: '600px',
    width: '100%',
    paddingTop: tokens.spacing.md,
    paddingBottom: tokens.spacing.xl
  })
} satisfies Record<string, CSSProperties>;
