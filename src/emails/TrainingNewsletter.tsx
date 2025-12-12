
// emails/WeeklyNewsletter.tsx
import { styles } from './styles';
import * as React from 'react';
import { FooterTraining } from '@/app/components/FooterTraining';
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Heading,
    Text,
    Button,
    Img,
    Hr,
} from '@react-email/components';
import { FooterDivider } from '@/app/components/FooterDivider';
import { Cta } from '@/app/components/Cta';
import { Header } from '@/app/components/Header';

type SubsectionItem = {
    title: string;
    summaryHtml?: string;
    url?: string;
    imageUrl?: string;
    imageAlt?: string;
};

type SectionItem = {
    title: string;
    summaryHtml?: string;
    url?: string;
    imageUrl?: string;
    imageAlt?: string;
    subsections?: SubsectionItem[];
};

type Props = {
    headerImageUrl?: string;
    headerImageAlt?: string;
    title?: string;
    subtitle?: string;
    introHtml?: string;
    sections: SectionItem[];
    outroHtml?: string;
    ctaLabel?: string;
    ctaHref?: string;
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    templateLogoReverseUrl?: string;
    footerDividerUrl?: string;
};

export default function TrainingNewsletter({
    templateLogoUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-utfs-logo-black.png',
    templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
    headerImageUrl,
    headerImageAlt,
    title,
    subtitle,
    introHtml,
    sections,
    outroHtml,
    ctaLabel = 'Learn more',
    ctaHref = '#',
}: Props) {
    const previewText =
        title || `Weekly FS Training Newsletter`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="" />
   
            <Body style={styles.body}>
                <Container style={styles.container}>
                   
                    <Header 
                        templateLogoAlt={templateLogoAlt}
                        templateLogoUrl={templateLogoUrl}
                        title={title}
                        subtitle={subtitle}
                        headerImageUrl={headerImageUrl}
                        headerImageAlt={headerImageAlt}
                    />

                    <Container style={styles.innerContainer}>
                       
                        {/* Intro */}
                        {introHtml ? (
                            <Section style={styles.sectionCentered}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: introHtml }}
                                    style={styles.richTextCentered}
                                />
                            </Section>
                        ) : null}

                        {/* Sections */}
                        
                        {sections && sections.length > 0 ? (
                        <>
                            {sections.map((s, i) => {
                            const isLastSection = i === sections.length - 1;
                            const sectionStyle = isLastSection ? styles.sectionLast : styles.section;

                            return (
                                <Section key={i} style={sectionStyle}>
                                {s.imageUrl ? (
                                    <Img
                                    src={s.imageUrl}
                                    alt={s.imageAlt || s.title}
                                    width="100%"
                                    height="auto"
                                    style={styles.image}
                                    />
                                ) : null}

                                <Heading as="h2" style={styles.h2Centered}>
                                    {s.title}
                                </Heading>

                                {s.summaryHtml ? (
                                    <div
                                    dangerouslySetInnerHTML={{ __html: s.summaryHtml }}
                                    style={styles.richTextCentered}
                                    />
                                ) : null}

                                {s.url ? (
                                    <Button href={s.url} style={styles.primaryButton}>
                                    Read more
                                    </Button>
                                ) : null}

                                {/* Nested subsections */}
                                {s.subsections && s.subsections.length > 0 ? (
                                    <Section style={styles.subsectionsWrapper}>
                                    {s.subsections.map((ss, j) => {
                                        const isLastSubsection = j === s.subsections!.length - 1;

                                        return (
                                        <React.Fragment key={j}>
                                            <Section style={styles.subsection}>
                                            {ss.imageUrl ? (
                                                <Img
                                                src={ss.imageUrl}
                                                alt={ss.imageAlt || ss.title}
                                                width="600"
                                                height="auto"
                                                style={styles.image}
                                                />
                                            ) : null}

                                            <Heading as="h3" style={styles.h3}>
                                                {ss.title}
                                            </Heading>

                                            {ss.summaryHtml ? (
                                                <div
                                                dangerouslySetInnerHTML={{ __html: ss.summaryHtml }}
                                                style={styles.richText}
                                                />
                                            ) : null}

                                            {ss.url ? (
                                                <Button href={ss.url} style={styles.secondaryButton}>
                                                Read more
                                                </Button>
                                            ) : null}
                                            </Section>

                                            {!isLastSubsection ? <Hr style={styles.hr} /> : null}
                                        </React.Fragment>
                                        );
                                    })}
                                    </Section>
                                ) : null}
                                </Section>
                            );
                            })}
                        </>
                        ) : null}

                        {/* Outro */}
                        {outroHtml ? (
                            <Section style={{ ...styles.section }}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: outroHtml }}
                                    style={styles.richText}
                                />
                            </Section>
                        ) : null}

                        <Cta ctaLabel={ctaLabel} ctaHref={ctaHref} />

                        <FooterDivider />
                      </Container>
                    
                </Container>
                <FooterTraining />
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
