import { styles } from "@/emails/styles";
import { Column, Img, Section, Row} from "@react-email/components";

 type HeaderProps = {
    templateLogoUrl?: string;
    templateLogoAlt?: string;
    emailTitle?: string;
}

export function Header({ templateLogoUrl, templateLogoAlt, emailTitle } : HeaderProps) {

    return (

    
    <Section >
        <Row>
            <Column style={styles.header}>
                {templateLogoUrl &&
                    <Img
                        src={templateLogoUrl}
                        alt={templateLogoAlt || emailTitle}
                        width="140"
                        height="auto"
                        style={styles.templateLogo}
                    />
                }
            </Column>
        </Row>
        
    </Section>
           
  
    )
}