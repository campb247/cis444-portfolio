const projects = [
  {
    title: 'Retail Break Scheduler',
    tag: 'Full-stack web app',
    desc:
      'Automatically schedules employee breaks in compliance with state labor laws while optimizing department coverage. Turns a stressful manual puzzle into a single click for floor managers.',
    stack: ['React', 'Node.js', 'Express', 'Scheduling'],
  },
  {
    title: 'PokeGrade',
    tag: 'CIS 444 class project',
    desc:
      'Scans live eBay listings for Pokémon cards and runs image-based centering analysis to surface cards that may be undergraded — flagging hidden value most buyers would miss.',
    stack: ['React', 'eBay API', 'Image analysis', 'Node.js'],
  },
  {
    title: 'KillerApp',
    tag: 'Game logistics platform',
    desc:
      'Automates the classic Senior Assassins game: randomized team assignment, elimination tracking, and a video upload / moderator verification pipeline so organizers do not get buried in DMs.',
    stack: ['React', 'Auth', 'Video uploads', 'Admin dashboard'],
  },
];

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

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Portfolio · Spring 2026</p>
          <h1>
            Hi, I'm <span className="accent">Kaden Campbell</span>.
          </h1>
          <p className="hero-sub">
            Computer science student at California State University San Marcos,
            learning to build things on the web.
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
          I'm a student at CSUSM taking CIS 444 — Intro to Web Development. Over
          the past ten weeks I've gone from plain HTML and CSS to building
          full-stack apps: writing JavaScript on both sides of the wire,
          standing up Express APIs, and composing interactive UIs out of React
          components. This portfolio itself is a React app deployed to GitHub
          Pages.
        </p>
        <p>
          Outside of class I work on ideas that come from everyday life —
          retail jobs that need better tooling, card collecting hobbies,
          campus games my friends play. I like projects where the software
          quietly removes a real annoyance.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="section-sub">
          Three apps I'm either building or shipping right now.
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
