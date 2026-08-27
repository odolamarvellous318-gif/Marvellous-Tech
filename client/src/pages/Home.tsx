// Soft Editorial Studio: asymmetric editorial layout, tactile surfaces, clay accents, and quiet motion.
import { useState } from "react";
import { ArrowUpRight, Check, Menu, X } from "lucide-react";

const projects = [
  {
    number: "01",
    type: "Brand identity · 2024",
    title: "Field Notes",
    description: "A flexible identity for a research collective making complex climate work feel close to home.",
    image: "/manus-storage/mara-project-identity_090146d4.jpg",
    color: "sage",
  },
  {
    number: "02",
    type: "Digital direction · 2024",
    title: "Common Ground",
    description: "A clearer digital front door for a civic platform connecting neighbors with local action.",
    image: "/manus-storage/mara-project-digital_42683e30.jpg",
    color: "blue",
  },
];

const services = [
  ["01", "Brand direction", "Positioning, voice, visual systems, and the decisions that make a brand recognizable."],
  ["02", "Digital experiences", "Websites and product surfaces that turn good ideas into easy next steps."],
  ["03", "Creative partnership", "A sharp, steady point of view for teams that need momentum without the noise."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Back to top">
          <img src="/manus-storage/mara-studio-mark_8b1ef1b6.png" alt="" className="brand-mark" />
          <span>Mara <i>/ Studio</i></span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <a className="nav-contact" href="mailto:hello@marastudio.co">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> Independent creative partner · Nairobi / Worldwide</p>
          <h1>Good work starts with a <em>sharper</em> question.</h1>
          <p className="hero-intro">I help thoughtful founders and teams make the important thing clearer — then make it look unmistakably like them.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollTo("work")}>See selected work <ArrowUpRight size={16} /></button>
            <button className="text-link" onClick={() => scrollTo("about")}>A little about me <span>↘</span></button>
          </div>
        </div>
        <div className="hero-art-wrap">
          <div className="folio-label label-top">Selected folio <strong>© 24—25</strong></div>
          <div className="hero-art-card">
            <img src="/manus-storage/mara-editorial-hero_f8fe00e3.jpg" alt="A tactile creative studio desk with paper, folders, and design materials" />
            <div className="hero-stamp"><span>MAKE<br />ROOM<br />FOR<br /><i>good</i><br />ideas</span></div>
          </div>
          <div className="folio-label label-bottom">01 / 04 <span>↗</span></div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work <span>01—02</span></p>
          <h2>A few things I&apos;ve helped <em>move forward.</em></h2>
          <p className="section-note">Different formats, same north star: make the right thing easier to see, feel, and choose.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card project-${project.color}`} key={project.number} onClick={() => setSelectedProject(project)} tabIndex={0} onKeyDown={(event) => event.key === "Enter" && setSelectedProject(project)}>
              <div className="project-image-wrap"><img src={project.image} alt={`${project.title} project preview`} /><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
              <div className="project-meta"><span className="project-number">{project.number}</span><div><p className="eyebrow">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><button className="text-link">View case study <span>↗</span></button></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="services-intro"><p className="eyebrow">What I do</p><h2>Clarity, with a point of <em>view.</em></h2></div>
        <div className="service-list">
          {services.map(([number, title, description]) => <div className="service-row" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-icon" size={20} /></div>)}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-quote"><span className="quote-mark">“</span><h2>I like the part where a loose thought becomes something people can <em>feel.</em></h2></div>
        <div className="about-detail"><p className="eyebrow">A little context</p><p>I&apos;m Mara, a freelance creative director and designer working across identity, digital, and the space between the two. My process is collaborative, curious, and allergic to unnecessary decoration.</p><p>When I&apos;m not shaping a brand, you&apos;ll find me collecting old matchbooks, walking too far for coffee, or asking one more question.</p><button className="text-link" onClick={() => scrollTo("contact")}>More about the studio <span>↘</span></button></div>
      </section>

      <section className="process-strip"><div><span>01</span><strong>Find the signal</strong><small>Ask better questions</small></div><div><span>02</span><strong>Make a shape</strong><small>Build what fits</small></div><div><span>03</span><strong>Send it forward</strong><small>Leave a clear trail</small></div></section>

      <footer className="site-footer section-pad" id="contact">
        <div className="footer-main"><p className="eyebrow">Have a good question?</p><h2>Let&apos;s make room for <em>it.</em></h2><a href="mailto:hello@marastudio.co" className="footer-email">hello@marastudio.co <ArrowUpRight size={22} /></a></div>
        <div className="footer-bottom"><span>© 2025 Mara / Studio</span><span>Available for select collaborations</span><div><a href="#top">Back to top ↑</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
      </footer>

      {selectedProject && <div className="dialog-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={(event) => event.stopPropagation()}><button className="dialog-close" onClick={() => setSelectedProject(null)} aria-label="Close case study"><X size={20} /></button><img src={selectedProject.image} alt="" /><p className="eyebrow">{selectedProject.type}</p><h2 id="project-dialog-title">{selectedProject.title}</h2><p>{selectedProject.description} This case study is a placeholder for your longer project story, outcomes, and process notes.</p><span className="dialog-note"><Check size={15} /> Case study details can be added here</span></div></div>}
    </main>
  );
}
