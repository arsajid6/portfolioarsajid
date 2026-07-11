import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
