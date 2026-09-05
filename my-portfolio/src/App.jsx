import { useState } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  Handshake,
  Server,
  Database,
  Code2,
  BarChart3,
  Layers,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import "./App.css"

const CONTACT = {
  email: "iloabuchijohnson112@gmail.com",
  phone: "+234 915 706 2854",
  github: "https://github.com/ElStarko",
  linkedin: "https://www.linkedin.com/in/johnson-iloabuchi-0ab521346",
  twitter: "https://x.com/Hendrix112",
};

const EXPERTISE = [
  { icon: <Code2 size={18} />, label: "Backend architecture" },
  { icon: <Database size={18} />, label: "Database design" },
  { icon: <Server size={18} />, label: "API development" },
  { icon: <BarChart3 size={18} />, label: "Data analysis" },
];

const SKILLS = [
  {
    icon: <Code2 size={26} />,
    title: "Node.js & JavaScript",
    description: "Building scalable server-side applications with Express and RESTful APIs.",
    color: "#5C8A5A",
  },
  {
    icon: <Layers size={26} />,
    title: "Python development",
    description: "Data analysis, automation, and backend services with Python.",
    color: "#3E6B8C",
  },
  {
    icon: <Database size={26} />,
    title: "Database design",
    description: "MongoDB, PostgreSQL, and Redis with efficient data modeling.",
    color: "#204944",
  },
  {
    icon: <Server size={26} />,
    title: "API development",
    description: "RESTful APIs, real-time sockets, and service integration.",
    color: "#B0562F",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Data analysis & ML",
    description: "Pandas, scikit-learn, and model evaluation for real datasets.",
    color: "#2E7D6E",
  },
  {
    icon: <Layers size={26} />,
    title: "Full-stack frameworks",
    description: "React and Vite on the frontend, FastAPI and Express on the backend.",
    color: "#8C6A34",
  },
];

const PROJECTS = [
  {
    title: "Electoral malpractice prediction system",
    description:
      "A full-stack system for Nigerian election data: three ML models (classification, risk scoring, anomaly detection), a FastAPI + MongoDB backend, and a React dashboard.",
    tags: ["Python", "React", "FastAPI", "MongoDB", "scikit-learn"],
    initials: "EM",
    gradient: ["#204944", "#8C6A34"],
    repo: "https://github.com/ElStarko",
  },
  {
    title: "mouse_mover",
    description:
      "A human-like input simulator using quintic easing, Bezier paths, and AR(1) tremor noise, with both a GUI and a CLI.",
    tags: ["Python", "pynput"],
    initials: "MM",
    gradient: ["#3E6B8C", "#204944"],
    repo: "https://github.com/ElStarko",
  },
  {
    title: "Dwellr — student housing platform",
    description:
      "Backend for student accommodation with real-time availability, a booking flow, and payment integration.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    initials: "DW",
    gradient: ["#8C6A34", "#B0562F"],
    repo: "https://github.com/ElStarko/Dwellr",
  },
  {
    title: "Sales analytics dashboard",
    description:
      "Python data-analysis project processing sales data into interactive visualizations and reports.",
    tags: ["Python", "Pandas", "Plotly", "FastAPI"],
    initials: "SA",
    gradient: ["#204944", "#3E6B8C"],
    repo: "https://github.com/ElStarko",
  },
  {
    title: "PayMock — payment processing system",
    description:
      "A payment gateway for sending and requesting money between users, built to hold up under concurrent load without duplicate transactions.",
    tags: ["Node.js", "Socket.io", "Redis", "PostgreSQL"],
    initials: "PM",
    gradient: ["#B0562F", "#8C6A34"],
    repo: "https://github.com/ElStarko/REPLACE_ME",
  },
  {
    title: "Live chat application",
    description:
      "Embeddable real-time, room-based chat for websites and apps, with authenticated sessions.",
    tags: ["JavaScript", "Socket.io", "Node.js", "JWT"],
    initials: "LC",
    gradient: ["#2E7D6E", "#204944"],
    repo: "https://github.com/ElStarko/REPLACE_ME",
  },
];


function GithubMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function TwitterMark(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.16 4.9a4.28 4.28 0 0 0 1.32 5.71 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97 8.58 8.58 0 0 1-5.32 1.83c-.34 0-.68-.02-1.02-.06A12.11 12.11 0 0 0 8.03 21c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.37-.01-.55A8.7 8.7 0 0 0 22.46 6Z" />
    </svg>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["hero", "about", "skills", "projects", "contact"];
  const navLabels = { hero: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" };

  return (
    <div className="dp-root">
      

      <header className="dp-header">
        <div className="dp-container dp-nav">
          <div className="dp-logo">
            Johnson<span>.dev</span>
          </div>

          <ul className="dp-nav-links">
            {navItems.map((id) => (
              <li key={id}>
                <button className="dp-nav-link" onClick={() => scrollTo(`#${id}`)}>
                  {navLabels[id]}
                </button>
              </li>
            ))}
          </ul>

          <button className="dp-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="dp-container" style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "1rem" }}>
            {navItems.map((id) => (
              <button key={id} className="dp-nav-link" onClick={() => scrollTo(`#${id}`)}>
                {navLabels[id]}
              </button>
            ))}
          </div>
        )}
      </header>

      <section id="hero" className="dp-hero">
        <div className="dp-container dp-hero-grid">
          <div>
            <h1 className="dp-h1">
              <span className="dp-gradient-text">Full-Stack Developer</span>
            </h1>
            <p className="dp-hero-desc">
              I build scalable server-side solutions and extract insights from complex datasets —
              specializing in Node.js, Python, API development, and applied machine learning, most
              recently on a system for detecting electoral malpractice.
            </p>
            <div className="dp-hero-btns">
              <button className="dp-btn dp-btn-primary" onClick={() => scrollTo("#projects")}>
                View projects <ArrowRight size={18} />
              </button>
              <button className="dp-btn dp-btn-outline" onClick={() => scrollTo("#contact")}>
                Contact me <Handshake size={18} />
              </button>
            </div>
          </div>

          <div className="dp-panel">
            <div className="dp-code-card">
              <div className="dp-code-dots">
                <span />
                <span />
                <span />
              </div>
              <div>const dev = {"{"}</div>
              <div>&nbsp;&nbsp;name: <span style={{ color: "#2E7D6E" }}>'Johnson Iloabuchi'</span>,</div>
              <div>&nbsp;&nbsp;role: <span style={{ color: "#2E7D6E" }}>'Backend + ML'</span>,</div>
              <div>
                &nbsp;&nbsp;stack: [<span style={{ color: "#C98A4B" }}>'Node'</span>,{" "}
                <span style={{ color: "#C98A4B" }}>'Python'</span>, <span style={{ color: "#C98A4B" }}>'React'</span>],
              </div>
              <div>&nbsp;&nbsp;available: <span style={{ color: "#5C8A5A" }}>true</span></div>
              <div>{"}"};</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="dp-section">
        <div className="dp-container dp-about-grid">
          <div>
            <h2 className="dp-h2">About me</h2>
            <p style={{ color: "var(--gray)", fontSize: "1.02rem", lineHeight: 1.75, marginTop: "1.5rem" }}>
              My background is on the backend and data side — Node.js and Express APIs, database
              design, and real-time systems with Socket.io. That's the foundation behind a booking
              platform, a payment gateway, and a live-chat app I've built. More recently I've moved
              into applied ML for my thesis: a full electoral-malpractice detection system covering
              classification, risk scoring, and anomaly detection.
            </p>
            <div className="dp-expertise-grid">
              {EXPERTISE.map((e) => (
                <div key={e.label} className="dp-expertise-item">
                  {e.icon} {e.label}
                </div>
              ))}
            </div>
          </div>

          <div className="dp-about-panel">
            <p style={{ fontSize: "0.92rem", opacity: 0.8, margin: "0 0 0.5rem", fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Currently
            </p>
            <h3 style={{ margin: "0 0 1rem", fontSize: "1.35rem" }}>Full-stack developer, open to work</h3>
            <p style={{ fontSize: "0.96rem", lineHeight: 1.7, opacity: 0.9, margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Looking for roles where I can keep working across the data, backend, and frontend
              layers of a product.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="dp-section dp-skills">
        <div className="dp-container">
          <div className="dp-section-header">
            <h2 className="dp-h2">Technical skills</h2>
            <p className="dp-subtitle">Technologies I work with</p>
          </div>
          <div className="dp-grid-3">
            {SKILLS.map((s) => (
              <div key={s.title} className="dp-skill-card" style={{ "--skill-color": s.color }}>
                <div className="dp-skill-icon" style={{ color: s.color }}>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="dp-section">
        <div className="dp-container">
          <div className="dp-section-header">
            <h2 className="dp-h2">Featured projects</h2>
            <p className="dp-subtitle">Some of my recent work</p>
          </div>
          <div className="dp-grid-3">
            {PROJECTS.map((p) => (
              <div key={p.title} className="dp-project-card">
                <div
                  className="dp-project-visual"
                  style={{ background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
                >
                  <span className="dp-project-initials">{p.initials}</span>
                  <div className="dp-project-overlay">
                    <a className="dp-project-link" href={p.repo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> View code
                    </a>
                  </div>
                </div>
                <div className="dp-project-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="dp-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="dp-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="dp-section dp-contact">
        <div className="dp-container">
          <div className="dp-section-header">
            <h2 className="dp-h2">Get in touch</h2>
            <p className="dp-subtitle" style={{ color: "var(--gray-light)" }}>
              Open for freelance work or full-time positions
            </p>
          </div>
          <div className="dp-contact-card">
            <div className="dp-contact-item">
              <div className="dp-contact-icon">
                <Mail size={18} />
              </div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
            <div className="dp-contact-item">
              <div className="dp-contact-icon">
                <Phone size={18} />
              </div>
              <div>
                <h4>Phone</h4>
                <span>{CONTACT.phone}</span>
              </div>
            </div>
            <div className="dp-social">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinMark />
              </a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubMark />
              </a>
              <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterMark />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="dp-footer">
        <div className="dp-container">
          <div className="dp-footer-bottom">
            &copy; {new Date().getFullYear()} Johnson Iloabuchi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
