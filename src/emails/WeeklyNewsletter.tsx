
import { styles } from './styles';
import { Footer } from '@/app/components/Footer';
import { FooterDivider } from '@/app/components/FooterDivider';
import { Conditional } from 'jsx-email';
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
} from '@react-email/components';
import { Header } from '@/app/components/Header';
import { SectionRenderer } from '@/app/components/sections';
import type { WeeklyNewsletterProps } from '@/lib/mapIssueToEmailProps';

type Props = WeeklyNewsletterProps & {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    templateLogoReverseUrl?: string;
    footerDividerUrl?: string;
};

export default function WeeklyNewsletter({
    sections,
    templateLogoUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-utfs-logo-black.png',
    templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
}: Props) {
    const previewText = 'Facilities Services Newsletter';

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Conditional mso>
                <style>
                    {`body, table, td, p, h1, h2, h3, h4, h5, h6, ol, ul, li, a, div, span, b, strong, em, i { font-family: "Montserrat", Arial, sans-serif !important; }`}
                </style>
                
            </Conditional>
           
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="" />
   
            <Body style={styles.body}>

                <Container style={styles.container}>

                    <Header 
                        templateLogoAlt={templateLogoAlt}
                        templateLogoUrl={templateLogoUrl}
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
