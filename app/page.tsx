import Hero from "@/components/hero";
import AboutSection from "@/components/about";
import ProjectsSection from "@/components/projects";
import SkillsSection from "@/components/skills";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      
      <Footer />
    </>
  );
}
