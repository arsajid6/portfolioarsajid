import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <WhyWorkWithMe />
      <WorkProcess />
      <Contact />
    </>
  );
}
