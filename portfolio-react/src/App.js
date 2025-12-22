import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm Anayat</h1>
      <p>Frontend Developer | Problem Solver</p>
      <button onClick={() => document.getElementById("projects").scrollIntoView({behavior:"smooth"})}>
        View Projects
      </button>
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>
        I build responsive, clean and scalable web interfaces using modern frontend tools.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <Project title="Facebook Clone" desc="HTML & CSS UI clone" />
        <Project title="VS Code UI" desc="Landing page recreation" />
        <Project title="UniRide" desc="Academic ride-sharing system" />
      </div>
    </section>
  );
}

function Project({ title, desc }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Contact() {
  return (
    <section className="section">
      <h2>Contact</h2>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
    </section>
  );
}

export default App;
