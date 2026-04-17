// projects list, edit entries here to change cards
const projects = [
  {
    title: 'Retail Break Scheduler',
    tag: 'Full-stack web app',
    desc:
      'Automatically schedules employee breaks in compliance with state labor laws while optimizing department coverage. Turns a task that takes management or admin employees hours each week into just one single click.',
    stack: ['React', 'Node.js', 'Express', 'Scheduling'],
  },
  {
    title: 'PokeGrade',
    tag: 'CIS 444 class project',
    desc:
      'Scans live eBay listings for Pokémon cards and runs image-based centering analysis to look for cards that may be undergraded. It helps find valuable cards that may otherwise go unnoticed.',
    stack: ['React', 'eBay API', 'Image analysis', 'Node.js'],
  },
  {
    title: 'KillerApp',
    tag: 'Game logistics platform',
    desc:
      'Automates the classic Assassins game: randomized team assignment, elimination tracking, and a video upload / moderator verification so organizers don\'t get overwhelmed with DMs.',
    stack: ['React', 'Auth', 'Video uploads', 'Admin dashboard'],
  },
];

// reusable card for one project, reads props from projects list
function ProjectCard({ title, tag, desc, stack }) {
  return (
    <article className="project-card">
      <span className="project-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="project-stack">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

// home page, hero plus about, projects, contact sections
function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Portfolio · Spring 2026</p>
          <h1>
            <span className="accent">Kaden Campbell</span>'s Portfolio (and Blog)
          </h1>
          <p className="hero-sub">
            Computer science student at California State University San Marcos,
            learning web development.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">See projects</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p className="lead">
          I'm currently enrolled at CSUSM taking CIS 444 to learn Web Development. Over
          the past few weeks I've gone from basic HTML and CSS to working on
          full-stack apps: writing JavaScript on both the frontend and backend,
          setting up Express APIs, and creating interactive UIs out of React
          components. This portfolio is a React app that I deployed to GitHub Pages.
        </p>
        <p>
          Outside of class, I work on ideas that come from my everyday life.
          My work in retail helped me find a need for better automation,
          and my trading card collecting hobby benefits from the tool I'm working on.
          During high school, I ran the Senior Assassins game and identified a need for a
          better solution than Excel spreadsheets and Instagram DMs. I like creating
          projects where the software fixes a problem or annoyance I have.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="section-sub">
          Three apps I've made (or am in the process of making):
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p className="lead">
          The best way to reach me is over email. I'm also on GitHub if you
          want to see what I've been working on.
        </p>
        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href="mailto:campb247@csusm.edu">campb247@csusm.edu</a>
          </li>
          <li>
            <span className="contact-label">GitHub</span>
            <a
              href="https://github.com/campb247"
              target="_blank"
              rel="noreferrer"
            >
              github.com/campb247
            </a>
          </li>
          <li>
            <span className="contact-label">School</span>
            <span>California State University San Marcos</span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
