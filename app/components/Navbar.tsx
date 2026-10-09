"use client"
import { Span } from "next/dist/trace";
import React, { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Nexoria", href: "#nexoria" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0  right-0 top-0 z-50 border-b  border-white/10  bg-black/70  backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

<a href="#" className="text-lg font-bold tracking-tight"> 
    TEMITOPE<span className="text-violent-500">.</span>
    </a> 

    <div className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => ( 
            <a
            key={item.label}
            href={item.href}
            className="text-sm text-zinc-400 transition hover:text-white"
            >
                {item.label}
            </a>
        ))}
    </div>
    <a 
    href="#contact" 
    className=" rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-500 hover:text-white md:block"
    >
        Let's Talk
    </a>

    <button onClick={() => setMenuOpen(!menuOpen)}
        className="text-sm text-white md:hidden"
       aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}