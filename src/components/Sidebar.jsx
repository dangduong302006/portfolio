import "./Sidebar.css";

const navItems = [
  { id: "home", label: "HOME", icon: "fa-house" },
  { id: "about", label: "ABOUT", icon: "fa-address-card" },
  { id: "works", label: "MY WORKS", icon: "fa-briefcase" },
  { id: "contact", label: "CONTACT", icon: "fa-envelope" },
];

const socials = [
  {
    icon: "fa-brands fa-facebook-f",
    href: "https://facebook.com",
    title: "Facebook",
  },
  {
    icon: "fa-brands fa-instagram",
    href: "https://instagram.com",
    title: "Instagram",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/d%C6%B0%C6%A1ng-%C4%91%E1%BA%B7ng-%C4%91%E1%BB%A9c-9b186a20a/",
    title: "LinkedIn",
  },
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/dangduong302006",
    title: "GitHub",
  },
];

export default function Sidebar({ active, onNav, darkMode, setDarkMode }) {
  const scrollTo = (id) => {
    onNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`} />
      </button>

      <aside className="sidebar">
        <div className="sidebar-accent" />

        <div className="sidebar-avatar-wrap">
          <div className="sidebar-avatar-bg" />
          <div className="sidebar-avatar">
            <img src="/ava2.jpg" alt="Đặng Đức Dương" />
          </div>
        </div>

        <p className="sidebar-name">ĐẶNG ĐỨC DƯƠNG</p>
        <p className="sidebar-role">Backend Developer Intern</p>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${active === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              <i className={`fa-solid ${item.icon}`} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-socials">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.title}
              className="social-icon"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>

        <p className="sidebar-updated">Last updated: 2025</p>
      </aside>
    </>
  );
}
