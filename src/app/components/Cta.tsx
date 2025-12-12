
import * as React from "react";
import { Section } from "@react-email/components";

type CtaProps = {
  ctaLabel?: string;
  ctaHref?: string;
  widthPx?: number;
  heightPx?: number;
};

export function Cta({
  ctaLabel,
  ctaHref,
  widthPx = 280,
  heightPx = 42,
}: CtaProps) {
  const label = (ctaLabel ?? "").trim() || "Read more";
  const href = (ctaHref ?? "").trim() || "https://facilities.utk.edu/";

  // Visual tokens
  const bg = "#ffffff";
  const borderColor = "#ff8200";
  const textColor = "#0078d4";
  const fontFamily = "'Montserrat', Helvetica, Arial, sans-serif"; // used in non-MSO
  const fontSize = 16;
  const fontWeight = 600;
  const borderRadius = 8;
  const paddingY = 12;
  const paddingX = 20;

  // VML corner rounding as % of height (cap at 50)
  const arcsizePct = Math.min(50, Math.round((borderRadius / heightPx) * 100));

  return (
    <Section style={{ fontFamily, textAlign: "center", paddingBottom: 30 }}>
      
        <table role="presentation" border={0} cellPadding={0} cellSpacing={0} align="center" style={{ margin: "auto" }}>
        <tbody>
            <tr>
            <td style={{ backgroundColor: "#ffffff", border: "3px solid #ff8200", borderRadius: '8px', padding: "12px 20px", textAlign: "center" }}>
                <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#0078d4",
                    textDecoration: "none",
                    display: "inline-block",
                }}
                >
                {label}
                </a>
            </td>
            </tr>
        </tbody>
        </table>

    </Section>
  );
}
