import { styles } from "@/emails/styles";
import { Button, Section } from "@react-email/components";


type CtaProps = {
  ctaLabel: string;
  ctaHref: string;
};


export function Cta({ ctaLabel, ctaHref } : CtaProps) {

    return (
        <Section style={styles.footerCta}>
            <Button href={ctaHref} style={styles.footerButton}>
                {ctaLabel}
            </Button>
        </Section>
    )
}

 