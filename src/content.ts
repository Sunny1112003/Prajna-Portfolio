export type Project = {
  title: string
  category: string
  description: string
  image?: string
  video?: string
  gallery?: string[]
  technologies: string[]
  github?: string
  live?: string
  overview?: string
  architecture?: string
  highlights?: string[]
}

export const site = {
  name: 'Prajna Deepankar Nelapuri',
  shortName: 'PDN',
  title: 'AI/ML Engineer | Software Engineer',
  education: 'M.Tech, NIT Calicut',
  heroDescription: '',
  about: '',
  photo: './assets/hero.webp',
  email: '',
  phone: '',
  location: '',
  linkedin: '',
  github: '',
  resume: '',
}

// Add only your real projects here.
export const projects: Project[] = []

// Add only your real skills here.
export const skills: { group: string; items: string[] }[] = []

// Add only your real research/publications here.
export const research: { title: string; type: string; year: string; description: string; link?: string }[] = []

// Add only your real education entries here.
export const education: { degree: string; institution: string; period: string; detail?: string }[] = []
