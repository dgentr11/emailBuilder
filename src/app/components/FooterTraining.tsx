import {  tokens } from "@/emails/styles";
import { Link, Img, Section, Text } from "@react-email/components";

const smokey = tokens.colors.smokey;

type SocialRowProps = {
    facebookUrl?: string;
    xUrl?: string;
    instagramUrl?: string;
};

export function FooterTraining({
  facebookUrl = "https://www.facebook.com/utfacilitiesservices",
  xUrl = "https://twitter.com/utkfacserv",
  instagramUrl = "https://instagram.com/utfacilities/",
}: SocialRowProps) {

    const templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
    templateLogoReverseUrl = 'https://facilities.utk.edu/wp-content/uploads/2025/12/email-utfs-logo-reverse.png';

    return (

        <Section style={{ backgroundColor: smokey }}>

            <table
                role="presentation"
                align="center"
                width="100%"
                border={0}
                cellPadding={0}
                cellSpacing={0}
                style={{ backgroundColor: smokey }}
            >
                <tr>
                    <td align="center" style={{ paddingTop: 12, paddingBottom: 30 }}>
                        <table
                            role="presentation"
                            align="center"
                            width={600}
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            style={{ width: 600, borderCollapse: 'collapse' }}
                        >
                            <tr>
                                <td style={{ backgroundColor: smokey, fontFamily: "'Montserrat', Arial, sans-serif" }} >
                                    <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0} >
                                        <tr>
                                            <td align="center" style={{ padding: '30px 0 15px' }}>
                                                <Img
                                                    alt={templateLogoAlt}
                                                    src={templateLogoReverseUrl}
                                                    width="120"
                                                    style={{ display: 'block', height: 'auto', border: 0, outline: 'none' }}
                                                />
                                            </td>
                                        </tr>
                                    </table>

                                    <table
                                        role="presentation"
                                        align="center"
                                        border={0}
                                        cellPadding={0}
                                        cellSpacing={0}
                                        style={{ borderCollapse: 'collapse', margin: '0 auto' }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td align="center" style={{ padding: "10px 8px 0" }}>
                                                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                        <img
                                                            src="https://facilities.utk.edu/wp-content/uploads/2025/12/email-footer-facebook.png"
                                                            width="25"
                                                            height="25"
                                                            style={{padding: '0'}}
                                                        />
                                                    </a>
                                                </td>
                                                <td align="center" style={{ padding: "10px 8px 0" }}>
                                                    <a href={xUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                        <img
                                                        src="https://facilities.utk.edu/wp-content/uploads/2025/12/email-footer-x.png"
                                                        width="25"
                                                        height="25"
                                                        style={{padding: '0'}} />
                                                    </a>
                                                </td>
                                                <td align="center" style={{ padding: "10px 8px 0" }}>
                                                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                                    <img
                                                        src="https://facilities.utk.edu/wp-content/uploads/2025/12/email-fooer-instagram-1.png"
                                                        width="25"
                                                        height="25"
                                                        style={{padding: '0'}}
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>

                        <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0}>
                            <tr>
                                <td align="center" style={{ padding: '8px 16px' }}>
                                    <Text
                                        style={{
                                            margin: 0,
                                            marginTop: 16,
                                            marginBottom: 8,
                                            fontSize: 12,
                                            lineHeight: '1.5',
                                            fontWeight: 500,
                                            color: '#ffffff',
                                        }}
                                    >
                                        2040 Sutherland Avenue<br />
                                        Knoxville, TN 37921<br />
                                        <Link href="tel:865-946-7777"  style={{ fontSize: 12, lineHeight: '1.5', color: '#ffffff'}}>865-946-7777</Link>
                                        <br />
                                        <Link href="mailto:adminfs@utk.edu"  style={{ fontSize: 12, lineHeight: '1.5', color: '#ffffff'}}>adminfs@utk.edu</Link>
                                        </Text>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
    </Section>
    )
}