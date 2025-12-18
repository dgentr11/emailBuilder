import { styles } from "@/emails/styles";
import { Img, Section, Heading,Text, Column, Row } from "@react-email/components";

 type HeaderProps = {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    headerImageUrl?: string;
    headerImageAlt?: string;
    title?: string;
    publishDate?: string;
    formattedDate?: string;
    subtitle?: string;
}

export function Header({ templateLogoUrl, templateLogoAlt, title, publishDate, formattedDate, headerImageUrl, headerImageAlt, subtitle } : HeaderProps) {

    return (

        <>
            <Section style={styles.header}>
                {templateLogoUrl &&
                    <Img
                        src={templateLogoUrl}
                        alt={templateLogoAlt || title}
                        width="150"
                        height="auto"
                        style={styles.templateLogo}
                    />
                }
            </Section>
            <Section style={styles.innerContainerTop}>
                <Heading as="h1" style={styles.h1}>
                    {title ? title : `Facilities Services Weekly`}
                </Heading>
                {subtitle ? (
                    <Text style={styles.richTextCentered}>
                        {subtitle ? subtitle : 'Empowering Vols to build, maintain, and serve our campus with excellence through ongoing training.'}
                    </Text>
                ) : null}
                
                {publishDate &&   
                    <Text style={styles.meta}>
                        <span>{formattedDate}</span>
                    </Text>
                }
            </Section>
            <Section > 
                {headerImageUrl && 
                    <Row >
                        <Column style={styles.headerImageContainer}>
                            <Img
                                src={headerImageUrl}
                                alt={headerImageAlt || title}
                                width="600"
                                height="auto"
                                style={styles.headerImage}
                            />
                        </Column>
                    </Row>
                }
            </Section>
        </>
    )
}