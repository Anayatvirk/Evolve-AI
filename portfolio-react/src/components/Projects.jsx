import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    { title: "Facebook UI Clone", desc: "HTML & CSS UI clone" },
    { title: "VS Code Landing Page", desc: "Frontend landing page recreation" },
    { title: "UniRide System", desc: "Academic ride-sharing platform" },
  ];

  return (
    <section className="section" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
