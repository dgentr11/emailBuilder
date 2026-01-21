import { styles } from "@/emails/styles";
import { Img, Section} from "@react-email/components";

 type HeaderProps = {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    emailTitle?: string;
}

export function Header({ templateLogoUrl, templateLogoAlt, emailTitle } : HeaderProps) {

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