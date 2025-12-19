import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Award, Briefcase, Clock } from 'lucide-react';

// Import your page components
import HomePage from './HomePage';
import CertificationsPage from './CertificationsPage';
import TimelinePage from './TimelinePage';
 import ProjectsPage from './ProjectsPage';  // You'll create this

function MainPage() {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isDark = true;

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Track active section on scroll
    const handleScroll = () => {
      const sections = ['home', 'certifications', 'projects', 'timeline'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowNav(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'certifications', label: 'Credentials', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'timeline', label: 'Timeline', icon: Clock },
  ];

  const styles = {
    container: {
      position: 'relative',
      width: '100%'
    },
    floatingNav: {
      position: 'fixed',
      top: '50%',
      right: '2rem',
      transform: 'translateY(-50%)',
      zIndex: 50,
      display: showNav ? 'none' : 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    navDot: {
      width: '0.75rem',
      height: '0.75rem',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s',
      border: '2px solid',
    },
    mobileMenuBtn: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 50,
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: '50%',
      background: isDark ? '#ffffff' : '#1f2937',
      color: isDark ? '#000000' : '#ffffff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.2s',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: isDark 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
      zIndex: 100,
      display: showNav ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      animation: showNav ? 'fadeIn 0.3s ease-out' : 'none'
    },
    closeBtn: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: 'transparent',
      border: 'none',
      color: isDark ? '#ffffff' : '#111827',
      cursor: 'pointer',
      padding: '0.5rem',
      transition: 'transform 0.2s'
    },
    menuList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'center'
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '1.5rem',
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#111827',
      cursor: 'pointer',
      transition: 'all 0.3s',
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      background: 'transparent',
      border: 'none',
      width: '100%',
      maxWidth: '20rem',
      justifyContent: 'flex-start'
    },
    section: {
      minHeight: '100vh',
      width: '100%',
      position: 'relative'
    }
  };

  const mediaStyles = `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (min-width: 1024px) {
      .floating-nav {
        display: flex !important;
      }
      .mobile-menu-btn {
        display: none !important;
      }
    }

    @media (max-width: 1023px) {
      .floating-nav {
        display: none !important;
      }
    }

    .nav-dot:hover {
      transform: scale(1.3);
    }

    .mobile-menu-btn:hover {
      transform: scale(1.1);
    }

    .mobile-menu-btn:active {
      transform: scale(0.95);
    }

    .menu-item:hover {
      background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
      transform: translateX(10px);
    }

    .close-btn:hover {
      transform: rotate(90deg);
    }
  `;

  return (
    <div style={styles.container}>
      <style>{mediaStyles}</style>

      {/* Floating Navigation (Desktop) */}
      <div style={styles.floatingNav} className="floating-nav">
        {navItems.map((item) => (
          <div
            key={item.id}
            style={{
              ...styles.navDot,
              background: activeSection === item.id 
                ? (isDark ? '#ffffff' : '#111827')
                : 'transparent',
              borderColor: isDark ? '#ffffff' : '#111827',
              opacity: activeSection === item.id ? 1 : 0.4
            }}
            onClick={() => scrollToSection(item.id)}
            title={item.label}
            className="nav-dot"
          />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        style={styles.mobileMenuBtn}
        className="mobile-menu-btn"
        onClick={() => setShowNav(!showNav)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <div style={styles.mobileMenu}>
        <button
          style={styles.closeBtn}
          className="close-btn"
          onClick={() => setShowNav(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <ul style={styles.menuList}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  style={{
                    ...styles.menuItem,
                    fontWeight: activeSection === item.id ? 'bold' : '600'
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className="menu-item"
                >
                  <Icon size={24} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Page Sections */}
      <section id="home" style={styles.section}>
        <HomePage />
      </section>

      <section id="certifications" style={styles.section}>
        <CertificationsPage />
      </section>

      {/* Placeholder for Projects - Create ProjectsPage.jsx */}
      <section id="projects" style={styles.section}>
        <ProjectsPage />
      </section>

      {/* Placeholder for Timeline - Create TimelinePage.jsx */}
      <section id="timeline" style={styles.section}>
        <TimelinePage />
      </section>
    </div>
  );
}

export default MainPage;