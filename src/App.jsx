import { ArrowRight, ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./App.css";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 1 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.26V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_971xadw",
        "template_ju8wyyp",
        e.target,
        {
          publicKey: "Jbfhimev-bgl78MkZ",
        }
      )
      .then(
        () => {
          alert("Message sent successfully! Thank you for reaching out.");
          e.target.reset();
          setSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">
              TSM<span>.</span>
            </span>
            <span className="brand-name"></span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="active" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#achievements" onClick={closeMenu}>Achievements</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="connect">
            Let's Connect
            <ArrowRight size={15} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>


      {/* =====================================================
          HOME
      ===================================================== */}

      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <p className="eyebrow"></p>

            <p className="hello">Hello, I'm</p>

            <h1>
              Teerthashree
              <br />
              <span>Subedar Mutt</span>
            </h1>

            <p className="role">
              3rd Year Undergraduate · CSE (IoT)
            </p>

            <h2>
              Building with curiosity.
              <br />
              <span>Creating with purpose.</span>
            </h2>

            <p className="description">
              Computer Science student focused on Full Stack Development,
              Artificial Intelligence, IoT, and building practical
              real-world solutions.
            </p>

            <div className="actions">

              <a href="#projects" className="primary-button">
                Explore My Work
                <ArrowRight size={16} />
              </a>

              <a href="/resume.pdf" className="resume-button" download>
                Download Resume
                <ArrowDown size={15} />
              </a>

            </div>

          </div>


          <div className="hero-visual">

            <div className="photo-wrapper">
              <img
                src="/profile.jpg"
                alt="Teerthashree Subedar Mutt"
              />
            </div>

            <div className="photo-bottom">

              <div className="photo-label">
                <strong></strong>
                <span></span>
              </div>

              <div className="socials">

                <a
                  href="https://github.com/shzz09"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>

                <a
                  href="https://linkedin.com/in/teerthashree1209"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="portfolio-robot" aria-hidden="true">
          <div className="robot-bubble">Hi, I’m Teerthashree Subedar Mutt</div>
          <div className="robot-body">
            <div className="robot-antenna"></div>
            <div className="robot-head">
              <span className="robot-eye"></span>
              <span className="robot-eye"></span>
              <span className="robot-smile"></span>
            </div>
            <div className="robot-torso"><span></span><span></span></div>
            <div className="robot-arm robot-arm-left"></div>
            <div className="robot-arm robot-arm-right"></div>
            <div className="robot-leg robot-leg-left"></div>
            <div className="robot-leg robot-leg-right"></div>
          </div>
        </div>

        <div className="scroll">
          SCROLL
        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="about-section">

        <div className="about-container">

          <div className="about-top">

            <p className="about-label">
              01 / ABOUT
            </p>

            <h2 className="about-heading">
              A little about
              <span> who I am.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-card">

              <div className="about-card-number">
                01
              </div>

              <h3>About Me</h3>

              <p>
                I’m a 3rd-year Computer Science student specializing in IoT,
                passionate about exploring technology and building practical
                solutions. My interests span Full Stack Development,
                Artificial Intelligence, and IoT.
              </p>

              <p>
                I enjoy learning through projects, solving problems, and
                turning ideas into meaningful applications.
              </p>

            </div>


            <div className="about-card">

              <div className="about-card-number">
                02
              </div>

              <h3>Education</h3>

              <p className="education-main">
                B.Tech / Undergraduate
              </p>

              <p className="education-sub">
                Computer Science & Engineering (IoT)
              </p>

              <div className="education-tags">
                <span>3rd Year</span>
                <span>GM University</span>
                <span>Davangere</span>
              </div>

            </div>


            <div className="about-card">

              <div className="about-card-number">
                03
              </div>

              <h3>Career Goal</h3>

              <p>
                My goal is to build a strong career in software development
                by continuously improving my technical skills and exploring
                emerging technologies.
              </p>

              <p>
                I aspire to create innovative, practical solutions that solve
                real-world problems and make a meaningful impact.
              </p>

            </div>


            <div className="about-card">

              <div className="about-card-number">
                04
              </div>

              <h3>What interests me</h3>

              <div className="interest-list">

                <div className="interest-item">
                  <span className="interest-dot"></span>
                  <strong>Full Stack Development</strong>
                </div>

                <div className="interest-item">
                  <span className="interest-dot"></span>
                  <strong>Artificial Intelligence</strong>
                </div>

                <div className="interest-item">
                  <span className="interest-dot"></span>
                  <strong>IoT & Smart Technologies</strong>
                </div>

                <div className="interest-item">
                  <span className="interest-dot"></span>
                  <strong>Problem Solving</strong>
                </div>

                <div className="interest-item">
                  <span className="interest-dot"></span>
                  <strong>Innovation & Product Building</strong>
                </div>

              </div>

            </div>

          </div>


          <a href="#projects" className="about-next">
            Explore my work
            <ArrowDown size={15} />
          </a>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="projects" className="projects-section">

        <div className="projects-container">

          <div className="projects-top">

            <div>
              <p className="projects-label">
                02 / PROJECTS
              </p>

              <h2 className="projects-heading">
                My <span>Projects.</span>
              </h2>
            </div>

            <p className="projects-intro">
              Turning ideas into practical solutions through technology.
            </p>

          </div>


          <div className="projects-grid">

            <article className="project-card">

              <div className="project-number">
                01
              </div>

              <div className="project-content">

                <p className="project-type">
                  AGRICULTURE · AI · IoT
                </p>

                <h3>PolliSense AI</h3>

                <p className="project-description">
                  A smart autonomous pollination system designed to support
                  precision agriculture through intelligent monitoring and
                  automated pollination.
                </p>

                <div className="project-tech">
                  <span>ESP32</span>
                  <span>AI Camera</span>
                  <span>IoT</span>
                  <span>Automation</span>
                </div>

              </div>

              <div className="project-action">

                <a
                  href="https://drive.google.com/file/d/1zS-GjN4qcF1wQXrRcXD0UPEvI4dnfReL/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <ArrowRight size={15} />
                </a>

              </div>

            </article>


            <article className="project-card">

              <div className="project-number">
                02
              </div>

              <div className="project-content">

                <p className="project-type">
                  AI · CAREER · ANALYTICS
                </p>

                <h3>Skill Gap Analysis</h3>

                <p className="project-description">
                  An AI-focused solution that helps identify skill gaps by
                  comparing existing skills with the requirements of desired
                  career roles.
                </p>

                <div className="project-tech">
                  <span>Python</span>
                  <span>AI</span>
                  <span>Web</span>
                  <span>Analytics</span>
                </div>

              </div>

              <div className="project-action">

                <a
                  href="https://drive.google.com/file/d/1_sctn8FnD_2Q8n0YKRqRuT_9auigCksD/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <ArrowRight size={15} />
                </a>

              </div>

            </article>


            <article className="project-card">

              <div className="project-number">
                03
              </div>

              <div className="project-content">

                <p className="project-type">
                  FULL STACK · CRM
                </p>

                <h3>MiniCRM</h3>

                <p className="project-description">
                  A lightweight customer relationship management application
                  for managing customer information and organizing business
                  interactions through a clean web interface.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>JavaScript</span>
                </div>

              </div>

              <div className="project-action">

                <a
                  href="https://minicrm-1y5p.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                  <ArrowRight size={15} />
                </a>

              </div>

            </article>


            <article className="project-card">

              <div className="project-number">
                04
              </div>

              <div className="project-content">

                <p className="project-type">
                  AUTOMATION · IoT · SYSTEM
                </p>

                <h3>Tap 2 Print</h3>

                <p className="project-description">
                  A convenient print-request concept focused on making document
                  printing simpler through a quick and user-friendly workflow.
                </p>

                <div className="project-tech">
                  <span>IoT</span>
                  <span>Web</span>
                  <span>Automation</span>
                  <span>System Design</span>
                </div>

              </div>

              <div className="project-action">

                <a
                  href="https://github.com/shzz09/tap2print.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <ArrowRight size={15} />
                </a>

              </div>

            </article>


            <article className="project-card">

              <div className="project-number">
                05
              </div>

              <div className="project-content">

                <p className="project-type">
                  SAFETY · WEB · APPLICATION
                </p>

                <h3>Proactive Women Safety Application</h3>

                <p className="project-description">
                  A technology-driven women safety application focused on
                  providing proactive support and safety-oriented features
                  through a user-friendly digital platform.
                </p>

                <div className="project-tech">
                  <span>Web</span>
                  <span>Safety</span>
                  <span>Application</span>
                  <span>Technology</span>
                </div>

              </div>

              <div className="project-action">

                <a
                  href="https://github.com/shzz09/Women-safety-pannel.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <ArrowRight size={15} />
                </a>

              </div>

            </article>

          </div>


          <div className="projects-bottom">
            <span>05 PROJECTS</span>

            <a href="#skills">
              Explore my skills
              <ArrowDown size={14} />
            </a>
          </div>

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section id="skills" className="skills-section">

        <div className="skills-container">

          <div className="skills-top">

            <div>
              <p className="skills-label">
                03 / SKILLS
              </p>

              <h2 className="skills-heading">
                Skills & <span>Expertise.</span>
              </h2>
            </div>

            <p className="skills-intro">
              The skills and technologies I use to learn, build, and grow.
            </p>

          </div>


          <div className="skills-layout">

            <div className="technical-skills">

              <div className="skills-section-title">
                <span className="skills-line"></span>
                <p>TECHNICAL COMPETENCIES</p>
              </div>


              <div className="skill-category-grid">

                <article className="skill-category skill-featured">

                  <div className="skill-category-top">
                    <span className="skill-index">01</span>
                    <span className="skill-symbol">&lt;/&gt;</span>
                  </div>

                  <h3>Programming Languages</h3>

                  <div className="skill-chips">
                    <span>C</span>
                    <span>Python</span>
                    <span>Java</span>
                  </div>

                </article>


                <article className="skill-category">

                  <div className="skill-category-top">
                    <span className="skill-index">02</span>
                    <span className="skill-symbol">UI</span>
                  </div>

                  <h3>Frontend Development</h3>

                  <div className="skill-chips">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>React</span>
                  </div>

                </article>


                <article className="skill-category">

                  <div className="skill-category-top">
                    <span className="skill-index">03</span>
                    <span className="skill-symbol">DB</span>
                  </div>

                  <h3>Databases</h3>

                  <div className="skill-chips">
                    <span>MySQL</span>
                    <span>MongoDB</span>
                  </div>

                </article>


                <article className="skill-category skill-wide">

                  <div className="skill-category-top">
                    <span className="skill-index">04</span>
                    <span className="skill-symbol">IoT</span>
                  </div>

                  <h3>IoT & Emerging Technologies</h3>

                  <div className="skill-chips">
                    <span>Internet of Things (IoT)</span>
                    <span>Embedded Systems</span>
                    <span>Generative AI</span>
                  </div>

                </article>


                <article className="skill-category skill-wide">

                  <div className="skill-category-top">
                    <span className="skill-index">05</span>
                    <span className="skill-symbol">DEV</span>
                  </div>

                  <h3>Development Tools</h3>

                  <div className="skill-chips">
                    <span>GitHub</span>
                    <span>VS Code</span>
                    <span>Antigravity</span>
                  </div>

                </article>

              </div>

            </div>


            <aside className="soft-skills-panel">

              <div className="soft-top">

                <div>
                  <span className="soft-number">06</span>
                  <p className="soft-label">PERSONAL EDGE</p>
                </div>

                <span className="soft-mark">+</span>

              </div>

              <h3>
                Soft
                <br />
                <span>Skills.</span>
              </h3>

              <p className="soft-description">
                Beyond technical knowledge, I value the people and
                problem-solving skills that help turn ideas into results.
              </p>

              <div className="soft-list">

                <div className="soft-item">
                  <span>01</span>
                  <strong>Leadership & Team Management</strong>
                  <ArrowRight size={14} />
                </div>

                <div className="soft-item">
                  <span>02</span>
                  <strong>Presentation & Public Speaking</strong>
                  <ArrowRight size={14} />
                </div>

                <div className="soft-item">
                  <span>03</span>
                  <strong>Adaptability</strong>
                  <ArrowRight size={14} />
                </div>

              </div>

            </aside>

          </div>


          <div className="skills-bottom">

            <span>TECHNICAL + PERSONAL</span>

            <a href="#achievements">
              Explore my achievements
              <ArrowDown size={14} />
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section id="achievements" className="projects-section">

        <div className="projects-container achievements-enhanced">

          <div className="achievement-trophy" aria-hidden="true">
            <div className="trophy-glow"></div>
            <div className="trophy-cup">
              <div className="trophy-handle trophy-handle-left"></div>
              <div className="trophy-handle trophy-handle-right"></div>
              <div className="trophy-bowl"></div>
              <div className="trophy-stem"></div>
              <div className="trophy-base"></div>
            </div>
            <span className="trophy-star">✦</span>
          </div>

          <div className="achievements-content">
          <div className="projects-top">

            <div>
              <p className="projects-label">
                04 / ACHIEVEMENTS
              </p>

              <h2 className="projects-heading">
                Achievements & <span>Recognition.</span>
              </h2>
            </div>

            <p className="projects-intro">
              Milestones, experiences, and recognitions from my academic and
              professional journey.
            </p>

          </div>


          <div className="projects-grid">

            {/* SWAVIK */}
            <article className="project-card">

              <div className="project-number">
                01
              </div>

              <div className="project-content">

                <p className="project-type">
                  INTERNSHIP · AI · PROJECT
                </p>

                <h3>Swavik Internship</h3>

                <p className="project-description">
                  Internship experience involving contribution to the
                  AI Requirement Clarification Assistant project.
                </p>

                <div className="project-tech">
                  <span>Internship</span>
                  <span>AI</span>
                  <span>Project Work</span>
                </div>

              </div>

              <div className="project-action">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <a
                    href="https://drive.google.com/file/d/11DpIP8LteQd2ObR136Sa_Z9UwHIPL9fn/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Offer Letter
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1L-IdBVpqKK50s1RrI8tDiz9r9ssIAqi6/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate 02
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

            </article>


            {/* GFG */}
            <article className="project-card">

              <div className="project-number">
                02
              </div>

              <div className="project-content">

                <p className="project-type">
                  LEADERSHIP · COMMUNITY
                </p>

                <h3>GeeksforGeeks — Campus Co-Head</h3>

                <p className="project-description">
                  Appointed as Campus Co-Head of GeeksforGeeks after
                  successfully clearing the selection examination and
                  interview process.
                </p>

                <div className="project-tech">
                  <span>Leadership</span>
                  <span>Community</span>
                  <span>Campus</span>
                </div>

              </div>

              <div className="project-action">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <a
                    href="https://drive.google.com/file/d/150SqabjCVuc7I5xh9VZyrk7uZ6RD4eeb/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate 01
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1plOdov2gdl9IfuZMC5Vs_mJTQ2bWmOBd/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate 02
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

            </article>


            {/* INNOVATION WEEK */}
            <article className="project-card">

              <div className="project-number">
                03
              </div>

              <div className="project-content">

                <p className="project-type">
                  INNOVATION · RECOGNITION
                </p>

                <h3>Innovation Week — 2nd Rank</h3>

                <p className="project-description">
                  Recognized as the 2nd-ranked team among participating teams
                  from all departments during the first phase of Innovation
                  Week and selected to showcase the project.
                </p>

                <div className="project-tech">
                  <span>2nd Rank</span>
                  <span>Innovation Week</span>
                  <span>Project Showcase</span>
                </div>

              </div>

              <div className="project-action">

                <a
                  href="https://drive.google.com/file/d/1A3s5Xp00zwdrP4EouGC5I_UGd951SLZx/view?usp=drivesdk"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                  <ArrowRight size={15} />
                </a>

              </div>

            </article>


            {/* SIH */}
            <article className="project-card">

              <div className="project-number">
                04
              </div>

              <div className="project-content">

                <p className="project-type">
                  HACKATHON · RECOGNITION
                </p>

                <h3>Smart India Hackathon 2025</h3>

                <p className="project-description">
                  Selected for the next round of Smart India Hackathon (SIH)
                  2025 after qualifying in the internal hackathon conducted
                  by the college.
                </p>

                <div className="project-tech">
                  <span>SIH 2025</span>
                  <span>Hackathon</span>
                  <span>Selection</span>
                </div>

              </div>

            </article>


            {/* ICAT */}
            <article className="project-card">

              <div className="project-number">
                05
              </div>

              <div className="project-content">

                <p className="project-type">
                  EXAMINATION · MACHINE LEARNING
                </p>

                <h3>ICAT Examination — AIR 7,450</h3>

                <p className="project-description">
                  Secured an All India Rank of 7,450 in the ICAT examination
                  conducted by iStudio and qualified for a Machine Learning
                  internship program.
                </p>

                <div className="project-tech">
                  <span>AIR 7,450</span>
                  <span>ICAT</span>
                  <span>Machine Learning</span>
                </div>

              </div>

            </article>


            {/* CGPA */}
            <article className="project-card">

              <div className="project-number">
                06
              </div>

              <div className="project-content">

                <p className="project-type">
                  ACADEMICS · ACHIEVEMENT
                </p>

                <h3>9+ CGPA</h3>

                <p className="project-description">
                  Maintained a CGPA above 9 during the undergraduate
                  engineering journey.
                </p>

                <div className="project-tech">
                  <span>Academic</span>
                  <span>9+ CGPA</span>
                  <span>Engineering</span>
                </div>

              </div>

            </article>

          </div>


          <div className="projects-bottom">

            <span>06 ACHIEVEMENTS</span>

            <a href="#contact">
              Let's connect
              <ArrowRight size={14} />
            </a>

          </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="contact-section">
        <style>{`
          .contact-section {
            min-height: 100vh;
            padding: 120px 6vw 80px;
            background: #0d0d0d;
            color: #f7f7f4;
            display: flex;
            align-items: center;
          }

          .contact-container {
            width: 100%;
            max-width: 1180px;
            margin: 0 auto;
          }

          .contact-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 50px;
            margin-bottom: 55px;
          }

          .contact-label {
            margin: 0 0 16px;
            color: #91aa98;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.16em;
          }

          .contact-heading {
            margin: 0;
            font-size: clamp(42px, 6vw, 78px);
            line-height: 0.98;
            letter-spacing: -0.04em;
            font-weight: 800;
          }

          .contact-heading span {
            color: #91aa98;
          }

          .contact-intro {
            max-width: 420px;
            margin: 0;
            color: #a4a49e;
            font-size: 15px;
            line-height: 1.8;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            gap: 24px;
          }

          .contact-info,
          .contact-form {
            border: 1px solid rgba(255, 255, 255, 0.13);
            background: #151515;
            border-radius: 18px;
          }

          .contact-info {
            padding: 34px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 430px;
          }

          .contact-info h3 {
            margin: 0 0 12px;
            font-size: 26px;
            color: #f7f7f4;
          }

          .contact-info > p {
            margin: 0 0 32px;
            color: #a4a49e;
            line-height: 1.7;
            font-size: 14px;
          }

          .contact-details {
            display: grid;
            gap: 14px;
          }

          .contact-detail {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            padding: 17px 18px;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 12px;
            color: #ddddD8;
            text-decoration: none;
            transition: 0.25s ease;
          }

          .contact-detail:hover {
            border-color: #91aa98;
            transform: translateY(-2px);
          }

          .contact-detail small {
            display: block;
            margin-bottom: 4px;
            color: #a4a49e;
            font-size: 10px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .contact-detail strong {
            font-size: 14px;
            font-weight: 600;
          }

          .contact-arrow {
            color: #91aa98;
            font-size: 18px;
          }

          .contact-socials {
            display: flex;
            gap: 10px;
            margin-top: 26px;
          }

          .contact-social {
            width: 42px;
            height: 42px;
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: #ddddD8;
            text-decoration: none;
            transition: 0.25s ease;
          }

          .contact-social svg {
            width: 17px;
            height: 17px;
          }

          .contact-social:hover {
            color: #0d0d0d;
            background: #91aa98;
            border-color: #91aa98;
            transform: translateY(-2px);
          }

          .contact-form {
            padding: 34px;
          }

          .contact-form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }

          .contact-field {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .contact-field.full {
            grid-column: 1 / -1;
          }

          .contact-field label {
            color: #ddddD8;
            font-size: 12px;
            font-weight: 600;
          }

          .contact-field input,
          .contact-field textarea {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            background: #0d0d0d;
            color: #f7f7f4;
            padding: 14px 15px;
            font: inherit;
            font-size: 14px;
            outline: none;
            transition: 0.25s ease;
          }

          .contact-field textarea {
            min-height: 135px;
            resize: vertical;
          }

          .contact-field input:focus,
          .contact-field textarea:focus {
            border-color: #91aa98;
            box-shadow: 0 0 0 3px rgba(145, 170, 152, 0.08);
          }

          .contact-submit {
            margin-top: 22px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            border: 0;
            border-radius: 999px;
            padding: 14px 22px;
            background: #91aa98;
            color: #0d0d0d;
            font: inherit;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: 0.25s ease;
          }

          .contact-submit:hover {
            background: #a8bdad;
            transform: translateY(-2px);
          }

          .contact-bottom {
            margin-top: 42px;
            padding-top: 22px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            gap: 20px;
            color: #a4a49e;
            font-size: 12px;
          }

          .contact-bottom strong {
            color: #ddddD8;
            font-weight: 600;
          }

          @media (max-width: 800px) {
            .contact-section {
              padding: 100px 6vw 60px;
            }

            .contact-top {
              display: block;
              margin-bottom: 38px;
            }

            .contact-intro {
              margin-top: 22px;
            }

            .contact-grid {
              grid-template-columns: 1fr;
            }

            .contact-info {
              min-height: auto;
            }
          }

          @media (max-width: 560px) {
            .contact-section {
              padding: 90px 20px 50px;
            }

            .contact-info,
            .contact-form {
              padding: 24px;
              border-radius: 15px;
            }

            .contact-form-grid {
              grid-template-columns: 1fr;
            }

            .contact-field.full {
              grid-column: auto;
            }

            .contact-bottom {
              flex-direction: column;
            }
          }
        `}</style>

        <div className="contact-container">
          <div className="contact-top">
            <div>
              <p className="contact-label">05 / CONTACT</p>
              <h2 className="contact-heading">
                Let's <span>Connect.</span>
              </h2>
            </div>

            <p className="contact-intro">
              Have a project, opportunity, or idea in mind? I’d love to hear
              from you and explore how we can build something meaningful.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div>
                <h3>Get in touch.</h3>
                <p>
                  Whether it’s a project, collaboration, internship opportunity,
                  or simply a conversation about technology, feel free to reach out.
                </p>

                <div className="contact-details">
                  <a
                    href="mailto:teerthashree1209@gmail.com"
                    className="contact-detail"
                  >
                    <span>
                      <small>Email</small>
                      <strong>teerthashree1209@gmail.com</strong>
                    </span>
                    <span className="contact-arrow">↗</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/teerthashree1209"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail"
                  >
                    <span>
                      <small>LinkedIn</small>
                      <strong>teerthashree1209</strong>
                    </span>
                    <span className="contact-arrow">↗</span>
                  </a>

                  <a
                    href="https://github.com/shzz09"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail"
                  >
                    <span>
                      <small>GitHub</small>
                      <strong>github.com/shzz09</strong>
                    </span>
                    <span className="contact-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="contact-socials">
                <a
                  href="https://github.com/shzz09"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>

                <a
                  href="https://linkedin.com/in/teerthashree1209"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={sendEmail}
            >
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="contact-field full">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="contact-field full">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
                {!sending && <ArrowRight size={15} />}
              </button>
            </form>
          </div>

          <div className="contact-bottom">
            <span>LET'S BUILD SOMETHING MEANINGFUL TOGETHER.</span>
            <strong>Available for opportunities & collaborations.</strong>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;