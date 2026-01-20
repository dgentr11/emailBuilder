
// emails/TrainingNewsletter.tsx
import { styles } from './styles';
import { FooterDivider } from '@/app/components/FooterDivider';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { Conditional } from 'jsx-email';

import {
    Html,
    Head,
    Preview,
    Body,
    Container,
} from '@react-email/components';
import { SectionRenderer } from '@/app/components/sections';
import type { WeeklyNewsletterProps } from '@/lib/mapIssueToEmailProps';

type Props = WeeklyNewsletterProps & {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    templateLogoReverseUrl?: string;
    footerDividerUrl?: string;
};

export default function PressRelease({
    headerImageUrl,
    headerImageAlt,
    publishDate,
    sections,
    templateLogoUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-utfs-logo-black.png',
    templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
}: Props) {
    const formattedDate = formatMonthDay(publishDate);
    const previewText = 'Facilities Services News';
    

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

                    <Header 
                        templateLogoAlt={templateLogoAlt}
                        templateLogoUrl={templateLogoUrl}
                        publishDate={publishDate}
                        formattedDate={formattedDate}
                        headerImageUrl={headerImageUrl}
                        headerImageAlt={headerImageAlt}
                    />

                    <Container style={styles.innerContainer}>

                        {sections && sections.length > 0 ? (
                            <>
                                {sections.map((section, i) => {
                                    const isLastSection = i === sections.length - 1;
                                    return (
                                        <SectionRenderer
                                            key={i}
                                            section={section}
                                            isLast={isLastSection}
                                            template="pressRelease"
                                        />
                                    );
                                })}
                            </>
                        ) : null}

                        <FooterDivider />
                        
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

