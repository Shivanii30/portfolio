import React from "react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import BackgroundLayout from "../layouts/BackgroundLayout";

export default function ContactPage() {
  const colors = {
    textPrimary: "#F4F1EC",      // clear warm white
    textSecondary: "#D8D2C9",    // readable muted text
    textMuted: "#B9B2A8",        // subtle footer text
    accent: "#C47A63",           // copper accent
    cardBg: "rgba(230, 225, 218, 0.14)",
    cardBorder: "rgba(230, 225, 218, 0.28)",
    itemBg: "rgba(255,255,255,0.04)",
    itemBorder: "rgba(255,255,255,0.12)",
    itemHoverBg: "rgba(214, 198, 178, 0.22)",
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 1.5rem",
      fontFamily: "'Inter', sans-serif",
      color: colors.textPrimary,
    },

    card: {
      width: "100%",
      maxWidth: "520px",
      background: colors.cardBg,
      border: `1px solid ${colors.cardBorder}`,
      borderRadius: "1.25rem",
      padding: "2.75rem 2.5rem",
      backdropFilter: "blur(14px)",
      boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
      textAlign: "center",
    },

    heading: {
      fontSize: "2.2rem",
      fontWeight: "800",
      letterSpacing: "-0.02em",
      marginBottom: "0.5rem",
      color: colors.textPrimary,
    },

    accent: {
      width: "44px",
      height: "3px",
      background: colors.accent,
      margin: "0.9rem auto 1.5rem",
      borderRadius: "2px",
    },

    subtext: {
      fontSize: "0.95rem",
      color: colors.textSecondary,
      lineHeight: "1.65",
      marginBottom: "2.4rem",
    },

    contactList: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },

    contactItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.95rem 1.1rem",
      borderRadius: "0.8rem",
      background: colors.itemBg,
      border: `1px solid ${colors.itemBorder}`,
      textDecoration: "none",
      color: colors.textPrimary,
      transition: "all 0.25s ease",
    },

    left: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontSize: "0.9rem",
    },

    arrow: {
      opacity: 0.6,
    },

    footerText: {
      marginTop: "2.25rem",
      fontSize: "0.75rem",
      color: colors.textMuted,
    },
  };

  return (
    <BackgroundLayout>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Let’s Connect</h1>
          <div style={styles.accent} />

          <p style={styles.subtext}>
            Open to collaborations, research discussions, or a thoughtful
            conversation.
          </p>

          <div style={styles.contactList}>
            <a
              href="mailto:kshivaniofficial@gmail.com"
              style={styles.contactItem}
            >
              <div style={styles.left}>
                <Mail size={18} />
                <span>Email</span>
              </div>
              <ArrowRight size={16} style={styles.arrow} />
            </a>

            <a
              href="https://www.linkedin.com/in/kshirsagar-shivani/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactItem}
            >
              <div style={styles.left}>
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </div>
              <ArrowRight size={16} style={styles.arrow} />
            </a>

            <a
              href="https://github.com/Shivanii30"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contactItem}
            >
              <div style={styles.left}>
                <Github size={18} />
                <span>GitHub</span>
              </div>
              <ArrowRight size={16} style={styles.arrow} />
            </a>
          </div>

          
        </div>
      </div>
    </BackgroundLayout>
  );
}
