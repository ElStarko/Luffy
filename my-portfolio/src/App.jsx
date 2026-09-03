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


const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

  /* Reset host page so the site fills the viewport, overriding Vite's
     default #root { max-width: 1280px; margin: 0 auto; padding: 2rem; } */
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    text-align: left;
  }

  .dp-root {
    --primary: #204944;
    --primary-dark: #163330;
    --secondary: #8C6A34;
    --accent: #B0562F;
    --dark: #171512;
    --dark-light: #262119;
    --light: #EFEAE0;
    --card: #F6F2E9;
    --gray: #5B564C;
    --gray-light: #E4DCC9;
    --shadow: 0 10px 25px rgba(23, 21, 18, 0.08);
    --shadow-lg: 0 20px 40px rgba(23, 21, 18, 0.16);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    min-height: 100vh;
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--dark);
    background: var(--light);
  }
  .dp-root * { box-sizing: border-box; }
  .dp-root h1, .dp-root h2, .dp-root h3, .dp-root h4 {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 500;
  }

  .dp-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  .dp-section { padding: 6rem 0; }

  .dp-h1 { font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.15; margin: 0 0 1.5rem; }
  .dp-h2 {
    font-size: clamp(1.8rem, 3.5vw, 2.4rem);
    margin: 0 0 1rem;
    position: relative;
    display: inline-block;
  }
  .dp-h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--secondary), var(--accent));
  }
  .dp-section-header { text-align: center; margin-bottom: 4rem; }
  .dp-section-header .dp-h2::after { left: 50%; transform: translateX(-50%); }
  .dp-subtitle { color: var(--gray); font-size: 1.1rem; margin-top: 1rem; }

  .dp-gradient-text {
    background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 60%, var(--secondary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .dp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    font-family: 'IBM Plex Sans', sans-serif;
  }
  .dp-btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    box-shadow: var(--shadow);
  }
  .dp-btn-primary:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
  .dp-btn-outline { background: transparent; border: 2px solid var(--primary); color: var(--primary); }
  .dp-btn-outline:hover { background: var(--primary); color: white; }

  .dp-header {
    position: sticky;
    top: 0;
    width: 100%;
    background: rgba(239, 234, 224, 0.92);
    backdrop-filter: blur(10px);
    z-index: 50;
    padding: 1rem 0;
    box-shadow: var(--shadow);
  }
  .dp-nav { display: flex; justify-content: space-between; align-items: center; }
  .dp-logo { font-size: 1.5rem; font-weight: 500; color: var(--dark); font-family: 'Fraunces', serif; }
  .dp-logo span { color: var(--secondary); }
  .dp-nav-links { display: flex; list-style: none; gap: 2.25rem; margin: 0; padding: 0; }
  .dp-nav-link {
    background: none;
    border: none;
    color: var(--dark);
    font-weight: 500;
    font-size: 0.95rem;
    cursor: pointer;
    padding: 0.4rem 0;
    position: relative;
    transition: var(--transition);
    font-family: 'IBM Plex Sans', sans-serif;
  }
  .dp-nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary);
    transition: var(--transition);
  }
  .dp-nav-link:hover { color: var(--secondary); }
  .dp-nav-link:hover::after { width: 100%; }
  .dp-mobile-btn { display: none; background: none; border: none; color: var(--dark); cursor: pointer; }

  .dp-hero {
    width: 100%;
    padding: 6rem 0 5rem;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #F3EFE5 0%, var(--light) 100%);
  }
  .dp-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 106, 52, 0.14) 0%, transparent 70%);
  }
  .dp-hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
    align-items: center;
    position: relative;
  }
  .dp-hero-desc { font-size: 1.1rem; line-height: 1.8; color: var(--gray); margin: 0 0 2rem; max-width: 520px; }
  .dp-hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

  .dp-panel {
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transform: perspective(1000px) rotateY(-8deg);
    transition: var(--transition);
    border: 1px solid var(--gray-light);
  }
  .dp-panel:hover { transform: perspective(1000px) rotateY(0deg); }
  .dp-code-card { background: var(--dark); color: #E4DCC9; padding: 1.5rem; font-family: 'IBM Plex Mono', monospace; font-size: 13px; line-height: 1.8; }
  .dp-code-dots { display: flex; gap: 6px; margin-bottom: 1rem; }
  .dp-code-dots span { width: 10px; height: 10px; border-radius: 50%; background: #4A443A; }

  .dp-about-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: center; }
  .dp-expertise-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 2rem; }
  .dp-expertise-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem;
    background: var(--card);
    border: 1px solid var(--gray-light);
    border-radius: 8px;
    transition: var(--transition);
    color: var(--dark);
  }
  .dp-expertise-item:hover { background: var(--primary); border-color: var(--primary); color: white; }
  .dp-about-panel {
    border-radius: 18px;
    padding: 2.5rem;
    background: linear-gradient(135deg, var(--primary), var(--dark));
    color: white;
    box-shadow: var(--shadow-lg);
  }

  .dp-skills { width: 100%; background: linear-gradient(135deg, #F3EFE5 0%, var(--light) 100%); }
  .dp-grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
  .dp-skill-card {
    background: var(--card);
    padding: 2rem;
    border-radius: 14px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid var(--gray-light);
    border-top: 4px solid var(--skill-color);
  }
  .dp-skill-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
  .dp-skill-icon { margin-bottom: 1rem; }
  .dp-skill-card h3 { margin: 0 0 0.5rem; font-size: 1.15rem; font-weight: 500; }
  .dp-skill-card p { color: var(--gray); margin: 0; font-size: 0.96rem; font-family: 'IBM Plex Sans', sans-serif; }

  .dp-project-card { background: var(--card); border-radius: 14px; overflow: hidden; box-shadow: var(--shadow); transition: var(--transition); border: 1px solid var(--gray-light); }
  .dp-project-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
  .dp-project-visual { position: relative; height: 160px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .dp-project-initials { font-size: 2.4rem; font-weight: 500; font-family: 'Fraunces', serif; color: rgba(255, 255, 255, 0.92); }
  .dp-project-overlay {
    position: absolute;
    inset: 0;
    background: rgba(23, 21, 18, 0.78);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
  }
  .dp-project-card:hover .dp-project-overlay { opacity: 1; }
  .dp-project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.1rem;
    background: var(--secondary);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .dp-project-content { padding: 1.4rem; }
  .dp-project-content h3 { margin: 0 0 0.5rem; font-size: 1.1rem; font-weight: 500; }
  .dp-project-content p { color: var(--gray); font-size: 0.94rem; margin: 0 0 1rem; font-family: 'IBM Plex Sans', sans-serif; }
  .dp-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .dp-tag {
    background: var(--light);
    color: var(--primary);
    border: 1px solid var(--gray-light);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.78rem;
    font-weight: 500;
  }

  .dp-contact { width: 100%; background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 100%); color: white; }
  .dp-contact .dp-h2 { color: white; }
  .dp-contact .dp-h2::after {
    background: linear-gradient(90deg, var(--secondary), var(--accent));
    left: 50%;
    transform: translateX(-50%);
  }
  .dp-contact-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 2.5rem;
    border-radius: 14px;
    backdrop-filter: blur(10px);
    max-width: 560px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .dp-contact-item { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; }
  .dp-contact-icon {
    width: 42px;
    height: 42px;
    background: rgba(176, 86, 47, 0.16);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
  }
  .dp-contact-item h4 { margin: 0 0 0.25rem; font-size: 0.92rem; font-weight: 500; }
  .dp-contact-item a, .dp-contact-item span { color: var(--gray-light); text-decoration: none; font-size: 0.95rem; }
  .dp-contact-item a:hover { color: var(--accent); }
  .dp-social { display: flex; gap: 1rem; margin-top: 2rem; }
  .dp-social a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    color: white;
    transition: var(--transition);
  }
  .dp-social a:hover { background: var(--secondary); transform: translateY(-3px); }

  .dp-footer { width: 100%; background: var(--dark); color: white; padding: 3rem 0 2rem; text-align: center; }
  .dp-footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    color: var(--gray-light);
    font-size: 0.88rem;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  @media (max-width: 860px) {
    .dp-nav-links { display: none; }
    .dp-mobile-btn { display: block; }
    .dp-hero-grid, .dp-about-grid { grid-template-columns: 1fr; }
  }
`;


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
      <style>{STYLES}</style>

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
