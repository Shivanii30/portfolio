import React, { useState } from "react";
import { Twitter, Linkedin, Menu, Download } from "lucide-react";

export default function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const styles = {
    container: {
      height: '100vh',
      width: '100%',
      fontFamily: "'Inter', sans-serif",
      color: isDark ? '#ffffff' : '#111827',
      background: isDark 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
      position: 'relative',
      overflow: 'hidden'
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
      alignItems: 'center',
      width: '100%'
    },
    brandText: {
      fontWeight: 'bold',
      letterSpacing: '0.15em',
      fontSize: '0.875rem'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
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
      border: 'none'
    },
    socialIcon: {
      color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      transition: 'all 0.2s ease-out',
      cursor: 'pointer'
    },
    menuBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.625rem 1rem',
      background: isDark ? '#ffffff' : '#1f2937',
      color: isDark ? '#000000' : '#ffffff',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease-out',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      textDecoration: 'none',
      border: 'none'
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '100%',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    },
    leftColumn: {
      width: '100%',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    desktopIndex: {
      display: 'none'
    },
    mobileIndex: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    indexNumber: {
      fontSize: '2.25rem',
      fontWeight: '300',
      color: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
    },
    indexText: {
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.25em',
      color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'
    },
    contentArea: {
      marginLeft: 0
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: '800',
      lineHeight: '1.2'
    },
    underline: {
      height: '2px',
      width: '3rem',
      background: isDark ? '#ffffff' : '#111827',
      margin: '1rem 0'
    },
    description: {
      maxWidth: '28rem',
      fontSize: '0.875rem',
      lineHeight: '1.6',
      color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
    },
    rightColumn: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    },
    imageContainer: {
      width: '100%',
      maxWidth: '20rem',
      position: 'relative'
    },
    loadingState: {
      width: '100%',
      aspectRatio: '3/4',
      background: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    spinner: {
      width: '2rem',
      height: '2rem',
      border: isDark ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid rgba(0, 0, 0, 0.3)',
      borderTopColor: isDark ? '#ffffff' : '#111827',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },
    errorState: {
      width: '100%',
      aspectRatio: '3/4',
      background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      border: isDark ? '2px dashed rgba(255, 255, 255, 0.2)' : '2px dashed rgba(0, 0, 0, 0.2)',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: '100%',
      objectFit: 'cover',
      borderRadius: '0.5rem',
      filter: 'grayscale(100%)',
      transition: 'opacity 0.3s',
      opacity: imageLoaded ? 1 : 0,
      position: imageLoaded ? 'relative' : 'absolute',
      inset: imageLoaded ? 'auto' : 0
    },
    verticalNav: {
      display: 'none'
    },
    mobileNav: {
      position: 'absolute',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '1rem',
      zIndex: 20
    },
    navDot: {
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '50%'
    },
    navDotActive: {
      background: isDark ? '#ffffff' : '#111827'
    },
    navDotInactive: {
      background: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
    }
  };

  // Media query styles
  const mediaStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (min-width: 768px) {
      .main-content {
        flex-direction: row !important;
      }
      .left-column {
        width: 58.333333% !important;
        padding: 0 4rem !important;
      }
      .right-column {
        width: 41.666667% !important;
        padding: 0 !important;
      }
      .desktop-index {
        display: block !important;
        position: absolute;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
      }
      .mobile-index {
        display: none !important;
      }
      .content-area {
        margin-left: 8rem !important;
      }
      .heading {
        font-size: 4.5rem !important;
      }
      .description {
        font-size: 1rem !important;
      }
      .image-container {
        width: 83.333333% !important;
      }
      .brand-text {
        font-size: 1rem !important;
      }
      .mobile-nav {
        display: none !important;
      }
    }

    @media (min-width: 1024px) {
      .left-column {
        width: 50% !important;
      }
      .right-column {
        width: 50% !important;
      }
      .desktop-index {
        left: 2rem !important;
      }
      .content-area {
        margin-left: 10rem !important;
      }
      .image-container {
        width: 66.666667% !important;
      }
      .vertical-nav {
        display: flex !important;
        flex-direction: column;
        align-items: flex-end;
        gap: 1.5rem;
        position: absolute;
        right: 2.5rem;
        top: 50%;
        transform: translateY(-50%);
        z-index: 20;
      }
    }

    @media (min-width: 640px) {
      .heading {
        font-size: 3rem !important;
      }
      .description {
        font-size: 1rem !important;
      }
      .image-container {
        width: 75% !important;
      }
      .resume-text {
        display: inline !important;
      }
    }

    .resume-text {
      display: none;
    }

    .resume-btn:hover {
      background: ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'};
    }

    .social-icon:hover {
      color: ${isDark ? '#ffffff' : '#000000'};
      transform: scale(1.1);
    }

    .social-icon:active {
      transform: scale(0.95);
    }

    .menu-btn:hover {
      background: ${isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(31, 41, 55, 0.9)'};
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }

    .nav-line {
      display: block;
      width: 2rem;
      height: 1px;
      transition: all 0.2s ease-out;
      cursor: pointer;
    }

    .nav-line:hover {
      opacity: 0.8;
    }

    .nav-line:active {
      opacity: 0.6;
    }
  `;

  return (
    <div style={styles.container}>
      <style>{mediaStyles}</style>

      {/* Header */}
      <header style={styles.header}>
        <span style={styles.brandText} className="brand-text">
          PORTFOLIO
        </span>

        <div style={styles.headerRight}>
          <a
            href="/resume.pdf"
            download
            style={styles.resumeBtn}
            className="resume-btn"
            aria-label="Download Resume"
          >
            <Download size={16} />
            <span className="resume-text" style={{ fontSize: '0.875rem' }}>
              Resume
            </span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Twitter"
          >
            <Twitter size={18} className="social-icon" style={styles.socialIcon} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin size={18} className="social-icon" style={styles.socialIcon} />
          </a>
          <a href="/menu" aria-label="Open navigation menu" style={{ textDecoration: 'none' }}>
            <div style={styles.menuBtn} className="menu-btn">
              <Menu size={20} />
              <span style={{ fontWeight: '600', fontSize: '0.875rem', letterSpacing: '0.05em' }}>MENU</span>
            </div>
          </a>
        </div>
      </header>

      {/* Main content wrapper */}
      <div style={styles.mainContent} className="main-content">
        {/* Left column */}
        <div style={styles.leftColumn} className="left-column">
          {/* Section index - desktop */}
          <div style={styles.desktopIndex} className="desktop-index">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '5.5rem', lineHeight: '1', fontWeight: '300', color: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)' }}>
                01
              </span>
              <div style={{ height: '4rem', width: '1px', background: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(156, 163, 175, 0.3)', margin: '0.75rem 0' }}></div>
              <span style={{
                letterSpacing: '0.25em',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)'
              }}>
                Welcome
              </span>
            </div>
          </div>

          {/* Mobile section indicator */}
          <div style={styles.mobileIndex} className="mobile-index">
            <span style={styles.indexNumber}>01</span>
            <span style={styles.indexText}>Welcome</span>
          </div>

          {/* Main content area */}
          <div style={styles.contentArea} className="content-area">
            <h1 style={styles.heading} className="heading">Hello</h1>
            <div style={styles.underline}></div>
            <p style={styles.description} className="description">
              Hi, I'm Shivani. I love building smart software solutions and
              learning along the way. I enjoy taking on challenges that help me
              grow, collaborating with teams, and exploring the world both
              through technology and beyond the screen.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div style={styles.rightColumn} className="right-column">
          <div style={styles.imageContainer} className="image-container">
            {/* Loading state */}
            {!imageLoaded && !imageError && (
              <div style={styles.loadingState}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={styles.spinner}></div>
                  <span style={{ color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)', fontSize: '0.875rem' }}>
                    Loading image...
                  </span>
                </div>
              </div>
            )}

            {/* Error state */}
            {imageError && (
              <div style={styles.errorState}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center', padding: '0 1.5rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    border: isDark ? '2px solid rgba(255, 255, 255, 0.2)' : '2px solid rgba(0, 0, 0, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)', fontSize: '1.125rem' }}>?</span>
                  </div>
                  <div>
                    <p style={{ color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)', fontSize: '0.875rem', fontWeight: '500' }}>
                      Add your photo
                    </p>
                    <p style={{ color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      Replace with your portrait
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actual image */}
            <img
              src="https://images.pexels.com/photos/19479555/pexels-photo-19479555.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional portrait"
              style={styles.image}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        </div>

        {/* Vertical section navigator - desktop */}
        <ul style={styles.verticalNav} className="vertical-nav">
          <li>
            <a
              href="/"
              className="nav-line"
              style={{
                display: 'block',
                width: '2rem',
                height: '1px',
                background: isDark ? '#ffffff' : '#111827'
              }}
              aria-label="Home"
            ></a>
          </li>
          <li>
            <a
              href="/about"
              className="nav-line"
              style={{
                display: 'block',
                width: '2rem',
                height: '1px',
                background: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
              }}
              aria-label="Certifications"
            ></a>
          </li>
          <li>
            <a
              href="/projects"
              className="nav-line"
              style={{
                display: 'block',
                width: '2rem',
                height: '1px',
                background: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
              }}
              aria-label="Projects"
            ></a>
          </li>
          <li>
            <a
              href="/timeline"
              className="nav-line"
              style={{
                display: 'block',
                width: '2rem',
                height: '1px',
                background: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'
              }}
              aria-label="Timeline"
            ></a>
          </li>
        </ul>

        {/* Mobile bottom navigation */}
        <div style={styles.mobileNav} className="mobile-nav">
          <a
            href="/"
            style={{ ...styles.navDot, ...styles.navDotActive }}
            aria-label="Home"
          ></a>
          <a
            href="/about"
            style={{ ...styles.navDot, ...styles.navDotInactive }}
            aria-label="Certifications"
          ></a>
          <a
            href="/projects"
            style={{ ...styles.navDot, ...styles.navDotInactive }}
            aria-label="Projects"
          ></a>
          <a
            href="/timeline"
            style={{ ...styles.navDot, ...styles.navDotInactive }}
            aria-label="Timeline"
          ></a>
        </div>
      </div>
    </div>
  );
}
