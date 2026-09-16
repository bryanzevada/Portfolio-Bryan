import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Check,
  ChevronDown, Cloud, Code2, Download, Gauge, GraduationCap,
  Mail, MapPin, Phone, ShieldCheck, TerminalSquare, Workflow,
} from 'lucide-react'
import './App.css'

const resumeUrl = `${import.meta.env.BASE_URL}Bryan_Zevada_Resume.pdf`
const profilePhotoUrl = `${import.meta.env.BASE_URL}profile-picture.jpg`

const navItems = [
  ['About', '#about'], ['Experience', '#experience'], ['Capabilities', '#skills'],
  ['Work', '#projects'], ['Contact', '#contact'],
]

const contact = {
  email: 'bzevada2@gmail.com', phone: '(951) 203-3809', phoneHref: 'tel:+19512033809',
  linkedin: 'https://linkedin.com/in/zevadabryan', github: 'https://github.com/bryanzevada',
  location: 'Riverside, California',
}

const evidenceStages = [
  { number: '01', title: 'Automation', detail: 'Cypress, Selenium, reusable test architecture', status: 'Professional experience' },
  { number: '02', title: 'Validation', detail: 'Functional, API, performance, and release testing', status: 'Professional experience' },
  { number: '03', title: 'CI/CD', detail: 'GitLab YAML health checks and Jenkins exposure', status: 'Professional experience' },
  { number: '04', title: 'Reliability', detail: 'Release confidence, quality signals, collaboration', status: 'Transferable foundation' },
  { number: '05', title: 'Cloud', detail: 'Building toward cloud delivery and operations work', status: 'Career direction', future: true },
]

const experience = [
  {
    company: 'MSI', location: 'Orange County, CA',
    role: 'Lead QA Engineer / Automation Engineer / QA Manager', dates: 'Aug 2022 - Present',
    summary: 'Leading quality engineering across automation, release readiness, and team delivery.',
    bullets: [
      'Build and maintain Cypress automation for functional and regression coverage using maintainable framework practices.',
      'Support CI/CD delivery with GitLab YAML release health checks and SonarQube code quality integration.',
      'Perform API and performance testing with Postman and JMeter.',
      'Mentor QA team members and collaborate with developers, product teams, stakeholders, and offshore partners.',
    ],
  },
  {
    company: 'Parasoft', location: 'Monrovia, CA', role: 'QA Analyst', dates: 'Jan 2021 - Aug 2022',
    summary: 'Supporting release quality through structured testing, defect visibility, and collaboration.',
    bullets: [
      'Performed manual and functional testing for web and mobile applications against documented requirements.',
      'Designed and maintained test cases, tracked defects in Jira, and prepared QA reports for stakeholders.',
      'Partnered with developers and product managers to validate fixes and support releases.',
    ],
  },
  {
    company: 'inVerita', location: 'Chicago, IL / Los Angeles, CA', role: 'Software QA Engineer', dates: 'Jan 2020 - Dec 2020',
    summary: 'Validating application releases across platforms, data, and critical user workflows.',
    bullets: [
      'Executed smoke and regression testing across platforms to identify high-priority defects.',
      'Validated database integrity through stored procedures and SQL-based checks.',
      'Supported end-to-end testing for major application releases and contributed to QA best practices.',
    ],
  },
]

const capabilities = [
  { index: '01', title: 'Automation systems', icon: Code2, description: 'Maintainable coverage for critical workflows and repeated release validation.', tools: ['Cypress', 'Selenium WebDriver', 'Page Object Model', 'Reusable commands', 'Fixtures', 'Stable selectors'] },
  { index: '02', title: 'Delivery confidence', icon: Workflow, description: 'Quality signals integrated into the software delivery lifecycle.', tools: ['GitLab CI/CD YAML', 'Release health checks', 'Jenkins exposure', 'SonarQube', 'Agile / Scrum'] },
  { index: '03', title: 'Quality engineering', icon: ShieldCheck, description: 'Layered validation across interfaces, services, performance, and releases.', tools: ['Functional', 'Regression', 'Smoke', 'Integration', 'REST API', 'Performance and load'] },
  { index: '04', title: 'Programming and tools', icon: TerminalSquare, description: 'Hands-on technical tools used to build, inspect, and validate software.', tools: ['JavaScript', 'Java', 'Python', 'SQL', 'Postman', 'JMeter', 'Jira', 'GitLab'] },
]

const caseStudyFlow = [
  { title: 'Test design', detail: 'Critical sales order workflows and release scenarios' },
  { title: 'Test architecture', detail: 'Cypress with Page Object Model practices' },
  { title: 'Reusable coverage', detail: 'Commands, fixtures, selectors, and test data' },
  { title: 'Pipeline signal', detail: 'GitLab CI/CD YAML release health checks' },
  { title: 'Release validation', detail: 'Results shared across QA and delivery partners' },
]

const futureProjects = [
  { name: 'Cloud CI/CD Portfolio Deployment', goal: 'Document a complete static-site deployment workflow with automated validation before release.', provider: 'Google Cloud or GitHub Pages', tools: 'GitHub Actions, Vite, quality checks' },
  { name: 'Containerized Test Automation Runner', goal: 'Package automated test execution in a repeatable container workflow for release validation.', provider: 'Cloud provider to be selected', tools: 'Docker, Cypress, CI pipeline' },
  { name: 'Monitoring and Reliability Lab', goal: 'Practice service health dashboards, alerting, and incident-oriented documentation.', provider: 'Google Cloud learning environment', tools: 'Cloud monitoring tools, logs, uptime checks' },
]

const credentials = [
  { title: 'B.S. Computer Science', source: 'University of California, Riverside', icon: GraduationCap },
  { title: 'Google Cloud DevOps Associate', source: 'Certification', icon: Cloud },
  { title: 'Selenium Training', source: 'Technical training', icon: BadgeCheck },
  { title: 'JMeter Performance Testing', source: 'Technical training', icon: Gauge },
  { title: 'REST API Testing', source: 'Technical training', icon: Workflow },
  { title: 'English and Spanish', source: 'Bilingual', icon: BriefcaseBusiness },
]

function Header({ progress }) {
  return (
    <header className="site-header">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <a className="brand" href="#top" aria-label="Bryan Zevada home">
        <span className="brand-mark" aria-hidden="true"><span>BZ</span><i /><i /></span>
        <span className="brand-name">Bryan Zevada</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a className="header-action" href={resumeUrl} download><Download size={16} aria-hidden="true" />Resume</a>
    </header>
  )
}

function SectionIntro({ number, eyebrow, title, children }) {
  return (
    <div className="section-intro reveal">
      <div className="section-index" aria-hidden="true">{number}</div>
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <div className="hero-status"><span />Targeting Cloud and DevOps engineering roles</div>
        <h1 id="hero-title">Bryan<br />Zevada</h1>
        <p className="hero-headline">Cloud/DevOps Engineer with QA automation leadership background</p>
        <p className="hero-summary">I bring more than five years of automation, CI/CD validation, API and performance testing, and engineering leadership to the next challenge: reliable cloud delivery.</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href={`mailto:${contact.email}`}><Mail size={18} aria-hidden="true" />Contact Bryan</a>
          <a className="button secondary" href={resumeUrl} download><Download size={18} aria-hidden="true" />Resume PDF</a>
        </div>
        <div className="hero-proof" aria-label="Professional highlights">
          <div><strong>5+</strong><span>Years in QA and SDET work</span></div>
          <div><strong>Lead</strong><span>Automation and QA leadership</span></div>
          <div><strong>CI/CD</strong><span>Release health validation</span></div>
        </div>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame"><img src={profilePhotoUrl} alt="Bryan Zevada" /><div className="portrait-scan" aria-hidden="true" /></div>
        <figcaption><span>Current focus</span>Reliability, delivery automation, and cloud engineering</figcaption>
        <div className="portrait-location"><MapPin size={15} aria-hidden="true" />{contact.location}</div>
      </figure>
      <a className="hero-scroll" href="#about">Explore the evidence<ArrowDown size={16} aria-hidden="true" /></a>
    </section>
  )
}

function EvidenceBridge() {
  return (
    <section className="evidence-section" id="about">
      <div className="evidence-lead reveal">
        <span className="eyebrow">The throughline</span><h2>I engineer confidence into delivery.</h2>
        <p>My move toward cloud and DevOps grows from work I already do: automate repeatable checks, surface release risk, and help engineering teams ship with clearer quality signals.</p>
      </div>
      <ol className="evidence-track" aria-label="Career progression toward cloud engineering">
        {evidenceStages.map((stage) => (
          <li className={`evidence-stage reveal${stage.future ? ' future' : ''}`} key={stage.title}>
            <span className="stage-number">{stage.number}</span><div className="stage-node" aria-hidden="true" />
            <h3>{stage.title}</h3><p>{stage.detail}</p><span className="proof-label">{stage.status}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Experience() {
  return (
    <section className="content-section experience-section" id="experience">
      <SectionIntro number="01" eyebrow="Experience" title="Leadership grounded in hands-on quality engineering">Confirmed professional experience across automation, release validation, defect visibility, and cross-functional delivery.</SectionIntro>
      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-row reveal" key={`${job.company}-${job.dates}`}>
            <div className="job-meta"><span className="job-dates">{job.dates}</span><h3>{job.company}</h3><span>{job.location}</span></div>
            <div className="job-detail"><h4>{job.role}</h4><p className="job-summary">{job.summary}</p><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="content-section capability-section" id="skills">
      <SectionIntro number="02" eyebrow="Capability map" title="The systems behind release confidence">Organized by engineering outcome, with cloud learning kept distinct from confirmed professional tools.</SectionIntro>
      <div className="capability-list">
        {capabilities.map(({ index, title, icon: Icon, description, tools }) => (
          <article className="capability-row reveal" key={title}>
            <div className="capability-title"><span>{index}</span><Icon size={23} aria-hidden="true" /><h3>{title}</h3></div>
            <p>{description}</p><ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="direction-note reveal"><Cloud size={24} aria-hidden="true" /><div><span>Cloud / DevOps direction</span><p>Google Cloud DevOps Associate certification, CI/CD reliability, and cloud deployment learning.</p></div><span className="direction-tag">Career direction</span></div>
    </section>
  )
}

function FeaturedProject() {
  return (
    <section className="content-section case-section" id="projects">
      <SectionIntro number="03" eyebrow="Selected work" title="Sales Order Entry Application">A confirmed example of maintainable automation connected to release validation.</SectionIntro>
      <div className="case-layout reveal">
        <aside className="case-context"><span className="proof-label">Confirmed professional work</span><h3>Automation designed to remain useful release after release.</h3><p>Enterprise sales order workflows required dependable functional and regression coverage, readable framework patterns, and clear signals for release readiness.</p>
          <dl><div><dt>Framework</dt><dd>Cypress</dd></div><div><dt>Pattern</dt><dd>Page Object Model</dd></div><div><dt>Delivery</dt><dd>GitLab CI/CD YAML</dd></div><div><dt>Collaboration</dt><dd>QA and cross-functional teams</dd></div></dl>
        </aside>
        <div className="workflow-panel" aria-label="Sales Order Entry automation workflow">
          <div className="workflow-label"><Workflow size={18} aria-hidden="true" />Release confidence workflow</div>
          <ol>{caseStudyFlow.map((step, index) => <li key={step.title}><span className="workflow-number">0{index + 1}</span><div><h4>{step.title}</h4><p>{step.detail}</p></div>{index < caseStudyFlow.length - 1 && <ArrowRight className="workflow-arrow" size={20} aria-hidden="true" />}</li>)}</ol>
        </div>
      </div>
    </section>
  )
}

function FutureProjects() {
  return (
    <section className="content-section lab-section">
      <div className="lab-heading reveal"><div><span className="eyebrow">Cloud / DevOps project lab</span><h2>Next, I am turning the direction into proof.</h2></div><p>These are future projects, not completed professional work. Each entry will be replaced with architecture, workflow, monitoring, lessons, and source links after completion.</p></div>
      <div className="lab-list">{futureProjects.map((project, index) => (
        <details className="lab-item reveal" key={project.name}><summary><span className="lab-number">0{index + 1}</span><span className="lab-title"><strong>{project.name}</strong><small>Coming soon</small></span><ChevronDown size={22} aria-hidden="true" /></summary>
          <div className="lab-detail"><div><span>Problem or goal</span><p>{project.goal}</p></div><div><span>Cloud provider</span><p>{project.provider}</p></div><div><span>Planned tools</span><p>{project.tools}</p></div><div><span>Documentation</span><p>Architecture, automation workflow, monitoring, lessons learned, and links will be added after completion.</p></div></div>
        </details>))}</div>
    </section>
  )
}

function TransitionStory() {
  const bridges = [['Automate', 'Turn repeated work into dependable, maintainable systems.'], ['Observe', 'Use API, performance, and quality signals to understand system behavior.'], ['Validate', 'Connect technical evidence to release readiness and delivery decisions.'], ['Collaborate', 'Lead across QA, development, product, business, and offshore teams.']]
  return (
    <section className="transition-section"><div className="transition-copy reveal"><span className="eyebrow">Why the move makes sense</span><h2>The role is changing. The engineering habits already transfer.</h2></div>
      <div className="transition-grid">{bridges.map(([title, value], index) => <article className="transition-item reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{value}</p></article>)}</div>
    </section>
  )
}

function Credentials() {
  return (
    <section className="content-section credential-section"><SectionIntro number="04" eyebrow="Education and training" title="A technical foundation built for the next chapter" />
      <div className="credential-list">{credentials.map(({ title, source, icon: Icon }) => <article className="credential-item reveal" key={title}><Icon size={21} aria-hidden="true" /><div><h3>{title}</h3><p>{source}</p></div><Check size={17} aria-hidden="true" /></article>)}</div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy reveal"><span className="eyebrow">Start a conversation</span><h2>Looking for an engineer who connects quality with delivery?</h2><p>I am targeting Cloud/DevOps, QA Automation, SDET, release validation, and reliability-focused roles where automation and delivery confidence matter.</p><a className="button primary" href={`mailto:${contact.email}`}><Mail size={18} aria-hidden="true" />Email Bryan</a></div>
      <address className="contact-list reveal"><a href={`mailto:${contact.email}`}><Mail size={18} aria-hidden="true" /><span><small>Email</small>{contact.email}</span></a><a href={contact.phoneHref}><Phone size={18} aria-hidden="true" /><span><small>Phone</small>{contact.phone}</span></a><a href={contact.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} aria-hidden="true" /><span><small>LinkedIn</small>zevadabryan</span><ArrowUpRight size={16} aria-hidden="true" /></a><a href={contact.github} target="_blank" rel="noreferrer"><Code2 size={18} aria-hidden="true" /><span><small>GitHub</small>bryanzevada</span><ArrowUpRight size={16} aria-hidden="true" /></a><a href={resumeUrl} download><Download size={18} aria-hidden="true" /><span><small>Resume</small>Download PDF</span></a></address>
    </section>
  )
}

function App() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const updateProgress = () => { const available = document.documentElement.scrollHeight - window.innerHeight; setProgress(available > 0 ? window.scrollY / available : 0) }
    updateProgress(); window.addEventListener('scroll', updateProgress, { passive: true }); window.addEventListener('resize', updateProgress)
    return () => { window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress) }
  }, [])
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.12 })
    items.forEach((item) => observer.observe(item)); return () => observer.disconnect()
  }, [])
  return <><Header progress={progress} /><main><Hero /><EvidenceBridge /><Experience /><Capabilities /><FeaturedProject /><FutureProjects /><TransitionStory /><Credentials /><Contact /></main></>
}

export default App
