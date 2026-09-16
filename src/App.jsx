import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react'
import './App.css'

const resumeUrl = `${import.meta.env.BASE_URL}Bryan_Zevada_Resume.pdf`
const profilePhotoUrl = `${import.meta.env.BASE_URL}profile-picture.jpg`

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

const contact = {
  email: 'bzevada2@gmail.com',
  phone: '(951) 203-3809',
  phoneHref: 'tel:+19512033809',
  linkedin: 'https://linkedin.com/in/zevadabryan',
  github: 'https://github.com/bryanzevada',
  location: 'Riverside, California',
}

const skillGroups = [
  {
    title: 'Automation',
    icon: Code2,
    skills: ['Cypress', 'Selenium WebDriver', 'Page Object Model', 'JavaScript', 'Java'],
  },
  {
    title: 'CI/CD and Delivery',
    icon: Workflow,
    skills: ['GitLab CI/CD YAML', 'Release health checks', 'Jenkins exposure', 'SonarQube'],
  },
  {
    title: 'Testing and Quality',
    icon: ShieldCheck,
    skills: [
      'Functional testing',
      'Regression testing',
      'Smoke testing',
      'Integration testing',
      'API testing',
      'Performance and load testing',
      'Release validation',
    ],
  },
  {
    title: 'Tools',
    icon: TerminalSquare,
    skills: ['Postman', 'JMeter', 'Jira', 'GitLab'],
  },
  {
    title: 'Programming and Data',
    icon: BookOpenCheck,
    skills: ['JavaScript', 'Java', 'Python', 'SQL'],
  },
  {
    title: 'Cloud/DevOps Direction',
    icon: Cloud,
    skills: [
      'Google Cloud DevOps Associate',
      'CI/CD reliability',
      'Cloud deployment learning',
      'Monitoring project placeholders',
    ],
  },
]

const experience = [
  {
    company: 'MSI',
    location: 'Orange County, CA',
    role: 'Lead QA Engineer / Automation Engineer / QA Manager',
    dates: 'August 2022 to Present',
    bullets: [
      'Lead QA efforts across projects with a focus on end-to-end product quality, release readiness, and defect visibility.',
      'Build and maintain Cypress automation for functional and regression coverage using maintainable framework practices.',
      'Support CI/CD delivery with GitLab YAML release health checks and SonarQube code quality integration.',
      'Perform API and performance testing with tools including Postman and JMeter.',
      'Mentor QA team members and collaborate with developers, product teams, business stakeholders, and offshore partners.',
    ],
  },
  {
    company: 'Parasoft',
    location: 'Monrovia, CA',
    role: 'QA Analyst',
    dates: 'January 2021 to August 2022',
    bullets: [
      'Performed manual and functional testing for web and mobile applications against documented requirements.',
      'Designed and maintained test cases, tracked defects in Jira, and prepared QA reports for stakeholders.',
      'Collaborated with developers and product managers to validate fixes and support release quality.',
      'Conducted GUI testing with attention to user experience and requirement coverage.',
    ],
  },
  {
    company: 'inVerita',
    location: 'Chicago, IL / Los Angeles, CA',
    role: 'Software QA Engineer',
    dates: 'January 2020 to December 2020',
    bullets: [
      'Executed smoke and regression testing across platforms to identify high-priority defects.',
      'Validated database integrity through stored procedures and SQL-based checks.',
      'Supported end-to-end testing for major application releases and contributed to QA best practices.',
    ],
  },
]

const projectFields = [
  'Problem or goal',
  'Architecture',
  'Cloud provider',
  'Tools',
  'Deployment or automation workflow',
  'Monitoring and reliability',
  'Lessons learned',
  'GitHub or live-demo link',
]

const futureProjects = [
  {
    name: 'Cloud CI/CD Portfolio Deployment',
    goal: 'Document a complete static-site deployment workflow with automated validation before release.',
    provider: 'Google Cloud or GitHub Pages',
    tools: 'GitHub Actions, Vite, quality checks',
  },
  {
    name: 'Containerized Test Automation Runner',
    goal: 'Package automated test execution in a repeatable container workflow for release validation.',
    provider: 'Cloud provider to be selected',
    tools: 'Docker, Cypress, CI pipeline',
  },
  {
    name: 'Monitoring and Reliability Lab',
    goal: 'Practice service health dashboards, alerting, and incident-oriented documentation.',
    provider: 'Google Cloud learning environment',
    tools: 'Cloud monitoring tools, logs, uptime checks',
  },
]

const credentials = [
  'B.S. Computer Science, University of California, Riverside',
  'Google Cloud DevOps Associate',
  'Selenium Training',
  'JMeter Performance Testing',
  'REST API Testing',
  'Bilingual: English and Spanish',
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Bryan Zevada home">
        <span className="brand-mark">BZ</span>
        <span>Bryan Zevada</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-action" href={resumeUrl} download>
        <Download size={17} aria-hidden="true" />
        Resume
      </a>
    </header>
  )
}

function SectionHeading({ kicker, title, children }) {
  return (
    <div className="section-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="status-pill">
          <Sparkles size={16} aria-hidden="true" />
          Targeting Cloud and DevOps engineering roles
        </div>
        <h1 id="hero-title">Bryan Zevada</h1>
        <p className="hero-headline">Cloud/DevOps Engineer with QA automation leadership background</p>
        <p className="hero-summary">
          QA Engineering Lead and Automation Engineer with 5+ years across Cypress, Selenium,
          API testing, performance testing, CI/CD release health checks, and software quality
          leadership. Building toward cloud and DevOps roles through automation, reliability,
          and delivery-focused engineering.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} aria-hidden="true" />
            Contact Bryan
          </a>
          <a className="button secondary" href={resumeUrl} download>
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Professional snapshot">
        <div className="profile-orbit">
          <img src={profilePhotoUrl} alt="Bryan Zevada" />
        </div>
        <dl className="snapshot-list">
          <div>
            <dt>Current focus</dt>
            <dd>CI/CD, cloud readiness, reliability</dd>
          </div>
          <div>
            <dt>Core background</dt>
            <dd>QA automation leadership and SDET work</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{contact.location}</dd>
          </div>
        </dl>
        <div className="pipeline-strip" aria-label="Experience bridge">
          <span>Automation</span>
          <span>CI/CD</span>
          <span>Reliability</span>
          <span>Cloud</span>
        </div>
      </aside>
    </section>
  )
}

function About() {
  return (
    <section className="content-section split-section" id="about">
      <SectionHeading kicker="About" title="Quality engineering leadership moving toward cloud delivery">
        Bryan brings hands-on automation depth and team leadership to release-focused engineering work.
      </SectionHeading>
      <div className="summary-card">
        <p>
          Bryan Zevada is a QA Engineer Lead / SDET with more than five years of experience in
          functional, regression, API, performance, and end-to-end automation testing. His work
          centers on building maintainable test coverage, improving release validation, mentoring QA
          team members, and partnering with cross-functional teams throughout the SDLC.
        </p>
        <p>
          His DevOps and cloud direction is grounded in practical delivery work: Cypress and
          Selenium automation, GitLab CI/CD YAML release health checks, API validation, performance
          testing, SonarQube exposure, and a Google Cloud DevOps Associate certification.
        </p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="content-section" id="skills">
      <SectionHeading kicker="Technical strengths" title="Skills recruiters can scan quickly">
        Organized around the work Bryan has done professionally and the DevOps/cloud direction he is pursuing.
      </SectionHeading>
      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article className="skill-card" key={title}>
            <div className="card-title">
              <Icon size={20} aria-hidden="true" />
              <h3>{title}</h3>
            </div>
            <ul className="tag-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="content-section" id="experience">
      <SectionHeading kicker="Experience" title="QA automation, release validation, and engineering collaboration">
        Confirmed professional experience is kept separate from future DevOps project placeholders.
      </SectionHeading>
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={`${job.company}-${job.dates}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="job-header">
                <div>
                  <h3>{job.role}</h3>
                  <p>
                    {job.company} · {job.location}
                  </p>
                </div>
                <span>{job.dates}</span>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturedProject() {
  return (
    <section className="content-section" id="projects">
      <SectionHeading kicker="Featured project" title="Sales Order Entry Application automation case study">
        A recruiter-friendly view of confirmed QA automation and release-validation work.
      </SectionHeading>
      <article className="case-study">
        <div className="case-column">
          <span className="label">Context</span>
          <p>
            Enterprise sales order workflows required dependable validation across functional,
            regression, API, and release scenarios.
          </p>
        </div>
        <div className="case-column">
          <span className="label">Testing challenge</span>
          <p>
            The automation needed to be maintainable for repeated release checks while remaining
            readable for QA team members and business collaborators.
          </p>
        </div>
        <div className="case-column">
          <span className="label">Approach</span>
          <p>
            Bryan used Cypress with Page Object Model practices, reusable commands, fixtures,
            stable selectors, and structured test data to support functional and regression coverage.
          </p>
        </div>
        <div className="case-column">
          <span className="label">Delivery support</span>
          <p>
            GitLab CI/CD YAML release health checks helped connect automation results to release
            readiness and cross-functional validation.
          </p>
        </div>
      </article>
    </section>
  )
}

function FutureProjects() {
  return (
    <section className="content-section project-band" aria-label="Cloud and DevOps project placeholders">
      <SectionHeading kicker="Cloud/DevOps projects" title="Coming soon project placeholders">
        These cards are intentionally marked as future work and are not presented as completed professional projects.
      </SectionHeading>
      <div className="project-grid">
        {futureProjects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card-header">
              <span className="status-tag">Coming soon</span>
              <Cloud size={20} aria-hidden="true" />
            </div>
            <h3>{project.name}</h3>
            <dl>
              {projectFields.map((field) => (
                <div key={field}>
                  <dt>{field}</dt>
                  <dd>
                    {field === 'Problem or goal' && project.goal}
                    {field === 'Cloud provider' && project.provider}
                    {field === 'Tools' && project.tools}
                    {!['Problem or goal', 'Cloud provider', 'Tools'].includes(field) && 'Placeholder to be completed after project work is finished.'}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

function TransitionStory() {
  const bridges = [
    'Automation habits transfer directly to infrastructure repeatability and deployment confidence.',
    'CI/CD release health checks connect QA validation with delivery pipeline reliability.',
    'API, performance, and release testing build a practical foundation for observability and operational readiness.',
    'QA leadership reinforces cross-functional engineering communication, mentoring, and systems thinking.',
  ]

  return (
    <section className="content-section transition-section">
      <SectionHeading kicker="Career direction" title="How QA automation maps to DevOps and cloud work">
        Bryan is positioning his next step around reliability, delivery automation, and cloud-focused engineering.
      </SectionHeading>
      <div className="bridge-list">
        {bridges.map((bridge) => (
          <div className="bridge-item" key={bridge}>
            <CheckCircle2 size={20} aria-hidden="true" />
            <p>{bridge}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="content-section credential-section">
      <SectionHeading kicker="Education and certifications" title="Confirmed credentials and training" />
      <div className="credential-grid">
        {credentials.map((credential) => (
          <div className="credential-item" key={credential}>
            <BadgeCheck size={20} aria-hidden="true" />
            <span>{credential}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <span className="kicker">Contact</span>
        <h2>Recruiters and hiring teams can reach Bryan directly.</h2>
        <p>
          Best fit: Cloud/DevOps Engineer, QA Automation Engineer, SDET, release validation, or
          reliability-focused roles where automation and delivery quality matter.
        </p>
      </div>
      <div className="contact-actions" aria-label="Contact links">
        <a href={`mailto:${contact.email}`}>
          <Mail size={19} aria-hidden="true" />
          {contact.email}
        </a>
        <a href={contact.phoneHref}>
          <Phone size={19} aria-hidden="true" />
          {contact.phone}
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          <BriefcaseBusiness size={19} aria-hidden="true" />
          LinkedIn
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          <Code2 size={19} aria-hidden="true" />
          GitHub
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a href={resumeUrl} download>
          <Download size={19} aria-hidden="true" />
          Resume PDF
        </a>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="quick-facts" aria-label="Quick professional facts">
          <div>
            <BriefcaseBusiness size={21} aria-hidden="true" />
            <span>5+ years QA/SDET experience</span>
          </div>
          <div>
            <Workflow size={21} aria-hidden="true" />
            <span>Cypress, Selenium, CI/CD validation</span>
          </div>
          <div>
            <MapPin size={21} aria-hidden="true" />
            <span>Riverside, California</span>
          </div>
        </section>
        <About />
        <Experience />
        <Skills />
        <FeaturedProject />
        <FutureProjects />
        <TransitionStory />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
