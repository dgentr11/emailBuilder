import { Section, Img, Column, Row } from "@react-email/components";
import { styles } from "@/emails/styles";

export function FooterDivider() {

    const footerDividerUrl = 'https://cdn.sanity.io/images/qzfk7kdf/production/15d8137486f6a3b5c11acb6d8fe8b9507d31028b-284x18.jpg';
     
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