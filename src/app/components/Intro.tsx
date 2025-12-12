import { styles } from "@/emails/styles";
import { Section } from "@react-email/components";

type IntroProps = {
    introHtml?: string;
}

export function Intro({ introHtml } : IntroProps) {
    
    if (!introHtml) {
        return;
    }

    return (
       <Section style={styles.section}>
            <div
                dangerouslySetInnerHTML={{ __html: introHtml }}
                style={styles.richText}
            />
        </Section>
    )
}