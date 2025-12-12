import { styles } from "@/emails/styles";
import { Section } from "@react-email/components";

type OutroProps = {
    outroHtml?: string;
}

export function Outro({ outroHtml } : OutroProps) {
    
    if (!outroHtml) {
        return;
    }

    return (
        <Section style={{ ...styles.sectionLastNoPadTop }}>
            <div
                dangerouslySetInnerHTML={{ __html: outroHtml }}
                style={styles.richText}
            />
        </Section>
    )
}