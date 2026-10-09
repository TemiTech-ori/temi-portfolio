export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <p className="text-sm font-semibold">
            TEMITOPE<span className="text-violet-500">.</span>
          </p>

          <p className="mt-2 text-xs text-zinc-600">
            Founder of NEXORIA SOLUTIONS
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#work"
            className="transition hover:text-white"
          >
            Work
          </a>

          <a
            href="#services"
            className="transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          © 2026 Ibitoye T. Emmanuel
        </p>

      </div>
    </footer>
  );
}