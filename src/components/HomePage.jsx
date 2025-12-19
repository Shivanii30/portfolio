import React, { useEffect, useState } from "react";
import { Linkedin} from "lucide-react";

export default function HomePage() {
  //const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollBlur, setScrollBlur] = useState(0);

  /* 🔹 SCROLL LISTENER FOR BLUR */
  useEffect(() => {
    const handleScroll = () => {
      const blurValue = Math.min(window.scrollY / 80, 12); // max blur = 12px
      setScrollBlur(blurValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    container: {
      minHeight: "100vh", // allows scrolling for now
      width: "100%",
      fontFamily: "'Inter', sans-serif",
      color: "#ffffff",
      background: "transparent",
      position: "relative",
      overflowX: "hidden",
      caretColor: "transparent",
    },

    /* 🔹 BACKGROUND IMAGE */
    backgroundImage: {
      position: "fixed",
      inset: 0,
      backgroundImage: `url(${require("../images/mepfp.jpg")})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: `blur(${scrollBlur}px)`,
      transform: "scale(1.12)", // avoids blur edges
      transition: "filter 0.15s ease-out",
      zIndex: -2,
    },

    /* 🔹 OVERLAY */
    backgroundOverlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(10, 10, 20, 0.6)",
      zIndex: -1,
    },

    header: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      padding: "1rem 1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backdropFilter: "blur(6px)",
    },

    headerRight: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },

    resumeBtn: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0.75rem",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "0.5rem",
      color: "rgba(255,255,255,0.8)",
      textDecoration: "none",
    },

    socialIcon: {
      color: "rgba(255,255,255,0.8)",
    },

    menuBtn: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.6rem 1rem",
      background: "#ffffff",
      color: "#000",
      borderRadius: "0.5rem",
      cursor: "pointer",
    },

    section: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "6rem 2rem",
      maxWidth: "1100px",
      margin: "0 auto",
    },

    heading: {
      fontSize: "4rem",
      fontWeight: "800",
      marginBottom: "1rem",
    },

    description: {
      maxWidth: "32rem",
      fontSize: "1rem",
      lineHeight: "1.7",
      color: "rgba(255,255,255,0.85)",
    },
    ctaRow: {
  marginTop: "2rem",
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
},

primaryBtn: {
  padding: "0.75rem 1.75rem",
  background: "#ffffff",
  color: "#000000",
  borderRadius: "0.6rem",
  fontWeight: "600",
  fontSize: "0.9rem",
  textDecoration: "none",
  transition: "all 0.2s",
},

secondaryBtn: {
  padding: "0.75rem 1.75rem",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  color: "#ffffff",
  borderRadius: "0.6rem",
  fontWeight: "500",
  fontSize: "0.9rem",
  textDecoration: "none",
  transition: "all 0.2s",
},

  };

  return (
    <div style={styles.container}>
      {/* Background */}
      <div style={styles.backgroundImage} />
      <div style={styles.backgroundOverlay} />

      {/* Header */}
      <header style={styles.header}>
        <span style={{ letterSpacing: "0.15em", fontWeight: "bold" }}>
          PORTFOLIO
        </span>

        <div style={styles.headerRight}>
          <a
            href="https://www.linkedin.com/in/kshirsagar-shivani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={18} style={styles.socialIcon} />
          </a>

          <a
  href="https://medium.com/@kshirsagarshivani1438"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Read my Medium"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="currentColor"
    viewBox="0 0 1043.63 592.71"
    className="social-icon"
    style={styles.socialIcon}
  >
    <path d="M588.67 296.35c0 163.69-131.62 296.35-294.33 296.35S0 460.04 0 296.35 131.62 0 294.33 0s294.34 132.67 294.34 296.35Z"/>
    <path d="M914.89 296.35c0 154.06-65.81 279.38-147 279.38s-147-125.32-147-279.38 65.81-279.38 147-279.38 147 125.32 147 279.38Z"/>
    <path d="M1043.63 296.35c0 134.56-22.35 243.72-49.93 243.72s-49.89-109.16-49.89-243.72S966.11 52.63 993.7 52.63s49.93 109.16 49.93 243.72Z"/>
  </svg>
</a>

        </div>
      </header>

      {/* HERO SECTION */}
      <section style={styles.section}>
        <h1 style={styles.heading}>Hello</h1>
        <p style={styles.description}>
          I'm Shivani. I enjoy building intelligent software systems,
          exploring applied AI, and creating meaningful digital experiences
          through thoughtful design and engineering.
        </p>
        <div style={styles.ctaRow}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={styles.primaryBtn}>
        View Resume
        </a>

    <a href="/contact" style={styles.secondaryBtn}> Get in Touch
    </a>
  </div>
      </section>

      

      
    </div>
  );
}
