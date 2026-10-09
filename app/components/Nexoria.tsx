"use client";

import { motion } from "framer-motion";
export default function Nexoria() {
  return (
    <section id="nexoria" className="px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
  className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
          <div className="grid lg:grid-cols-2">
            
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-500" />

                <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
                  My Venture
                </p>
              </div>

              <h2 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl">
                NEXORIA
              </h2>

              <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                SOLUTIONS
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                NEXORIA SOLUTIONS is a technology and digital solutions
                venture focused on transforming ideas into practical,
                scalable, and meaningful digital experiences.
              </p>

              <a
                href="#contact"
                className="mt-10 inline-flex rounded-full border border-white/40 bg-white/5  bg-white px-7 py-3.5 text-sm font-bold text-black opacity-100 transition-colors duration-200 hover:bg-violet-500 hover:text-white"
              >
                Explore NEXORIA
              </a>
            </div>

            <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden border-t border-white/10 bg-zinc-900 lg:border-l lg:border-t-0">
              <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

              <div className="relative text-center">
                <p className="text-7xl font-black tracking-tighter text-white sm:text-8xl">
                  N
                </p>

                <p className="mt-4 text-xs uppercase tracking-[0.5em] text-zinc-500">
                  Building what&apos;s next
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}