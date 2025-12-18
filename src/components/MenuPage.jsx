import React from "react";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";

export default function MenuPage() {
  const isDark = true;

  const navigationItems = [
    {
      number: "01",
      title: "Home",
      subtitle: "Welcome & introduction",
      href: "/",
      description: "Start here",
    },
    {
      number: "02",
      title: "Credentials",
      subtitle: "Certificates & Publications",
      href: "/about",
      description: "My work",
    },
    {
      number: "03",
      title: "Projects",
      subtitle: "Featured work",
      href: "/projects",
      description: "Things I've built",
    },
    {
      number: "04",
      title: "Timeline",
      subtitle: "My journey",
      href: "/timeline",
      description: "Education & achievements",
    },
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      fontFamily: "'Inter', sans-serif",
      color: isDark ? '#ffffff' : '#111827',
      background: isDark 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
    },
    header: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      padding: '1rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
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
    resumeBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 0.75rem',
      background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      borderRadius: '0.5rem',
      transition: 'all 0.2s',
      cursor: 'pointer',
      textDecoration: 'none',
      color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    },
    mainContent: {
      paddingTop: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingBottom: '4rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    },
    contentWrapper: {
      maxWidth: '72rem',
      margin: '0 auto',
      width: '100%'
    },
    menuHeader: {
      marginBottom: '3rem'
    },
    menuTitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    menuTitle: {
      fontSize: '2.25rem',
      fontWeight: '300',
      color: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
    },
    mainHeading: {
      fontSize: '1.875rem',
      fontWeight: 'bold'
    },
    underline: {
      height: '2px',
      width: '3rem',
      background: isDark ? '#ffffff' : '#111827',
      marginTop: '0.75rem'
    },
    navGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    navCard: {
      position: 'relative',
      background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      transition: 'all 0.3s ease-out',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      overflow: 'hidden'
    },
    cardTop: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '1rem'
    },
    cardNumber: {
      fontSize: '2.25rem',
      fontWeight: '300',
      color: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
      transition: 'color 0.3s'
    },
    cardIcon: {
      color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
      transition: 'all 0.3s',
      flexShrink: 0
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      transition: 'color 0.3s'
    },
    cardSubtitle: {
      color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
      marginBottom: '0.5rem',
      transition: 'color 0.3s',
      fontSize: '0.875rem'
    },
    cardDescription: {
      fontSize: '0.75rem',
      color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
      transition: 'color 0.3s'
    },
    hoverLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: 0,
      background: isDark ? '#ffffff' : '#111827',
      transition: 'width 0.5s ease-out'
    },
    downloadSection: {
      marginTop: '4rem',
      paddingTop: '3rem',
      borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)'
    },
    downloadContent: {
      textAlign: 'center'
    },
    downloadHeading: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: isDark ? '#ffffff' : '#111827'
    },
    downloadText: {
      color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
      fontSize: '0.875rem',
      marginBottom: '1.5rem',
      maxWidth: '28rem',
      margin: '0 auto 1.5rem'
    },
    downloadBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: isDark ? '#ffffff' : '#1f2937',
      color: isDark ? '#000000' : '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      transition: 'background 0.2s',
      textDecoration: 'none',
      fontSize: '0.875rem',
      cursor: 'pointer'
    }
  };

  const mediaStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
    
    @media (min-width: 640px) {
      .header {
        padding: 1rem 1.5rem !important;
      }
      .brand-text {
        font-size: 1rem !important;
      }
      .main-content {
        padding-left: 1.5rem !important;
        padding-right: 1.5rem !important;
      }
      .menu-header {
        margin-bottom: 4rem !important;
      }
      .menu-title-wrapper {
        margin-bottom: 1.5rem !important;
      }
      .menu-title {
        font-size: 3.75rem !important;
      }
      .main-heading {
        font-size: 2.25rem !important;
      }
      .underline {
        width: 4rem !important;
        margin-top: 1rem !important;
      }
      .nav-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 2rem !important;
      }
      .nav-card {
        padding: 2rem !important;
      }
      .card-top {
        margin-bottom: 1.5rem !important;
      }
      .card-number {
        font-size: 3rem !important;
      }
      .card-title {
        font-size: 1.5rem !important;
      }
      .card-subtitle {
        font-size: 1rem !important;
        margin-bottom: 0.75rem !important;
      }
      .card-description {
        font-size: 0.875rem !important;
      }
      .download-section {
        margin-top: 5rem !important;
      }
      .download-heading {
        font-size: 1.25rem !important;
      }
      .download-btn {
        padding: 0.75rem 2rem !important;
        font-size: 1rem !important;
      }
      .resume-text {
        display: inline !important;
      }
    }

    @media (min-width: 768px) {
      .main-content {
        padding-left: 4rem !important;
        padding-right: 4rem !important;
      }
      .menu-title {
        font-size: 4.5rem !important;
      }
      .main-heading {
        font-size: 3.75rem !important;
      }
      .nav-grid {
        gap: 3rem !important;
      }
      .card-number {
        font-size: 3.75rem !important;
      }
      .card-title {
        font-size: 1.875rem !important;
      }
    }

    .resume-text {
      display: none;
    }

    .back-link:hover {
      color: ${isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
    }

    .resume-btn:hover {
      background: ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'};
    }

    .nav-card:hover {
      transform: scale(1.05);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      background: ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'};
      border-color: ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'};
    }

    .nav-card:hover .card-number {
      color: ${isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
    }

    .nav-card:hover .card-icon {
      color: ${isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
      transform: scale(1.1);
    }

    .nav-card:hover .card-title {
      color: ${isDark ? '#ffffff' : '#000000'};
    }

    .nav-card:hover .card-subtitle {
      color: ${isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
    }

    .nav-card:hover .card-description {
      color: ${isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
    }

    .nav-card:hover .hover-line {
      width: 100%;
    }

    .download-btn:hover {
      background: ${isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(31, 41, 55, 0.9)'};
    }
  `;

  return (
    <div style={styles.container}>
      <style>{mediaStyles}</style>

      {/* Header */}
      <header style={styles.header} className="header">
        <a
          href="/"
          style={styles.backLink}
          className="back-link"
        >
          <ArrowLeft size={18} />
          <span style={styles.brandText} className="brand-text">
            PORTFOLIO
          </span>
        </a>
        <a
          href="/resume.pdf"
          download
          style={styles.resumeBtn}
          className="resume-btn"
        >
          <Download size={16} />
          <span className="resume-text" style={{ fontSize: '0.875rem' }}>
            Resume
          </span>
        </a>
      </header>

      {/* Main content */}
      <div style={styles.mainContent} className="main-content">
        <div style={styles.contentWrapper}>
          {/* Menu header */}
          <div style={styles.menuHeader} className="menu-header">
            <div style={styles.menuTitleWrapper} className="menu-title-wrapper">
              <span style={styles.menuTitle} className="menu-title">
                Menu
              </span>
            </div>
            <h1 style={styles.mainHeading} className="main-heading">
              Navigation
            </h1>
            <div style={styles.underline} className="underline"></div>
          </div>

          {/* Navigation grid */}
          <div style={styles.navGrid} className="nav-grid">
            {navigationItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                style={styles.navCard}
                className="nav-card"
              >
                {/* Section number */}
                <div style={styles.cardTop} className="card-top">
                  <span style={styles.cardNumber} className="card-number">
                    {item.number}
                  </span>
                  <ExternalLink
                    size={18}
                    style={styles.cardIcon}
                    className="card-icon"
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 style={styles.cardTitle} className="card-title">
                    {item.title}
                  </h2>
                  <p style={styles.cardSubtitle} className="card-subtitle">
                    {item.subtitle}
                  </p>
                  <p style={styles.cardDescription} className="card-description">
                    {item.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div style={styles.hoverLine} className="hover-line"></div>
              </a>
            ))}
          </div>

          {/* Download resume section */}
          <div style={styles.downloadSection} className="download-section">
            <div style={styles.downloadContent}>
              <h3 style={styles.downloadHeading} className="download-heading">
                Download My Resume
              </h3>
              <p style={styles.downloadText}>
                Get a comprehensive overview of my experience, skills, and
                achievements in PDF format.
              </p>
              <a
                href="/resume.pdf"
                download
                style={styles.downloadBtn}
                className="download-btn"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}