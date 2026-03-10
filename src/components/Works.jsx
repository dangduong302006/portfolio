import "./Works.css";

const PROJECTS = [
  {
    title: "Prolite",
    date: "Jan 2026",
    desc: "A social networking web app featuring posts, stories, and real-time messaging, integrated with AI-driven text enhancement.",
    tech: ["Node.js", "TypeScript", "Supabase", "Socket.io"],
    github: "https://github.com/httt526/Team-7-JS-Prime-Seven.git",
  },
  {
    title: "OctatechShop",
    date: "Jan 2026",
    desc: "A computer marketplace with dynamic filtering by brand, price, and specs. Includes real-time business reporting dashboard.",
    tech: ["Java", "Spring Boot", "SQL Server", "Maven"],
    github: "https://github.com/Haipm26/PRJ301_Team8.git",
  },
];

export default function Works() {
  return (
    <section id="works" className="works-section">
      <div className="section-title-underline reveal">
        <h2 className="section-title">RECENT WORK</h2>
      </div>

      {/* reveal-group để stagger tự động theo nth-child */}
      <div className="works-grid reveal-group">
        {PROJECTS.map((p, i) => (
          <div key={i} className="work-card reveal reveal-scale">
            <div className="work-card-thumb">
              <div className="work-thumb-placeholder">
                <i className="fa-solid fa-code" />
              </div>
            </div>
            <div className="work-card-body">
              <h3 className="work-title">{p.title}</h3>
              <span className="work-date">{p.date}</span>
              <p className="work-desc">{p.desc}</p>
              <div className="work-tags">
                {p.tech.map((t, j) => (
                  <span key={j} className="work-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="work-link"
              >
                View on GitHub <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
