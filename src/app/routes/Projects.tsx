export default function Projects() {
  const projects = 1;

  return projects > 0 ? (
    <section
      id="projects"
      className="md:gap-18 container flex flex-col gap-8 xl:gap-24"
    >
      <h1 className="text-center text-4xl font-bold md:text-6xl">Projects</h1>
      <p className="text-center md:text-xl">
        Sorry, no projects available right now
      </p>
    </section>
  ) : (
    <></>
  );
}
