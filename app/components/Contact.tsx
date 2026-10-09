export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
              Let&apos;s Connect
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Have an idea?
              <br />
              <span className="text-zinc-500">
                Let&apos;s build something meaningful.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Whether you&apos;re looking to build a digital product, improve
              an existing idea, explore AI, or work on something completely
              new, I&apos;d love to hear about it.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:emmanueltemi77@gmail.com"
                className="rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-center text-sm font-bold text-black opacity-100 transition-colors duration-200 hover:bg-violet-500 hover:text-white"
              >
                 Email Me ↗
              </a>

              <a
                href="https://www.linkedin.com/in/temitope-emmanuel-859016440"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white opacity-100 transition-colors duration-200 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
              >
                Connect on LinkedIn ↗
              </a>
              <a
  href="https://wa.me/2348038798704?text=Hello%20Temitope%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white opacity-100 transition-colors duration-200 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
>
  Chat on WhatsApp ↗
</a>
            </div>
          </div>

          <div className="grid border-t border-white/10 sm:grid-cols-3">
            <div className="border-b border-white/10 p-8 sm:border-b-0 sm:border-r">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Email
              </p>

              <p className="mt-3 text-sm text-zinc-400">
                emmanueltemi77@gmail.com
              </p>
            </div>

            <div className="border-b border-white/10 p-8 sm:border-b-0 sm:border-r">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Venture
              </p>

              <p className="mt-3 text-sm text-zinc-400">
                NEXORIA SOLUTIONS
              </p>
            </div>

            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Location
              </p>

              <p className="mt-3 text-sm text-zinc-400">
                Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}