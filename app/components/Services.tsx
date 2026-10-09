const services = [
  {
    number: "01",
    title: "Digital Products",
    description:
      "Designing and building practical digital products that solve real problems and create meaningful user experiences.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Building modern, responsive, and scalable websites and web applications for individuals, startups, and businesses.",
  },
  {
    number: "03",
    title: "AI Solutions",
    description:
      "Exploring and integrating artificial intelligence to automate processes, improve experiences, and create smarter digital products.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Creating clean and intuitive interfaces that make digital products easier, clearer, and more enjoyable to use.",
  },
  {
    number: "05",
    title: "Business Automation",
    description:
      "Using technology to simplify repetitive processes, improve workflows, and help businesses operate more efficiently.",
  },
  {
    number: "06",
    title: "Digital Strategy",
    description:
      "Helping turn digital ideas into practical strategies with the right technology, product direction, and execution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            What I Build
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Technology with a
            <span className="text-zinc-500"> purpose.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Through my work and NEXORIA SOLUTIONS, I combine technology,
            creativity, and problem-solving to create useful digital
            experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-zinc-950 p-8 transition hover:bg-zinc-900 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-600">
                  {service.number}
                </span>

                <span className="text-xl text-zinc-700 transition group-hover:text-violet-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-16 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}