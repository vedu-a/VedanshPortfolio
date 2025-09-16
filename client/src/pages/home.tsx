import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ResumeSection from "@/components/resume-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans antialiased">
      <Navigation />
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
