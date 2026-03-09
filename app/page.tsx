import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      <HeroSection />
      
      <ServicesSection />
      
      <Skills />
      
      <ProjectsSection />
      
      <TestimonialsSection />
      
      <CallToActionSection id="contact" />
    </main>
  );
}
