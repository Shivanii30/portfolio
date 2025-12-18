import {
  ArrowLeft,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import "./TimelinePage.css";
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
      image:
        require ('../images/vit.png'),},
    {
      year: "2025",
      type: "achievement",
      icon: Trophy,
      title: "3rd Place (Global)",
      organization: "TE Connectivity AI CUP 2025",
      description:
        "Secured third place in a global AI innovation challenge by developing an impactful AI-based solution evaluated by industry experts.",
      tags: ["Global Recognition", "Hackathon"],
      image: require ('../images/te-award.jpeg'),
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
      image: require ('../images/isa-pune-award.jpeg'),
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
      image: require ('../images/agppi.jpeg'),
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
      image: require ('../images/annum.jpg'),
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
      image:
        require ('../images/blast.jpg'),
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
      image: require ('../images/sprintaward.jpg'),
    },

    {
      year: "2020",
      type: "education",
      icon: GraduationCap,
      title: "10th Grade (ICSE)",
      organization: "ST Thomas English Medium School, Solapur",
      description:
        "Completed secondary education with a strong academic record and early interest in computing.",
      tags: ["Computer", "Programming"],
      image: require ('../images/stems.jpeg'),
        },
  ];

  return (
    <div className="timeline-page">
      <div className="timeline-container">
        <h1 className="timeline-title">My Journey</h1>

        <div className="timeline-wrapper">
          <div className="timeline-line" />

          <div className="timeline-list">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div className="timeline-item" key={index}>
                  <div className={`timeline-dot ${event.type}`}>
                    <Icon size={16} />
                  </div>

                  <div className="timeline-card">
                    <div
                      className={`timeline-card-inner ${
                        index % 2 !== 0 ? "reverse" : ""
                      }`}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="timeline-image"
                        onClick={() => setActiveImage(event.image)}
                      />

                      <div className="timeline-content">
                        <span className={`year-pill ${event.type}`}>
                          {event.year}
                        </span>

                        <h3>{event.title}</h3>
                        <p className="org">{event.organization}</p>
                        <p className="desc">{event.description}</p>

                        <div className="tags">
                          {event.tags.map((tag, i) => (
                            <span className="tag" key={i}>
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
        <div
          className="image-modal"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>
            <img src={activeImage} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
}
