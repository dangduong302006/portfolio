import { useState } from "react";
import "./About.css";

export default function About() {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-top">
        <div className="about-photo reveal reveal-left">
          <img src="/ava2.jpg" alt="Đặng Đức Dương" />
        </div>

        <div className="about-info reveal reveal-right">
          <div className="section-title-underline">
            <h1 className="section-title">ABOUT ME</h1>
          </div>

          <h3 className="about-skills-heading">Skills</h3>
          <ul className="bullet-list about-skills-list">
            <li>
              <strong>Backend:</strong> Node.js, Java, TypeScript
            </li>
            <li>
              <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js
            </li>
            <li>
              <strong>Database:</strong> MongoDB, SQL Server, Supabase
            </li>
            <li>
              <strong>Tools:</strong> Git, Github
            </li>
            <li>
              <strong>Language:</strong> English (IELTS 6.0), Japanese
              (Elementary)
            </li>
          </ul>

          <div className="about-buttons">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
            <div className="cv-dropdown">
              <button
                className="btn-outline"
                onClick={() => setShowCV(!showCV)}
              >
                Download CV ▾
              </button>
              {showCV && (
                <div className="cv-dropdown-menu">
                  <a
                    href="/cv-vietnamese.pdf"
                    download
                    onClick={() => setShowCV(false)}
                  >
                    <span className="cv-flag vi">VI</span> Tiếng Việt
                  </a>
                  <a
                    href="/cv-english.pdf"
                    download
                    onClick={() => setShowCV(false)}
                  >
                    <span className="cv-flag en">EN</span> English
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="about-grid">
        {/* Cột trái */}
        <div>
          <h3 className="about-section-heading reveal">Education</h3>
          <div className="timeline-item reveal reveal-delay-1">
            <strong className="timeline-title">FPT University</strong>
            <span className="date-badge">Sep 2024 – Dec 2027</span>
            <ul className="bullet-list">
              <li>Computer Software Engineering</li>
              <li>Current GPA: 3.3/4</li>
            </ul>
          </div>

          <h3
            className="about-section-heading reveal"
            style={{ marginTop: 36 }}
          >
            Activities
          </h3>
          <div className="timeline-item reveal reveal-delay-1">
            <strong className="timeline-title">
              FPTU JS Club - Japanese Software Engineers
            </strong>
            <span className="date-badge">Jan 2026 – Present</span>
            <p className="timeline-role">
              <em>Technical Department Collaborator</em>
            </p>
            <ul className="bullet-list">
              <li>Develop software applications: Prolite, OctatechShop</li>
              <li>Organize academic workshops and team-bonding activities</li>
            </ul>
          </div>
          <div className="timeline-item reveal reveal-delay-2">
            <strong className="timeline-title">
              Information Security Laboratory - FPT University
            </strong>
            <span className="date-badge">Jan 2026 – Present</span>
            <p className="timeline-role">
              <em>Student Researcher, Software Developer</em>
            </p>
            <ul className="bullet-list">
              <li>Developing examination software for students</li>
              <li>
                Researched AI integration and anti-hacking solutions for
                examination software
              </li>
            </ul>
          </div>

          <h3
            className="about-section-heading reveal"
            style={{ marginTop: 36 }}
          >
            Certifications
          </h3>
          <div className="timeline-item reveal reveal-delay-1">
            <strong className="timeline-title">
              Software Engineering Specialization
            </strong>
            <span className="date-badge">Jan 2026</span>
          </div>
          <div className="timeline-item reveal reveal-delay-2">
            <strong className="timeline-title">Web Design for Everybody</strong>
            <span className="date-badge">Jun 2025</span>
            <ul className="bullet-list">
              <li>Basics of Web Development & Coding Specialization</li>
            </ul>
          </div>
          <div className="timeline-item reveal reveal-delay-3">
            <strong className="timeline-title">IELTS Academic</strong>
            <span className="date-badge">Dec 2024</span>
            <ul className="bullet-list">
              <li>Overall: 6.0</li>
            </ul>
          </div>
        </div>

        {/* Cột phải */}
        <div>
          <h3 className="about-section-heading reveal">Projects</h3>
          <div className="timeline-item reveal reveal-delay-1">
            <strong className="timeline-title">Prolite</strong>
            <span className="date-badge">Jan 2026 – Apr 2026</span>
            <p className="timeline-role">
              <em>Backend Developer, AI Team</em>
            </p>
            <ul className="bullet-list">
              <li>
                Social networking app with posts, stories, and real-time
                messaging
              </li>
              <li>Designed schemas and built the Supabase database</li>
              <li>
                Built CRUD methods and AI-integrated matchmaking using Hono &
                TypeScript
              </li>
              <li>
                <strong>Tech:</strong> Node.js, TypeScript, Supabase, Socket.io
              </li>
            </ul>
          </div>
          <div className="timeline-item reveal reveal-delay-2">
            <strong className="timeline-title">OctatechShop</strong>
            <span className="date-badge">Jan 2026 – Apr 2026</span>
            <p className="timeline-role">
              <em>Backend Developer</em>
            </p>
            <ul className="bullet-list">
              <li>
                Computer marketplace with dynamic filtering by brand, price, and
                specs
              </li>
              <li>Integrated Spring Security for user protection</li>
              <li>Developed real-time business reporting dashboard with SQL</li>
              <li>
                <strong>Tech:</strong> Java (Spring Boot), MVC, SQL Server,
                Maven
              </li>
            </ul>
          </div>

          <h3
            className="about-section-heading reveal"
            style={{ marginTop: 36 }}
          >
            Interests
          </h3>
          <div className="timeline-item reveal reveal-delay-1">
            <ul className="bullet-list">
              <li>
                Continuous learning & cultural exploration through travelling
              </li>
              <li>Strategic thinking through Badminton and Esports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
