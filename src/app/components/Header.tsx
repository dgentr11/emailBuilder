import { styles } from "@/emails/styles";
import { Img, Section, Heading,Text, Column, Row } from "@react-email/components";

 type HeaderProps = {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    headerImageUrl?: string;
    headerImageAlt?: string;
    emailTitle?: string;
    publishDate?: string;
    formattedDate?: string;
    subtitle?: string;
}

export function Header({ templateLogoUrl, templateLogoAlt, emailTitle, publishDate, formattedDate, headerImageUrl, headerImageAlt, subtitle } : HeaderProps) {

    return (

        <>
            <Section style={styles.header}>
                {templateLogoUrl &&
                    <Img
                        src={templateLogoUrl}
                        alt={templateLogoAlt || emailTitle}
                        width="150"
                        height="auto"
                        style={styles.templateLogo}
                    />
                }
            </Section>
           
        </>
    )
}