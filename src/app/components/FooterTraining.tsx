import {  tokens } from "@/emails/styles";
import { Link, Img, Section, Text } from "@react-email/components";

const smokey = tokens.colors.smokey;

type SocialRowProps = {
    facebookUrl?: string;
    xUrl?: string;
    instagramUrl?: string;
};

export function FooterTraining({

}: SocialRowProps) {

    const templateLogoAlt = 'The University of Tennessee Knoxville Facilities Services',
    templateLogoReverseUrl = 'https://facilities.utk.edu/wp-content/uploads/2026/01/email-UTKF_Footer_logo.png';

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
                            width="100%"
                            border={0}
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
                                                    width="140"
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
                                    <Link href="mailto:FSTraining@utk.edu"  style={{ fontSize: tokens.fontSizes.xs, lineHeight: tokens.lineHeight.xs, color: '#ffffff'}}>FSTraining@utk.edu</Link>   
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style={{ padding: '4px 16px' }}>
                                    <Text
                                        style={{
                                            margin: 0,
                                            marginTop: 0,
                                            marginBottom: 0,
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
                                            marginBottom: 0,
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
                                            marginBottom: 0,
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
    )
}