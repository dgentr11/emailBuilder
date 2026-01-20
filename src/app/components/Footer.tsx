
import { Link, Img, Section, Text } from '@react-email/components';
import { styles, tokens } from '@/emails/styles';

const smokey = tokens.colors.smokey;

export function Footer({
  
}: {
    facebookUrl?: string;
    xUrl?: string;
    instagramUrl?: string;
}) {
    const templateLogoAlt =
        'The University of Tennessee Knoxville Facilities Services';
    const templateLogoReverseUrl =
        'https://facilities.utk.edu/wp-content/uploads/2025/12/email-utfs-logo-reverse.png';

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
                            border={0}
                            width="100%"
                            cellPadding={0}
                            cellSpacing={0}
                            style={{ maxWidth: 600, borderCollapse: 'collapse' }}
                        >
                            <tr>
                                <td style={{ backgroundColor: smokey, fontFamily: "'Montserrat', Arial, sans-serif" }} >
                                    <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0} >
                                        <tr>
                                            <td align="center" style={{ padding: '30px 0 15px' }}>
                                                <Img
                                                    alt={templateLogoAlt}
                                                    src={templateLogoReverseUrl}
                                                    width="180"
                                                    style={{ display: 'block', height: 'auto', border: 0, outline: 'none' }}
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    
                                </td>
                            </tr>
                        </table>

                        <table role="presentation" width="100%" border={0} cellPadding={0} cellSpacing={0}>
                            <tr>
                                <td align="center" style={{ padding: '16px 16px 8px 16px' }}>
                                    <Link href="mailto:sjones80@vols.utk.edu"  style={{ fontSize: tokens.fontSizes.xs, lineHeight: tokens.lineHeight.xs, color: '#ffffff'}}>sjones80@vols.utk.edu</Link>   
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '4px 16px' }}>
                                    <Text
                                        style={{
                                            margin: 0,
                                            marginTop: 0,
                                            marginBottom: 8,
                                            fontSize: tokens.fontSizes.xs,
                                            lineHeight: tokens.lineHeight.xs,
                                            fontWeight: 500,
                                            color: '#ffffff',
                                        }}
                                    > 
                                        Facilities Services - The University of Tennessee, Knoxville     
                                        </Text>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '4px 16px' }}>
                                    <Text
                                        style={{
                                            margin: 0,
                                            marginTop: 0,
                                            marginBottom: 8,
                                            fontSize: tokens.fontSizes.xs,
                                            lineHeight: tokens.lineHeight.xs,
                                            fontWeight: 500,
                                            color: '#ffffff',
                                        }}
                                    > 
                                        Facilities Services Complex   
                                        </Text>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '4px 16px' }}>
                                    <Text
                                        style={{
                                            margin: 0,
                                            marginTop: 0,
                                            marginBottom: 8,
                                            fontSize: tokens.fontSizes.xs,
                                            lineHeight: tokens.lineHeight.xs,
                                            fontWeight: 500,
                                            color: '#ffffff',
                                        }}
                                    > 
                                        2040 Sutherland Ave. Knoxville, TN 37996-3010  
                                        </Text>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
    </Section>
)};
