import { ArrowLeft, Github, Download } from "lucide-react";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Part Number Recognition System (Under NDA)",
      description:
        "Developed a production-ready FastAPI backend and contributed to training a Vision Transformer (ViT) model for recognizing printed industrial part numbers, culminating in a live demo to an international jury.",
      tags: [
        "FastAPI",
        "Vision Transformer",
        "Computer Vision",
        "Model Serving",
      ],
      github: "",
    },
    {
      title: "Real-Time Passenger Count System",
      description:
        "Built backend services and a full-stack dashboard to visualize real-time passenger data, integrating IoT sensor inputs with analytics using React, Flask, and MongoDB.",
      tags: ["React", "Flask", "MongoDB", "IoT", "Data Visualization"],
      github: "https://github.com/palash27114/ISA-Ingenious-Hackathon",
    },
    {
      title: "Telegram Contract Analysis Bot",
      description:
        "Developed an AI-powered Telegram bot to automate contract and SOW analysis, extracting legal clauses and compliance risks and reducing manual review time by 50%.",
      tags: ["Python", "NLP", "Telegram Bot", "spaCy", "NLTK"],
      github: "https://github.com/Shivanii30/Telegram-Contract-Bot",
    },
    {
      title: "ClickShare: Wi-Fi File Sharing System",
      description:
        "Created a local Wi-Fi-based file sharing system with Django REST Framework and a responsive frontend, supporting seamless uploads and bulk zip downloads.",
      tags: ["Django REST", "Python", "JavaScript", "File Sharing"],
      github: "https://github.com/Shivanii30/ClickShare.git",
    },
    {
      title: "BrightBox: Estimate Solar Energy",
      description:
        "Built a computer vision-based tool to estimate rooftop solar potential using satellite radiation data, OpenCV rooftop detection, and NASA POWER API integration.",
      tags: ["Computer Vision", "OpenCV", "NASA API", "Sustainability"],
      github: "https://github.com/Shivanii30/brightbox-solar-energy",
    },
  ];

  return (
    <div className="projects-page">
      {/* Header */}
      <header className="projects-header">
        <a href="/" className="back-link">
          <ArrowLeft size={18} />
          <span>PORTFOLIO</span>
        </a>

        <a href="/resume.pdf" download className="resume-btn">
          <Download size={16} />
          <span>Resume</span>
        </a>
      </header>

      {/* Main */}
      <main className="projects-content">
        <div className="container">
          {/* Section Indicator */}
          <div className="section-indicator">
            <span className="section-number">03</span>
            <div>
              <span className="section-label">Projects</span>
              <div className="section-line" />
            </div>
          </div>

          <h1 className="page-title">My Work</h1>
          <p className="page-subtitle">
            A collection of projects demonstrating my experience in backend
            systems, AI/ML applications, computer vision, and full-stack
            development.
          </p>

          {/* Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    className="github-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="cta">
            <p>Interested in my academic and professional journey?</p>
            <a href="/timeline" className="cta-btn">
              View My Journey
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
