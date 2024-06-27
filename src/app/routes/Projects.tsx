export default function Projects() {
  const projects = 0;

  return projects > 0 ? (
    <section id="projects" className="px-2 py-8 md:py-12 md:pb-8 lg:py-24">
      <h1 className="text-center text-4xl font-bold md:text-6xl">Projects</h1>
    </section>
  ) : (
    <></>
  );
}
