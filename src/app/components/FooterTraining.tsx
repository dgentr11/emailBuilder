import { styles } from "@/emails/styles";
import { Link, Column, Img, Row, Section, Text } from "@react-email/components";


export  function FooterTraining() {

    const templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
    templateLogoReverseUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-utfs-logo-reverse.png';

    return (

           <Section style={styles.footerLower}>
            <table 
                align="center"
                width="100%"
                role="presentation"
                style={{ width: '100%', marginTop: '10px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}
            >
                <tr>
                    <td align="center">
                        <Img
                        alt={templateLogoAlt}
                        height="auto"
                        src={templateLogoReverseUrl}
                        width="120"
                        style={{
                            padding: '30px 0 10px'
                        }}
                        />
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <Row
                        style={{
                            display: 'table-cell',
                            height: 44,
                            width: 56,
                            verticalAlign: 'bottom',
                        }}
                        >
                        <Column style={{ paddingRight: 8 }}>
                            <Link href="https://www.facebook.com/utfacilitiesservices">
                            <Img
                                alt="Facebook"
                                height="auto"
                                src="https://facilities.utk.edu/wp-content/uploads/2025/12/email-footer-facebook.png"
                                width="25"
                                style={{margin: '0 5px'}}
                            />
                            </Link>
                        </Column>
                        <Column style={{ paddingRight: 8 }}>
                            <Link href="https://twitter.com/utkfacserv">
                            <Img alt="X" height="auto" src="https://facilities.utk.edu/wp-content/uploads/2025/12/email-footer-x.png" width="25" style={{margin: '0 5px'}} />
                            </Link>
                        </Column>
                        <Column>
                            <Link href="https://instagram.com/utfacilities/">
                            <Img
                                alt="Instagram"
                                height="auto"
                                src="https://facilities.utk.edu/wp-content/uploads/2025/12/email-fooer-instagram-1.png"
                                width="25"
                                style={{margin: '0 5px'}}
                            />
                            </Link>
                        </Column>
                        </Row>
                    </td>
                </tr>
                <tr>
                <td align="center">
                    <Text
                        style={{
                            marginTop: 8,
                            marginBottom: 8,
                            fontSize: 12,
                            lineHeight: '1.3',
                            fontWeight: 600,
                            color: '#ffffff',
                        }}
                    >
                        2040 Sutherland Avenue<br />
                        Knoxville, TN 37921<br />
                        <Link style={{ fontSize: 12, lineHeight: '1.3', fontWeight: 600, color: '#ffffff' }} href="tel:865-946-7777">865-946-7777</Link> <br />
                        <Link style={{ fontSize: 12, lineHeight: '1.3', fontWeight: 600, color: '#ffffff' }} href="mailto:adminfs@utk.edu">adminfs@utk.edu</Link>
                
                    </Text>
                
                </td>
                </tr>
            </table>
        </Section>
    )
}