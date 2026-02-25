
// emails/TrainingNewsletter.tsx
import { styles } from './styles';
import { FooterDivider } from '@/app/components/FooterDivider';
import { FooterTraining } from '@/app/components/FooterTraining';
import { Header } from '@/app/components/Header';
import { Conditional } from 'jsx-email';
import { tokens } from './styles';

import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Column,
    Row,
    Section
} from '@react-email/components';
import { SectionRenderer } from '@/app/components/sections';
import type { WeeklyNewsletterProps } from '@/lib/mapIssueToEmailProps';

type Props = WeeklyNewsletterProps & {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    templateLogoReverseUrl?: string;
    footerDividerUrl?: string;
};

export default function TrainingNewsletter({
    sections,
    templateLogoUrl = 'https://cdn.sanity.io/images/qzfk7kdf/production/00658b9f07c7eecfdc4bdae6ef5f2d4582440527-280x240.jpg',
    templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
}: Props) {
    const previewText = 'Facilities Services Training Newsletter';

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
                    />

                    <Container>
                        <Row>
                            <Column style={styles.innerContainer}>
                                <Section>
                                    <Row>
                                        <Column className="content-td" style={{ paddingLeft: tokens.spacing.xl, paddingRight: tokens.spacing.xl }}>

                                            {sections && sections.length > 0 ? (
                                                <>
                                                    {sections.map((section, i) => {
                                                        const isLastSection = i === sections.length - 1;
                                                        return (
                                                            <SectionRenderer
                                                                key={i}
                                                                section={section}
                                                                isLast={isLastSection}
                                                            />
                                                        );
                                                    })}
                                                </>
                                            ) : null}
                                        </Column>
                                    </Row>

                                </Section>

                                
                            </Column>
                        </Row>
                    </Container>
                    <FooterTraining />
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

