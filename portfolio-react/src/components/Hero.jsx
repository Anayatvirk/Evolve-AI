function Hero() {
  return (
    <section className="hero">
      <h1>Anayat Virk</h1>
      <p>Frontend Developer | React</p>
      <button
        onClick={() =>
          document.getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        View Projects
      </button>
    </section>
  );
}

export default Hero;
