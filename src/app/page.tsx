import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://portfolioarsajid.vercel.app/#website",
      "url": "https://portfolioarsajid.vercel.app",
      "name": "Abdul Rehman Sajid Portfolio",
      "description": "Portfolio of Abdul Rehman Sajid — Full-Stack Web Developer & UI/UX Designer.",
      "publisher": {
        "@id": "https://portfolioarsajid.vercel.app/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://portfolioarsajid.vercel.app/#person",
      "name": "Abdul Rehman Sajid",
      "url": "https://portfolioarsajid.vercel.app",
      "jobTitle": "Full-Stack Web Developer & UI/UX Designer",
      "sameAs": [
        "https://github.com/arsajid6"
      ],
      "knowsAbout": [
        "Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "PHP",
        "Laravel",
        "WordPress",
        "Point of Sale Systems",
        "Database Architecture"
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
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
