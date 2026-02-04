
// emails/TrainingNewsletter.tsx
import { styles } from './styles';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { Conditional } from 'jsx-email';
import { tokens } from './styles';

import {
    Html,
    Head,
    Preview,
    Text,
    Body,
    Container,
    Link,
    Img,
    Section,
    Row,
    Column
} from '@react-email/components';
import type { PressReleaseEmailProps } from "@/types/pressRelease";


export default function PressRelease({
    title,
    emailTitle,
    publishDate,
    pressReleaseArticle,
    templateLogoUrl = "https://facilities.utk.edu/wp-content/uploads/2026/01/email-UTKF_logo.jpg",
    templateLogoAlt = "The University of Tennessee Knoxville Facilities Services",
    }: PressReleaseEmailProps & {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    }) {
    const formattedDate = formatMonthDay(publishDate);
    const previewText = emailTitle ?? title;

    return (

        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Conditional mso>
                <style>
                    {`body, table, td, p, h1, h2, h3, h4, h5, h6, ol, ul, li, a, div, span, b, strong, em, i { font-family: "Montserrat", Arial, sans-serif !important; } p, div, ol, li { font-size: 14px; }`}
                </style>

            </Conditional>
        
           
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="" />
   
            <Body style={styles.body}>

                <Container style={styles.container}>

                    <Header 
                        templateLogoAlt={templateLogoAlt}
                        templateLogoUrl={templateLogoUrl}
                        emailTitle={emailTitle}
                    />

                    <Container style={styles.innerContainer}>      
                        <Row>
                            <Column style={{ paddingLeft: tokens.spacing.lg, paddingRight: tokens.spacing.lg }}>
                                <Section  >
                                    <Row>
                                        <Column style={styles.section}>
                                             {/* Image */} 
                                                {pressReleaseArticle?.image?.asset?.url && (
                                                    <Row>
                                                        <Column style={{paddingBottom: "16px"}}>
                                                            <Img
                                                                src={pressReleaseArticle.image.asset.url}
                                                                alt={pressReleaseArticle.image.alt || ""}
                                                                width="100%"
                                                                style={{ borderRadius: "8px", marginBottom: "0px" }}
                                                            />
                                                        </Column>
                                                    </Row>
                                                    
                                                )}

                                                {pressReleaseArticle?.eyebrow && (
                                                    <Text style={{ ...styles.eyebrowCentered, marginBottom: '8px' }}>
                                                        {pressReleaseArticle.eyebrow}
                                                    </Text>
                                                    )}

                                                {/* Title */}
                                                {pressReleaseArticle?.title && (
                                                    <Text style={{...styles.h1, textTransform: "uppercase", marginTop: '0px'}}>
                                                        {pressReleaseArticle.title}
                                                    </Text>
                                                )}
                                                
                                                {/* Summary (Portable Text) */}
                                                {pressReleaseArticle?.summary && (
                                                    <div style={{ marginBottom: "24px" }}>
                                                        {pressReleaseArticle.summary.map((block: any, i: number) => {
                                                        if (block._type === "block") {
                                                            return (
                                                            <Text key={i} style={{ ...styles.richText }}>
                                                                {block.children?.map((c: any) => c.text).join("")}
                                                            </Text>
                                                            );
                                                        }
                                                        return null;
                                                        })}
                                                    </div>
                                                )}

                                                {/* Button Link */}
                                                {pressReleaseArticle?.url && (
                                                
                                                <table role="presentation" border={0} cellPadding={0} cellSpacing={0} align="center" style={{ margin: "auto" }}>
                                                    <tbody>
                                                        <tr>
                                                        <td style={{ backgroundColor: "#ffffff", border: "3px solid #ff8200", borderRadius: '8px', padding: "12px 20px", textAlign: "center" }}>
                                                            <a
                                                            href={pressReleaseArticle.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                fontFamily: "Arial, Helvetica, sans-serif",
                                                                fontSize: "16px",
                                                                fontWeight: "bold",
                                                                color: "#0078d4",
                                                                textDecoration: "none",
                                                                display: "inline-block",
                                                            }}
                                                            >
                                                            <span style={{textDecoration: 'none', color: '#0078d4', fontWeight: 'bold'}}>{pressReleaseArticle.urlText ?? "Read More"}</span>
                                                            </a>
                                                        </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                    
                                                )}
                                        </Column>
                                    </Row>
                                   
                            </Section>
                        </Column>
                        </Row>
                    </Container>
                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}

/** ---- Helpers ---- **/

function formatMonthDay(date?: string): string {
  if (!date) return '—';
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}

