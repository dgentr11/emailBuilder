
import type { CSSProperties } from 'react';

export const tokens = {
  
  colors: {
    brand: '#ff8200',
    primary: '#0078d4',
    white: '#ffffff',
    smokey: '#4b4b4b',
    gray600: '#666',
    gray700: '#888',
    bg: '#f5f5f5',
  },
  fonts: {
    base: '"Montserrat", Arial, sans-serif',
  },
  fontSizes: {
    xs: 11,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 24,
    xxl: 30,
  },
  lineHeight: {
    xs: '16px',
    sm: '18px',
    md: '21px',
    lg: '27px',
    xl: '36px',
    xxl: '45px',
  },
  spacing: {
    xs: 6,
    sm: 8,
    md: 12,
    lg: 20,
    xl: 30,
    xxl: 40,
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
    width: '100%',
    margin: '0 auto',
    backgroundColor: tokens.colors.white,
    paddingBottom: 0,
    marginTop: '0'
  }),
  innerContainer: withFont({
    paddingBottom: tokens.spacing.xl,
    paddingTop: '0',
    width: '100%',
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
    paddingBottom: tokens.spacing.lg,
    paddingTop: tokens.spacing.xxl,
    color: tokens.colors.smokey
  }),
  headerImageContainer: withFont({
    fontSize: '0',
    padding: '0',
    margin: '0',
    lineHeight: '0'
  }),
  headerImage: withFont({
    display: 'block',
    margin: '0 auto'
  }),
  headerPadBot: withFont({
    textAlign: 'center',
    paddingBottom: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg
  }),
  h1: withFont({
    fontSize: 30,
    margin: '4px 0 4px',
    lineHeight: '36px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: tokens.colors.smokey
  }),
   h1Left: withFont({
    fontSize: 30,
    margin: '4px 0 4px',
    lineHeight: '36px',
    textAlign: 'left',
    fontWeight: 'bold',
    color: tokens.colors.smokey
  }),
  section: withFont({
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.lg,

  }),
  sectionLast: withFont({
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
    borderRadius: '8px',
  }),
  imageCover: withFont({
    display: 'block',
    border: 0,
    margin: '0 auto',
    textAlign: 'center',
    objectFit: 'cover'
  }),
  imageCaption: withFont({
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: tokens.fonts.base,
    padding: '8px 0 2px 0',
    textTransform: 'uppercase',
    color: tokens.colors.smokey
  }), 
  imageAttribution: withFont({
    fontSize: '11px',
    lineHeight: '14px',
    textAlign: 'center',
    fontStyle: 'normal',
    fontFamily: tokens.fonts.base,
    padding: '0px 0px 2px 0px',
    marginBottom: '0',
    color: tokens.colors.smokey
  }),
  h2: withFont({
    fontSize: 24,
    margin: '0px 0px 0px 0px',
    lineHeight: '24px',
    fontWeight: 'bold',
    color: tokens.colors.smokey
  }),
  h2Centered: withFont({
    fontSize: 24,
    margin: '0px 0px 0px 0px',
    lineHeight: '24px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: tokens.colors.smokey
  }),
  h2CenteredUpper: withFont({
    fontSize: 24,
    margin: '0px 0px 0px 0px',
    lineHeight: '24px',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: tokens.colors.smokey
  }),
  h1CenteredUpper: withFont({
    fontSize: 32,
    margin: '0px 0px 0px 0px',
    lineHeight: '32px',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: tokens.colors.smokey
  }),
  richText: withFont({
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: tokens.fonts.base,
    color: tokens.colors.smokey
  }),
   richTextCentered: withFont({
    fontSize: 14,
    textAlign: 'center',
    lineHeight: '21px',
    fontFamily: tokens.fonts.base,
    color: tokens.colors.smokey
  }),
  richTextLeft: withFont({
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: '0',
    lineHeight: '21px',
    fontFamily: tokens.fonts.base,
    color: tokens.colors.smokey
  }),
  eyebrowCentered: withFont({
    fontSize: tokens.fontSizes.md,
    fontFamily: tokens.fonts.base,
    textAlign: 'center',
    lineHeight: tokens.lineHeight.sm,
    fontWeight: 'bold',
    marginBottom: '0',
    marginTop: '0',
    letterSpacing: '1.1px',
    color: tokens.colors.primary
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
    fontSize: 16,
    margin: '8px 0 0px',
    lineHeight: '20px',
    fontWeight: 'bold',
    color: tokens.colors.smokey
  }),
  h3NoMargin: withFont({
    fontSize: 16,
    margin: '0px 0px 0px 0px',
    lineHeight: '20px',
    fontWeight: 'bold',
    color: tokens.colors.smokey
  }),
  h4: withFont({
    fontSize: 14,
    margin: '8px 0 0px',
    lineHeight: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: tokens.colors.smokey
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
  listItemLink: withFont({
    fontSize: tokens.fontSizes.md,
    color: tokens.colors.primary,
    marginTop: '0px',
    fontWeight: '700',
    lineHeight: tokens.lineHeight.md,
    textTransform: 'uppercase',
    textDecoration: 'none'
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
  }),
  footerText: withFont({
    fontSize: 12,
    color: tokens.colors.gray700,
  }),
  divider: withFont({
    width: '200px',
    maxWidth: '200px',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: tokens.spacing.md,
    paddingRight: tokens.spacing.md,
    margin: '0 auto',
    textAlign: 'center'
  }),
  dividerContainer: withFont({
    textAlign: 'center'
  }),
  itemDivider: withFont({
    marginTop: '10px',
    marginBottom: '10px',
    borderTop: '1px solid #4B4B4B'
  }),
  footerDivider: withFont({
    textAlign: 'center',
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.md,
  }),
  footerDividerIcon: withFont({
    margin: '0 auto'
  }),
  footerLower: withFont({
    backgroundColor: tokens.colors.smokey,
    width: '100%',
    paddingTop: tokens.spacing.md,
    paddingBottom: tokens.spacing.xl
  })
} satisfies Record<string, CSSProperties>;
