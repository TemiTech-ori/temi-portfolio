"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <motion.div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Founder · Product Builder · Digital Creator
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            I build digital
            <br />
            <span className="text-zinc-500">solutions that matter.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I&apos;m Ibitoye Temitope Emmanuel, founder of NEXORIA SOLUTIONS.
            I create digital products, experiences, and technology solutions
            that turn ideas into something people can actually use.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="rounded-full border border-white/40 bg-white/5  bg-white px-7 py-3.5 text-center text-sm font-bold text-black opacity-100 transition-colors duration-200 hover:bg-violet-500 hover:text-white"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white opacity-100 transition-colors duration-200 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
            >
              Let&apos;s Work Together
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-zinc-500">
            <span>Based in Nigeria</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
            <span>Building with technology</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
            <span>Founder of NEXORIA</span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-violet-600/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
            <Image
              src="/portrait.jpeg"
              alt="Temitope Emmanuel"
              width={800}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-24">
              <p className="text-sm font-medium text-white">
                Ibitoye Temitope Emmanuel
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                Founder, NEXORIA SOLUTIONS
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}