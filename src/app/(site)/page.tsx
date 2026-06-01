import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import WhyYZU from "@/src/components/sections/WhyYZU";
import Projects from "@/src/components/sections/Projects";
import Skills from "@/src/components/sections/Skills";
import ApplicationPortfolio from "@/src/components/sections/ApplicationPortfolio";
import Contact from "@/src/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <ApplicationPortfolio />
      <WhyYZU />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
