import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Nexoria from "./components/Nexoria";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

          <div className="text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
              Founder · Builder · Digital Creator
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
             Ibitoye Temitope Emmanuel
            </h1>

            <p className="mt-6 text-lg text-zinc-400">
              Founder of NEXORIA SOLUTIONS
            </p>
          </div>
        

        <About />
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              About
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Building ideas into digital experiences.
            </h2>
          </div>
        

        <Nexoria />
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              NEXORIA SOLUTIONS
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Technology. Creativity. Solutions.
            </h2>
          </div>
        

       <Projects />
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Projects I'm building.
            </h2>
          </div>
        

       <Services />
       <Journey />
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Services
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Digital solutions for ambitious ideas.
            </h2>
          </div>
        

       <Contact />
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Let's build something meaningful.
            </h2>
          </div>
      
      </main>
      <Footer />
    </>
  );
}