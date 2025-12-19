import React, { useState } from "react";
import { ArrowLeft, GraduationCap, Trophy} from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundLayout from "../layouts/BackgroundLayout";
import Footer from "./Footer";
export default function TimelinePage() {
  const [activeImage, setActiveImage] = useState(null);

  const timelineEvents = [
    {
      year: "2026",
      type: "education",
      icon: GraduationCap,
      title: "B.Tech in Artificial Intelligence and Data Science",
      organization: "Vishwakarma Institute of Technology, Pune",
      description:
        "Currently pursuing a bachelor's degree with a strong focus on machine learning, computer vision, and data-driven system design. CGPA: 8.59.",
      tags: ["AIDS", "SDE"],
      image: require("../images/vit.png"),
    },
    {
      year: "2025",
      type: "achievement",
      icon: Trophy,
      title: "3rd Place (Global)",
      organization: "TE Connectivity AI CUP 2025",
      description:
        "Secured third place in a global AI innovation challenge by developing an impactful AI-based solution evaluated by industry experts.",
      tags: ["Global Recognition", "Hackathon"],
      image: require("../images/te-award.jpeg"),
    },
    {
      year: "2024",
      type: "achievement",
      icon: Trophy,
      title: "Winner – Ingenious Hackathon",
      organization: "ISA Pune Section, VIT",
      description:
        "Won first place for developing a technology-driven solution addressing real-world challenges through innovation and teamwork.",
      tags: ["Hackathon", "Innovation", "Teamwork"],
      image: require("../images/isa-pune-award.jpeg"),
    },
    {
      year: "2023",
      type: "education",
      icon: GraduationCap,
      title: "Diploma in Computer Engineering",
      organization: "A.G. Patil Polytechnic Institute, Solapur",
      description:
        "Graduated with distinction, building strong foundations in programming, databases, and software engineering.",
      tags: ["Computer Engineering", "Programming"],
      image: require("../images/agppi.jpeg"),
    },
    {
      year: "2023",
      type: "achievement",
      icon: Trophy,
      title: "Second Prize – Paper Presentation",
      organization: "AGPPI Annum 2K24",
      description:
        "Secured second prize for presenting a technical research paper, recognized for clarity, innovation, and practical relevance.",
      tags: ["Research", "Paper Presentation"],
      image: require("../images/annum.jpg"),

    },
    {
      year: "2023",
      type: "achievement",
      icon: Trophy,
      title: "First Prize – State Level Paper Presentation",
      organization: "TechnoBlast 2023",
      description:
        "Awarded first prize for a technical research paper presented at a state-level academic competition.",
      tags: ["Research", "Presentation"],
      image : require ("../images/blast.jpg"),
    },
    {
      year: "2023",
      type: "achievement",
      icon: Trophy,
      title: "First Prize – State Level Paper Presentation",
      organization: "TechnoSprint 2023",
      description:
        "Awarded first prize for a technical research paper presented at a state-level academic competition.",
      tags: ["Research", "Presentation"],
      image: require("../images/sprintaward.jpg"),
    },
    {
      year: "2020",
      type: "education",
      icon: GraduationCap,
      title: "10th Grade (ICSE)",
      organization: "St. Thomas English Medium School, Solapur",
      description:
        "Completed secondary education with a strong academic record and early interest in computing.",
      tags: ["Computer", "Programming"],
      image: require ("../images/stems.jpeg"),
    },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      //background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      color: "#ffffff",
      fontFamily: "'Inter', sans-serif",
    },
    header: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      padding: "1rem 1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    backLink: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: "#ffffff",
      textDecoration: "none",
      transition: "color 0.2s",
    },
    brandText: {
      fontWeight: "700",
      letterSpacing: "0.15em",
      fontSize: "0.875rem",
    },
    resumeBtn: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0.75rem",
      background: "rgba(255, 255, 255, 0.08)",
      borderRadius: "0.6rem",
      color: "#e5e5e5",
      textDecoration: "none",
      transition: "background 0.2s",
      fontSize: "0.85rem",
    },
    timelineContainer: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "6rem 1.5rem 4rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "3rem",
    },
    timelineWrapper: {
      position: "relative",
    },
    timelineLine: {
      position: "absolute",
      left: "16px",
      top: 0,
      bottom: 0,
      width: "1px",
      background: "rgba(255, 255, 255, 0.1)",
    },
    timelineList: {
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem",
    },
    timelineItem: {
      position: "relative",
      paddingLeft: "3.5rem",
    },
    timelineDot: {
      position: "absolute",
      left: 0,
      top: "0.5rem",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      border: "2px solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
    },
    timelineDotEducation: {
      borderColor: "#60a5fa",
      background: "rgba(96, 165, 250, 0.15)",
      color: "#60a5fa",
    },
    timelineDotAchievement: {
      borderColor: "#fbbf24",
      background: "rgba(251, 191, 36, 0.15)",
      color: "#fbbf24",
    },
    card: {
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "0.75rem",
      padding: "1.25rem",
      backdropFilter: "blur(6px)",
    },
    cardInner: {
      display: "flex",
      gap: "1.5rem",
    },
    cardInnerReverse: {
      display: "flex",
      gap: "1.5rem",
      flexDirection: "row-reverse",
    },
    image: {
      width: "96px",
      height: "96px",
      borderRadius: "0.75rem",
      objectFit: "cover",
      filter: "grayscale(100%)",
      cursor: "pointer",
      transition: "filter 0.3s",
      flexShrink: 0,
    },
    content: {
      flex: 1,
    },
    yearPill: {
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      fontSize: "0.7rem",
      fontWeight: "600",
      borderRadius: "999px",
      marginBottom: "0.5rem",
    },
    yearPillEducation: {
      background: "rgba(96, 165, 250, 0.15)",
      color: "#60a5fa",
    },
    yearPillAchievement: {
      background: "rgba(251, 191, 36, 0.15)",
      color: "#fbbf24",
    },
    contentTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      marginBottom: "0.25rem",
    },
    org: {
      fontSize: "0.85rem",
      color: "rgba(255, 255, 255, 0.6)",
      marginBottom: "0.5rem",
    },
    desc: {
      fontSize: "0.9rem",
      color: "rgba(255, 255, 255, 0.75)",
      marginBottom: "0.75rem",
      lineHeight: "1.5",
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
    },
    tag: {
      fontSize: "0.7rem",
      padding: "0.25rem 0.55rem",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "0.4rem",
    },
    modal: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
    },
    modalContent: {
      position: "relative",
      background: "#111",
      padding: "1rem",
      borderRadius: "1rem",
      maxWidth: "600px",
    },
    modalImage: {
      maxWidth: "100%",
      maxHeight: "70vh",
      borderRadius: "0.75rem",
    },
    closeBtn: {
      position: "absolute",
      top: "-12px",
      right: "-12px",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      background: "#000",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <BackgroundLayout>
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <Link to="/" style={styles.backLink}>
          <ArrowLeft size={18} />
          <span style={styles.brandText}>PORTFOLIO</span>
        </Link>

      </header>

      

      <div style={styles.timelineContainer}>
        <div style={styles.content}>
         <div className="section-indicator">
            <span className="section-number">04</span>
            <div>
              <span className="section-label">Education</span>
              <div className="section-line" />
            </div>
          </div>
      </div>
        <h1 style={styles.title}>My Journey</h1>

        <div style={styles.timelineWrapper}>
          <div style={styles.timelineLine} />

          <div style={styles.timelineList}>
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEducation = event.type === "education";
              const isReverse = index % 2 !== 0;

              return (
                <div style={styles.timelineItem} key={index}>
                  <div
                    style={{
                      ...styles.timelineDot,
                      ...(isEducation
                        ? styles.timelineDotEducation
                        : styles.timelineDotAchievement),
                    }}
                  >
                    <Icon size={16} />
                  </div>

                  <div style={styles.card}>
                    <div
                      style={
                        isReverse
                          ? styles.cardInnerReverse
                          : styles.cardInner
                      }
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        style={styles.image}
                        onClick={() => setActiveImage(event.image)}
                      />

                      <div style={styles.content}>
                        <span
                          style={{
                            ...styles.yearPill,
                            ...(isEducation
                              ? styles.yearPillEducation
                              : styles.yearPillAchievement),
                          }}
                        >
                          {event.year}
                        </span>

                        <h3 style={styles.contentTitle}>{event.title}</h3>
                        <p style={styles.org}>{event.organization}</p>
                        <p style={styles.desc}>{event.description}</p>

                        <div style={styles.tags}>
                          {event.tags.map((tag, i) => (
                            <span style={styles.tag} key={i}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div style={styles.modal} onClick={() => setActiveImage(null)}>
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={styles.closeBtn}
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
            <img src={activeImage} alt="Preview" style={styles.modalImage} />
          </div>
        </div>
      )}
      <Footer />
    </div>
    </BackgroundLayout>
  );
}
