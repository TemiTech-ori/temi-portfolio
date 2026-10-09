export default function About() {
  return (
    <section id="about" className="px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <p className="mt-6 text-sm leading-7 text-zinc-500">
              Founder · Builder · Problem Solver
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              I&apos;m interested in what happens when{" "}
              <span className="text-zinc-500">
                technology meets a real problem.
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
              <p>
                I&apos;m Ibitoye Temitope Emmanuel, a Computer Science graduate and
                technology entrepreneur focused on turning ideas into
                practical digital experiences.
              </p>

              <p>
                My journey started with curiosity about how technology works
                and gradually evolved into building products, experimenting
                with artificial intelligence, designing digital experiences,
                and finding better ways to solve everyday problems.
              </p>

              <p>
                Through NEXORIA SOLUTIONS, I&apos;m building a platform where
                technology, creativity, and problem-solving come together to
                create useful solutions for businesses, communities, and
                individuals.
              </p>
            </div>

            <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-white">01</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Think strategically
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">02</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Build practically
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">03</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Keep evolving
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}