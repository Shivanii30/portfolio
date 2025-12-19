import React from "react";
import { ArrowLeft, Award, FileText, ExternalLink } from "lucide-react";
import BackgroundLayout from "../layouts/BackgroundLayout";

export default function CertificationsPage() {
  const isDark = true;

  const certifications = [
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      year: "2024",
      image: "/images/certifications/nvidia-dl.webp",
      tags: ["Deep Learning", "Neural Networks"],
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      year: "2023",
      image: "./images/Python for Data Science.jpg",
      tags: ["Python", "Data Analysis"],
    },
    {
      title: "IBM Z Xplore",
      issuer: "IBM",
      year: "2024",
      image: "/images/certifications/cert-3.webp",
      tags: ["Bash", "z/OS Unix"],
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Coursera",
      year: "2025",
      image: "/images/certifications/cert-4.webp",
      tags: ["Generative AI"],
    },
    {
      title: "Career Essentials in Gen AI",
      issuer: "Microsoft",
      year: "2025",
      image: "/images/certifications/cert-5.webp",
      tags: ["Prompt Engineering", "AI for business"],
    },
    {
      title: "Skills with LLM",
      issuer: "LinkedIn",
      year: "2025",
      image: "/images/certifications/cert-6.webp",
      tags: ["NLP", "LLM"],
    },
    {
      title: "Introduction to AI & Vector Search",
      issuer: "MongoDB",
      year: "2025",
      image: "/images/certifications/cert-7.webp",
      tags: ["Sequence Models"],
    },
    {
      title: "Meta FrontEnd Developer",
      issuer: "Coursera",
      year: "2025",
      image: "",
      tags: ["React"],
    },
  ];

  const publications = [
    {
      title: "SecureMed: Blockchain-Based E-Prescription System",
      venue: "Patent Published",
      year: "2024",
      description:
        "A secure patient management system integrating RFID, blockchain, and smart contracts to enable tamper-proof EHR access, consent management, and hospital workflow automation.",
      tags: ["RFID", "Healthcare", "Smart Contracts"],
      links: {
        pdf: "https://patents.vakilsearch.com/securemed/202421074977",
      },
    },
    {
      title:
        "BrightBox: Rooftop Solar Potential Estimation using Computer Vision",
      venue: "IEEE COMP-SIF",
      year: "2025",
      description:
         "An intelligent geospatial portal combining satellite imagery and deep learning to assess rooftop solar feasibility for urban energy planning",
      tags: ["Computer Vision", "Sustainability", "IEEE"],
      links: {
        pdf: "https://doi.org/10.1109/COMP-SIF65618.2025.10969963",
        doi: "https://doi.org/10.1109/COMP-SIF65618.2025.10969963",
      },
    },
    {
      title: "Transcripto: AI-Based Meeting Transcription and Summarization ",
      venue: "JISEM",
      year: "2024",
      description:
        "Improves regional language speech recognition by fine-tuning Whisper models, significantly reducing WER and enabling scalable multilingual ASR applications.",
      tags: ["ASR", "Multilingual AI", "Whisper"],
      links: {
        pdf: "https://doi.org/10.52783/jisem.v10i42s.7880",
      },
    },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      fontFamily: "'Inter', sans-serif",
      color: isDark ? '#ffffff' : '#111827',
      background: 'transparent',
    },
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    backLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: isDark ? '#ffffff' : '#111827',
      textDecoration: 'none',
      transition: 'color 0.2s'
    },
    brandText: {
      fontWeight: 'bold',
      letterSpacing: '0.15em',
      fontSize: '0.875rem'
    },
    content: {
      paddingTop: '6rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      paddingBottom: '4rem',
      maxWidth: '72rem',
      margin: '0 auto'
    },
    mainHeading: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    section: {
      marginBottom: '5rem'
    },
    sectionHeading: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    certGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    certCard: {
      background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.5rem',
      padding: '1.25rem',
      transition: 'transform 0.2s',
    },
    certTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '0.25rem'
    },
    certMeta: {
      color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
      fontSize: '0.875rem',
      marginBottom: '0.5rem'
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    tag: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.75rem',
      borderRadius: '0.25rem',
      background: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'
    },
    divider: {
      width: '100%',
      height: '1px',
      background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(209, 213, 219, 1)',
      marginBottom: '5rem'
    },
    publicationsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    publicationCard: {
      background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      transition: 'all 0.3s'
    },
    pubTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    pubMeta: {
      color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
      fontSize: '0.875rem',
      marginBottom: '0.75rem'
    },
    pubDescription: {
      color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    linksContainer: {
      display: 'flex',
      gap: '1rem',
      fontSize: '0.875rem'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      color: isDark ? '#ffffff' : '#111827',
      textDecoration: 'none',
      transition: 'color 0.2s'
    }
  };

  const mediaStyles = `
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap");

    @media (min-width: 640px) {
      .cert-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .main-heading {
        font-size: 3rem !important;
      }
    }

    @media (min-width: 768px) {
      .main-heading {
        font-size: 3rem !important;
      }
    }

    @media (min-width: 1024px) {
      .cert-grid {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }

    .back-link:hover {
      color: ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
    }

    .cert-card:hover {
      transform: scale(1.02);
    }

    .publication-card:hover {
      transform: scale(1.01);
      background: ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'};
    }

    .link:hover {
      color: ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
    }
  `;

  return (
    <BackgroundLayout>
    <div style={styles.container}>
      <style>{mediaStyles}</style>

      {/* Header */}
      <header style={styles.header}>
        <a href="/" style={styles.backLink} className="back-link">
          <ArrowLeft size={18} />
          <span style={styles.brandText}>PORTFOLIO</span>
        </a>
      </header>

     


      {/* Content */}
      <div style={styles.content}>
         <div className="section-indicator">
            <span className="section-number">02</span>
            <div>
              <span className="section-label">Credentials</span>
              <div className="section-line" />
            </div>
          </div>

        <h1 style={styles.mainHeading} className="main-heading">
          Certifications & Publications
        </h1>

        {/* Certifications */}
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>
            <Award style={{ color: '#a855f7' }} />
            Certifications
          </h2>

          <div style={styles.certGrid} className="cert-grid">
            {certifications.map((cert, index) => (
              <div
                key={index}
                style={styles.certCard}
                className="cert-card"
              >
                <h3 style={styles.certTitle}>{cert.title}</h3>
                <p style={styles.certMeta}>
                  {cert.issuer} • {cert.year}
                </p>
                <div style={styles.tagsContainer}>
                  {cert.tags.map((tag, i) => (
                    <span key={i} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Publications */}
        <section>
          <h2 style={styles.sectionHeading}>
            <FileText style={{ color: '#3b82f6' }} />
            Publications
          </h2>

          <div style={styles.publicationsContainer}>
            {publications.map((paper, index) => (
              <div
                key={index}
                style={styles.publicationCard}
                className="publication-card"
              >
                <h3 style={styles.pubTitle}>{paper.title}</h3>
                <p style={styles.pubMeta}>
                  {paper.venue} • {paper.year}
                </p>

                <p style={styles.pubDescription}>{paper.description}</p>

                <div style={styles.tagsContainer}>
                  {paper.tags.map((tag, i) => (
                    <span key={i} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <div style={styles.linksContainer}>
                    {paper.links.pdf && (
                      <a
                        href={paper.links.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                        className="link"
                      >
                        PDF <ExternalLink size={14} />
                      </a>
                    )}
                    {paper.links.doi && (
                      <a
                        href={paper.links.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                        className="link"
                      >
                        DOI <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </BackgroundLayout>
  );

}
