import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-title-underline reveal">
        <h2 className="section-title">CONTACT</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info reveal reveal-left">
          <h3>Get in touch</h3>
          <p>
            Always available for internship opportunities and interesting
            projects. Feel free to contact me!
          </p>

          <div className="contact-item">
            <i className="fa-solid fa-envelope" />
            <span>dangduong302006@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone" />
            <span>(+84) 368 769 168</span>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-location-dot" />
            <span>Ha Noi, Viet Nam</span>
          </div>
          <div className="contact-item">
            <i className="fa-brands fa-github" />
            <a
              href="https://github.com/dangduong302006"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
            >
              github.com/dangduong302006
            </a>
          </div>
          <div className="contact-item">
            <i className="fa-brands fa-linkedin" />
            <a
              href="https://www.linkedin.com/in/d%C6%B0%C6%A1ng-%C4%91%E1%BA%B7ng-%C4%91%E1%BB%A9c-9b186a20a/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "inherit" }}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="contact-form-wrap reveal reveal-right">
          <div className="contact-form-row">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="contact-input"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="contact-input"
            />
          </div>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="contact-input"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="contact-input contact-textarea"
            rows={5}
          />
          <button className="btn-primary" onClick={handleSubmit}>
            {sent ? "✓ Message Sent!" : "Send message"}
          </button>
        </div>
      </div>
    </section>
  );
}
