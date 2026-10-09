"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Projects() {
  return (
    <section id="work" className="px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Selected Work
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Ideas turned into
            <span className="text-zinc-500"> real products.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A selection of digital products and projects I&apos;ve worked on,
            explored, and brought to life.
          </p>
        </div>

        <motion.div
  className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            
            <div className="group relative min-h-[420px] overflow-hidden bg-zinc-900">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.18),_transparent_60%)]" />

  <div className="relative flex min-h-[420px] items-center justify-center p-6 sm:p-10">
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-violet-500/10">
      <Image
        src="/acada-plus.png"
        alt="ACADA+ campus platform interface"
        width={1200}
        height={800}
        className="h-auto w-full object-contain"
      />
    </div>
  </div>
</div>
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                Featured Project
              </p>

              <h3 className="mt-5 text-4xl font-bold tracking-tight">
                ACADA+
              </h3>

              <p className="mt-6 text-base leading-8 text-zinc-400">
                A campus-focused digital platform designed to connect
                students, lecturers, alumni, and campus vendors in one
                ecosystem.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Product Design",
                  "Web App",
                  "Supabase",
                  "PWA",
                  "Social Platform",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://acadaplus.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
               className="mt-10 inline-flex rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-bold text-black opacity-100 transition-colors duration-200 hover:bg-violet-500 hover:text-white"
              >
                Visit ACADA+
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}