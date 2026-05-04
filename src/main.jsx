import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./style.css";

const EMAIL = "zimmerelliaiconsulting@gmail.com";
const FIVERR_LINK = "https://www.fiverr.com/s/yv3a1lb";

function FiverrMark() {
  return (
    <span className="fiverr-mark" aria-label="Fiverr">
      fiverr<span>.</span>
    </span>
  );
}

function App() {
  const services = [
    {
      icon: "✦",
      title: "AI Workflow Setup",
      text: "Custom ChatGPT prompt systems, reusable instructions, and simple processes that make repeated work faster and easier to manage.",
    },
    {
      icon: "▦",
      title: "Google Sheets Trackers",
      text: "Clean spreadsheet systems for tracking opportunities, sources, deadlines, links, updates, and project status in one place.",
    },
    {
      icon: "⌕",
      title: "Research Organization",
      text: "Structured research workflows that help collect, organize, summarize, and manage useful information without losing important details.",
    },
  ];

  const tools = [
    "Google Sheets",
    "Microsoft Excel",
    "ChatGPT",
    "Google Apps Script",
    "Internet Research",
    "Data Entry",
    "Data Cleaning",
    "Prompt Writing",
    "Workflow Organization",
  ];

  const process = [
    "Understand the task and what needs to be tracked",
    "Create a clean workflow or sheet structure",
    "Add prompts, columns, formulas, or organization systems",
    "Explain how to use and update the final system",
  ];

  const trackerRows = [
    { label: "Opportunity", value: "County shoreline restoration RFP", tag: "New" },
    { label: "Source Link", value: "Official procurement page", tag: "Verified" },
    { label: "Deadline", value: "May 28, 2026", tag: "Upcoming" },
    { label: "Fit Score", value: "High match based on scope + location", tag: "AI Review" },
    { label: "Status", value: "Needs proposal review", tag: "Next Step" },
    { label: "Last Updated", value: "Today at 8:42 PM", tag: "Live" },
  ];

  return (
    <main>
      <section className="hero">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="grid-glow"></div>

        <div className="nav">
          <div className="brand">
            <div className="logo">AI</div>
            <div>
              <p className="brand-name">Carmine Zimmerelli</p>
              <p className="brand-sub">AI Workflow Consulting</p>
            </div>
          </div>
          <div className="nav-actions">
            <a className="nav-link fiverr-nav" href={FIVERR_LINK} target="_blank" rel="noreferrer"><FiverrMark /></a>
            <a className="nav-link" href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>

        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="badge">↻ Simple systems for repetitive work</div>
            <h1>AI workflow and Google Sheets support for cleaner, faster work.</h1>
            <p className="hero-text">
              I help students, small businesses, and organizations build practical AI-assisted systems for tracking, research, source organization, and repetitive tasks.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=zimmerelliaiconsulting@gmail.com&su=AI%20Workflow%20Project%20Request" target="_blank" rel="noreferrer">Work With Me →</a>
              <a className="button secondary" href={FIVERR_LINK} target="_blank" rel="noreferrer">View My Fiverr</a>
            </div>
            <div className="mini-points">
              <span>✓ Simple setup</span>
              <span>✓ Clear organization</span>
              <span>✓ Easy to update</span>
            </div>
          </motion.div>

          <motion.div className="dashboard-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="browser-bar">
              <span></span><span></span><span></span>
            </div>
            <div className="card-head">
              <div>
                <p className="eyebrow muted">Example System</p>
                <h2>RFP Tracker Dashboard</h2>
              </div>
              <div className="card-icon">▦</div>
            </div>

            <div className="metric-grid">
              <div className="metric-card">
                <p>New Leads</p>
                <strong>12</strong>
              </div>
              <div className="metric-card">
                <p>High Fit</p>
                <strong>4</strong>
              </div>
              <div className="metric-card">
                <p>Due Soon</p>
                <strong>3</strong>
              </div>
            </div>

            <div className="rows complex-rows">
              {trackerRows.map((row) => (
                <div className="tracker-row complex" key={row.label}>
                  <div>
                    <span className="row-label">{row.label}</span>
                    <span className="row-value">{row.value}</span>
                  </div>
                  <span className="row-tag">{row.tag}</span>
                </div>
              ))}
            </div>

            <div className="workflow-strip">
              <span>Search</span>
              <b>→</b>
              <span>Review</span>
              <b>→</b>
              <span>Track</span>
              <b>→</b>
              <span>Act</span>
            </div>

            <p className="green-note">
              Designed to organize proposal opportunities, surface the strongest matches, reduce duplicate results, and keep source links easy to verify.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">What I Do</p>
            <h2>Practical AI help for real workflows.</h2>
            <p>
              My focus is not complicated software. I build simple tools that help people organize information, track progress, manage sources, and repeat tasks with less confusion.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <motion.div className="service-card" key={service.title} whileHover={{ y: -6 }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="example" className="section light">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Example Project</p>
            <h2>AI-assisted RFP tracking workflow.</h2>
            <p>
              Built a simple workflow using Google Sheets to organize proposal opportunities, source links, update times, fit scores, and status information. The goal is to make new opportunities easier to review and keep important links accessible.
            </p>
          </div>
          <div className="process-card">
            {process.map((step, index) => (
              <div className="process-step" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Tools & Skills</p>
            <h2>Built around tools people already use.</h2>
            <p>
              I focus on practical tools that are easy for clients to understand and keep using after the project is finished.
            </p>
          </div>
          <div className="tool-list">
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </div>
      </section>

      <section className="section footer-section">
        <div className="orb orb-three"></div>
        <div className="container two-col">
          <div>
            <div className="badge">✓ Best for simple, useful systems</div>
            <h2>Need a cleaner way to track work, research, or opportunities?</h2>
            <p>
              I work best with students, small businesses, nonprofits, and individuals who have information scattered across emails, websites, documents, or spreadsheets and want it organized into a cleaner workflow.
            </p>
          </div>
          <div className="contact-card">
            <h3>Work With Me</h3>
            <p>Available for AI workflow, Google Sheets, research organization, and tracker-building projects.</p>
            <a className="contact-line" href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
            <a className="contact-line fiverr-contact" href={FIVERR_LINK} target="_blank" rel="noreferrer"><FiverrMark /> View my Fiverr profile</a>
            <a className="button primary full" href="https://mail.google.com/mail/?view=cm&fs=1&to=zimmerelliaiconsulting@gmail.com&su=AI%20Workflow%20Project%20Request" target="_blank" rel="noreferrer">Contact Me →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
