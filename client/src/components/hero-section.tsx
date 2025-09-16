export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToResume = () => {
    const element = document.getElementById("resume");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-medium text-accent mb-4" data-testid="hero-subtitle">
              SOFTWARE ENGINEER & DATA SCIENTIST
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
              Hi, I'm <span className="gradient-text">Vedansh Arya</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="hero-bio">
              I'm a Computer Science student at Georgia Tech with concentrations in Intelligence and Modeling/Simulations, 
              passionate about building scalable software solutions and leveraging machine learning to solve complex problems. 
              With hands-on experience at Amazon and Elevance Health, I've developed full-stack applications, optimized data 
              processing systems, and built ML models achieving 96% accuracy. I thrive on transforming innovative ideas into 
              production-ready solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-contact"
              >
                Get In Touch
              </button>
              <button
                onClick={scrollToResume}
                className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
                data-testid="button-resume"
              >
                View Resume
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border shadow-2xl" data-testid="hero-photo-placeholder">
                <div className="text-center">
                  <i className="fas fa-user text-6xl text-muted-foreground mb-4"></i>
                  <p className="text-muted-foreground font-medium">Professional Photo</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg" data-testid="hero-code-icon">
                <i className="fas fa-code text-accent-foreground text-xl"></i>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg" data-testid="hero-brain-icon">
                <i className="fas fa-brain text-primary-foreground"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
