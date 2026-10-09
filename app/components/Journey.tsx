const journey = [
  {
    year: "2023",
    title: "Started the Journey",
    description:
      "Began my Computer Science journey and developed a deeper interest in technology, software, and digital problem-solving.",
  },
  {
    year: "2024",
    title: "Exploring Technology",
    description:
      "Started experimenting with web development, UI/UX, digital tools, and different ways technology could solve everyday problems.",
  },
  {
    year: "2025",
    title: "Building Real Projects",
    description:
      "Moved beyond learning into building practical digital products and experimenting with AI, automation, and modern development tools.",
  },
  {
    year: "2026",
    title: "Founded NEXORIA",
    description:
      "Graduated from Computer Science and began building NEXORIA SOLUTIONS as a technology venture focused on practical digital solutions.",
  },
];

export default function Journey() {
  return (
    <section className="px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              The Journey
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Still
              <span className="text-zinc-500"> becoming.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-zinc-500">
              Every project, failure, experiment, and lesson has shaped the
              way I think about technology and building useful things.
            </p>
          </div>

          <div className="border-t border-white/10">
            {journey.map((item) => (
              <div
                key={item.year}
                className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[100px_1fr]"
              >
                <p className="text-sm font-medium text-violet-400">
                  {item.year}
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}