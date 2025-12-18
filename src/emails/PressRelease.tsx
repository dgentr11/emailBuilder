
import { styles } from './styles';
import { Footer } from '@/app/components/Footer';
import { FooterDivider } from '@/app/components/FooterDivider';
import { Cta } from '@/app/components/Cta';
import { Conditional } from 'jsx-email';

import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Heading,
    Text,
    Img,
} from '@react-email/components';


type Props = {
    headerImageUrl?: string;
    headerImageAlt?: string;
    title?: string;
    subtitle?: string,
    contentHtml?: string;
    ctaLabel?: string;
    ctaHref?: string;
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    templateLogoReverseUrl?: string;
    footerDividerUrl?: string;
};

export default function WeeklyNewsletter({
    templateLogoUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-utfs-logo-black.png',
    templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
    footerDividerUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-footer-divider.jpg',
    headerImageUrl,
    headerImageAlt,
    title,
    subtitle,
    contentHtml,
    ctaLabel = 'Learn more',
    ctaHref = '#',
}: Props) {
    const previewText =
        title || 'UT Facility Services Press Release';

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Conditional mso>
                <style>
                    {`body, table, td, p, h1, h2, h3, h4, h5, h6, ol, ul, li, a { font-family: Arial, sans-serif !important; }`}
                </style>
            </Conditional>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="" />
   
            <Body style={styles.body}>
                <Container style={styles.container}>

                   <Section style={styles.header}>
                        {headerImageUrl &&
                            <Img
                                src={templateLogoUrl}
                                alt={templateLogoAlt || title}
                                width="150"
                                height="auto"
                                style={styles.templateLogo}
                            />
                        }
                    </Section>
                    <Section style={styles.headerImagePadBot}>
                        {headerImageUrl &&
                            <Img
                                src={headerImageUrl}
                                alt={headerImageAlt || title}
                                width="600"
                                height="auto"
                                style={styles.image}
                            />
                        }
                    </Section>
                    <Container style={styles.innerContainer}>
                        <Heading as="h1" style={styles.h1Left}>
                            {title ? title : `Facilities Press Release`}
                        </Heading>

                        {/* Intro */}
                        {subtitle ? (
                            <Text  style={styles.richTextLeft}>
                                {subtitle}
                            </Text>
                        ) : null}

                        {/* Content */}
                        {contentHtml ? (
                            <Section style={{ ...styles.sectionLast }}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                                    style={styles.richText}
                                />
                            </Section>
                        ) : null}
                       
                        <Cta ctaLabel={ctaLabel} ctaHref={ctaHref} />
                         
                         <FooterDivider />
                    </Container>
                    <Footer />
                </Container>
            </Body>
        </Html>
    );
}
