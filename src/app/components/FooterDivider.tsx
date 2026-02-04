import { Section, Img, Column, Row } from "@react-email/components";
import { styles } from "@/emails/styles";

export function FooterDivider() {

    const footerDividerUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-footer-divider.jpg';
     
    return (
        <Section >
            <Row>
                <Column style={styles.footerDivider}>
                {footerDividerUrl &&
                        <Img
                            src={footerDividerUrl}
                            alt={'Orange and White Checkerboard'}
                            width="200"
                            height="auto"
                            style={styles.footerDividerIcon}
                        />
                    }
                </Column>
            </Row>
            
        </Section>
    )
}