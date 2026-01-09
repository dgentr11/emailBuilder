
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
    Row,
    Column,
    Heading,
    Text,
    Img,
} from '@react-email/components';


type Props = {
    headerImageUrl?: string;
    headerImageAlt?: string;
    publishDate?: string;
    emailTitle?: string;
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
    headerImageUrl,
    headerImageAlt,
    emailTitle,
    subtitle,
    contentHtml,
    ctaLabel = 'Learn more',
    ctaHref = '#',
}: Props) {
    const previewText =
        emailTitle || 'UT Facility Services Press Release';

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
                                alt={templateLogoAlt || emailTitle}
                                width="150"
                                height="auto"
                                style={styles.templateLogo}
                            />
                        }
                    </Section>
                    <Section style={styles.headerPadBot}>
                        {headerImageUrl &&
                            <Row >
                                <Column style={styles.headerImageContainer}>
                                    <Img
                                        src={headerImageUrl}
                                        alt={headerImageAlt || emailTitle}
                                        width="600"
                                        height="auto"
                                        style={styles.headerImage}
                                    />
                                </Column>
                            </Row>
                            }
                    </Section>
                    <Container style={styles.innerContainer}>
                        <Heading as="h1" style={styles.h1Left}>
                            {emailTitle ? emailTitle : 'Facilities Services Newsletter'}
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
