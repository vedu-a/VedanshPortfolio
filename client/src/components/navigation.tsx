import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - 100;
        if (sectionTop <= 0) {
          current = section.getAttribute("id") || "";
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl gradient-text" data-testid="logo">
            Vedansh Arya
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors ${
                activeSection === "home"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className={`transition-colors ${
                activeSection === "resume"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              data-testid="nav-resume"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-colors ${
                activeSection === "projects"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors ${
                activeSection === "contact"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          <button className="md:hidden p-2" data-testid="mobile-menu-button">
            <i className="fas fa-bars text-foreground"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
