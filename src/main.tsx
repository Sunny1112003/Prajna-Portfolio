import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { education, projects, research, site, skills, type Project } from './content'
import './styles.css'

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
    hasAbout && 'about', hasProjects && 'projects', hasSkills && 'skills',
    hasResearch && 'research', hasEducation && 'education', hasContact && 'contact',
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
            {navItems.map((id) => <button key={id} onClick={() => scrollTo(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}
            {site.resume && <a className="nav-resume" href={site.resume} target="_blank" rel="noreferrer">Resume</a>}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-dark">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Hello, I'm</p>
              <h1>{site.name}</h1>
              <p className="hero-title">{site.education} <span>|</span> {site.title}</p>
              {site.heroDescription && <p className="hero-description">{site.heroDescription}</p>}
              <div className="hero-actions">
                {hasProjects && <button className="button button-gold" onClick={() => scrollTo('projects')}>View Projects</button>}
                {site.resume && <a className="button button-outline" href={site.resume} target="_blank" rel="noreferrer">Download Resume</a>}
              </div>
              {(site.github || site.linkedin || site.email) && <div className="social-row">
                {site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>}
                {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
                {site.email && <a href={`mailto:${site.email}`}>Email</a>}
              </div>}
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

        {hasAbout && <section id="about" className="section"><div className="container narrow"><SectionHeading number="01" title="About Me" /><p className="lead">{site.about}</p></div></section>}

        {hasProjects && <section id="projects" className="section section-soft"><div className="container"><SectionHeading number="02" title="Featured Projects" /><div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.title} onClick={() => setSelected(project)}>
            <div className="project-media">{project.image ? <img src={project.image} alt="" /> : <div className="media-fallback">Project</div>}</div>
            <div className="project-body">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">{project.technologies.map((t) => <span key={t}>{t}</span>)}</div>
              <span className="view-link">View project ↗</span>
            </div>
          </article>)}
        </div></div></section>}

        {hasSkills && <section id="skills" className="section"><div className="container"><SectionHeading number="03" title="Technical Expertise" /><div className="skills-grid">
          {skills.map((group) => <div className="skill-card" key={group.group}><h3>{group.group}</h3><div className="chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
        </div></div></section>}

        {hasResearch && <section id="research" className="section section-soft"><div className="container narrow"><SectionHeading number="04" title="Research & Publications" /><div className="list">
          {research.map((item) => <article className="list-item" key={item.title}><div><span className="meta">{item.type} · {item.year}</span><h3>{item.title}</h3><p>{item.description}</p></div>{item.link && <a href={item.link} target="_blank" rel="noreferrer">View ↗</a>}</article>)}
        </div></div></section>}

        {hasEducation && <section id="education" className="section"><div className="container narrow"><SectionHeading number="05" title="Education" /><div className="list">
          {education.map((item) => <article className="list-item" key={`${item.degree}-${item.institution}`}><div><span className="meta">{item.period}</span><h3>{item.degree}</h3><p>{item.institution}{item.detail ? ` · ${item.detail}` : ''}</p></div></article>)}
        </div></div></section>}

        {hasContact && <section id="contact" className="section section-dark contact"><div className="container contact-grid">
          <div><p className="eyebrow">06 · Contact</p><h2>Let's connect.</h2><p>For opportunities, collaborations, or professional conversations.</p></div>
          <div className="contact-details">
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            {site.phone && <a href={`tel:${site.phone}`}>{site.phone}</a>}
            {site.location && <span>{site.location}</span>}
            <div className="contact-links">{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}{site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>}</div>
          </div>
        </div></section>}
      </main>

      <footer><div className="container"><span>© {new Date().getFullYear()} {site.name}</span><span>Built with React</span></div></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><article className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={() => setSelected(null)} aria-label="Close project">×</button>
        {selected.video ? <video className="modal-video" src={selected.video} controls /> : selected.image ? <img className="modal-cover" src={selected.image} alt="" /> : null}
        {selected.gallery?.length ? <div className="gallery">{selected.gallery.map((src) => <img key={src} src={src} alt="" />)}</div> : null}
        <p className="project-category">{selected.category}</p><h2>{selected.title}</h2><p>{selected.overview || selected.description}</p>
        {selected.architecture && <><h3>Architecture</h3><p>{selected.architecture}</p></>}
        {selected.highlights?.length ? <><h3>Highlights</h3><ul>{selected.highlights.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
        <div className="chips">{selected.technologies.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="modal-links">{selected.github && <a href={selected.github} target="_blank" rel="noreferrer">GitHub ↗</a>}{selected.live && <a href={selected.live} target="_blank" rel="noreferrer">Live Demo ↗</a>}</div>
      </article></div>}
    </div>
  )
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return <div className="section-heading"><span>{number}</span><h2>{title}</h2></div>
}

createRoot(document.getElementById('root')!).render(<App />)
