import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { education, projects, research, site, skills, type Project } from './content'
import './styles.css'

const focusAreas = [
  { number: '01', title: 'Applied AI', text: 'RAG, LLM applications, machine learning, and evaluation-focused AI systems.' },
  { number: '02', title: 'Software Engineering', text: 'Full-stack applications, REST APIs, databases, and maintainable product workflows.' },
  { number: '03', title: 'IoT & Intelligent Systems', text: 'Embedded systems, sensor integration, automation, and IoT applications.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const hasAbout = Boolean(site.about.trim())
  const hasProjects = projects.length > 0
  const hasSkills = skills.length > 0
  const hasResearch = research.length > 0
  const hasEducation = education.length > 0
  const hasContact = Boolean(site.email || site.phone || site.location || site.linkedin || site.github)

  const navItems = [
    'home',
    hasAbout && 'about',
    hasProjects && 'projects',
    hasSkills && 'skills',
    hasResearch && 'research',
    hasEducation && 'education',
    hasContact && 'contact',
  ].filter(Boolean) as string[]

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">{site.shortName}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((id) => <button key={id} onClick={() => scrollTo(id)}>{id === 'home' ? 'Home' : id[0].toUpperCase() + id.slice(1)}</button>)}
            {site.resume && <a className="nav-resume" href={site.resume} target="_blank" rel="noreferrer">Resume</a>}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI / ML · SOFTWARE · RESEARCH</p>
              <h1>{site.name}</h1>
              <p className="hero-title">{site.education} <span>|</span> {site.title}</p>
              <p className="hero-description">{site.heroDescription}</p>
              <div className="hero-actions">
                {hasProjects && <button className="button button-gold" onClick={() => scrollTo('projects')}>Explore My Work</button>}
                <button className="button button-outline" onClick={() => scrollTo('contact')}>Get in Touch</button>
                {site.resume && <a className="button button-outline" href={site.resume} target="_blank" rel="noreferrer">Download Resume</a>}
              </div>
              <div className="social-row">
                {site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
                {site.email && <a href={`mailto:${site.email}`}>Email ↗</a>}
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-aura" />
              <div className="hero-ring hero-ring-one" />
              <div className="hero-ring hero-ring-two" />
              {site.photo ? <img className="hero-photo" src={site.photo} alt="" /> : <div className="hero-monogram">PDN</div>}
              <div className="gold-spark spark-one">✦</div>
              <div className="gold-spark spark-two">✦</div>
              <div className="hero-botanical" />
            </div>
          </div>
        </section>

        {hasAbout && (
          <section id="about" className="section">
            <div className="container">
              <SectionHeading number="01" title="About Me" />
              <div className="about-grid">
                <div className="about-copy">
                  <p className="lead">{site.about}</p>
                  <div className="about-facts">
                    <div><span>Education</span><strong>{site.education}</strong></div>
                    <div><span>Location</span><strong>{site.location}</strong></div>
                    <div><span>Focus</span><strong>AI · Software · Research</strong></div>
                  </div>
                </div>
                <div className="focus-stack">
                  {focusAreas.map((item) => (
                    <article className="focus-card" key={item.number}>
                      <span>{item.number}</span>
                      <div><h3>{item.title}</h3><p>{item.text}</p></div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {hasProjects && (
          <section id="projects" className="section section-soft">
            <div className="container">
              <SectionHeading number="02" title="Selected Projects" />
              <div className="section-intro">
                <p>Selected work across AI, software engineering, IoT, and engineering research.</p>
                <span>{projects.length.toString().padStart(2, '0')} projects</span>
              </div>
              <div className="project-grid">
                {projects.map((project, index) => (
                  <article className="project-card" key={project.title} onClick={() => setSelected(project)}>
                    <div className="project-media">
                      {project.image
                        ? <img src={project.image} alt="" />
                        : <div className="media-fallback"><span>{String(index + 1).padStart(2, '0')}</span></div>}
                    </div>
                    <div className="project-body">
                      <p className="project-category">{project.category}</p>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="chips">{project.technologies.slice(0, 6).map((t) => <span key={t}>{t}</span>)}</div>
                      <span className="view-link">Explore Project ↗</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {hasSkills && (
          <section id="skills" className="section">
            <div className="container">
              <SectionHeading number="03" title="Technical Expertise" />
              <div className="skills-grid">
                {skills.map((group) => (
                  <div className="skill-card" key={group.group}>
                    <h3>{group.group}</h3>
                    <div className="chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {hasResearch && (
          <section id="research" className="section section-soft">
            <div className="container narrow">
              <SectionHeading number="04" title="Research & Publications" />
              <div className="research-list">
                {research.map((item, index) => (
                  <article className="research-item" key={item.title}>
                    <div className="research-index">0{index + 1}</div>
                    <div className="research-content">
                      <span className="meta">{item.type} · {item.year}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      {item.link && <a href={item.link} target="_blank" rel="noreferrer">View publication ↗</a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {hasEducation && (
          <section id="education" className="section">
            <div className="container narrow">
              <SectionHeading number="05" title="Education" />
              <div className="education-timeline">
                {education.map((item, index) => (
                  <article className="education-item" key={`${item.degree}-${item.institution}`}>
                    <div className="timeline-marker"><span>0{index + 1}</span></div>
                    <div className="education-card">
                      <span className="meta">{item.period}</span>
                      <h3>{item.degree}</h3>
                      <p>{item.institution}</p>
                      {item.details?.map((detail) => <span className="education-detail" key={detail}>{detail}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {hasContact && (
          <section id="contact" className="section section-dark contact">
            <div className="container contact-grid">
              <div>
                <p className="eyebrow">06 · Contact</p>
                <h2>Let's build something meaningful.</h2>
                <p>Open to professional opportunities in AI and software engineering, with a focus on building practical solutions to real-world problems.</p>
              </div>
              <div className="contact-panel">
                {site.email && <a className="contact-line" href={`mailto:${site.email}`}><span>Email</span><strong>{site.email}</strong></a>}
                {site.phone && <a className="contact-line" href={`tel:${site.phone}`}><span>Phone</span><strong>{site.phone}</strong></a>}
                {site.location && <div className="contact-line"><span>Location</span><strong>{site.location}</strong></div>}
                <div className="contact-links">
                  {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
                  {site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="container">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>AI · Software · Research</span>
        </div>
      </footer>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <article className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelected(null)} aria-label="Close project">×</button>
            {selected.video
              ? <video className="modal-video" src={selected.video} controls />
              : selected.image
                ? <img className="modal-cover" src={selected.image} alt="" />
                : null}
            {selected.gallery?.length ? <div className="gallery">{selected.gallery.map((src) => <img key={src} src={src} alt="" />)}</div> : null}
            <p className="project-category">{selected.category}</p>
            <h2>{selected.title}</h2>
            <p>{selected.overview || selected.description}</p>
            {selected.architecture && <><h3>Architecture</h3><p>{selected.architecture}</p></>}
            {selected.highlights?.length ? <><h3>Key Highlights</h3><ul>{selected.highlights.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
            {selected.research?.length ? <><h3>Research</h3>{selected.research.map((item) => <div key={item.title} className="project-detail"><strong>{item.title}</strong><p>{item.description}</p></div>)}</> : null}
            {selected.engineeringFocus && <><h3>Engineering Focus</h3><p>{selected.engineeringFocus}</p></>}
            <h3>Technology</h3>
            <div className="chips">{selected.technologies.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="modal-links">
              {selected.github && <a href={selected.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
              {selected.live && <a href={selected.live} target="_blank" rel="noreferrer">Live Demo ↗</a>}
            </div>
          </article>
        </div>
      )}
    </div>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return <div className="section-heading"><span>{number}</span><h2>{title}</h2></div>
}

createRoot(document.getElementById('root')!).render(<App />)
