export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="projects-subtitle"
          >
            Showcasing my technical expertise through impactful projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cancer Type Classification Project */}
          <div
            className="project-card bg-card rounded-2xl border border-border shadow-lg overflow-hidden"
            data-testid="project-cancer-classification"
          >
            <div
              className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border-b border-border"
              data-testid="project-cancer-mockup"
            >
              <div className="text-center">
                <i className="fas fa-dna text-6xl text-purple-600 mb-4"></i>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                  data-testid="tag-ml"
                >
                  Machine Learning
                </span>
                <span
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  data-testid="tag-python"
                >
                  Python
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                data-testid="cancer-project-title"
              >
                Cancer Type Classification from RNA Sequencing
              </h3>
              <p
                className="text-muted-foreground mb-6"
                data-testid="cancer-project-description"
              >
                This project demonstrates advanced machine learning capabilities
                in healthcare applications. I developed a deep learning model
                that achieved 96% accuracy in classifying 6 different cancer
                types using RNA sequencing data from over 2,900 patients. The
                project involved preprocessing 20,000+ genes, implementing SMOTE
                balancing for dataset optimization, and applying dimensionality
                reduction techniques like PCA and t-SNE. Additionally, I
                explored both supervised methods (SVM achieving 95% accuracy)
                and unsupervised clustering algorithms (DBSCAN, K-means) to
                provide comprehensive classification strategies. This work
                showcases my ability to handle complex biomedical data and
                implement production-ready ML solutions.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span
                    className="flex items-center gap-1"
                    data-testid="cancer-project-dates"
                  >
                    <i className="fas fa-calendar"></i>
                    Jan 2025 - May 2025
                  </span>
                  <span
                    className="flex items-center gap-1"
                    data-testid="cancer-project-accuracy"
                  >
                    <i className="fas fa-chart-line"></i>
                    96% Accuracy
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`${import.meta.env.BASE_URL}Final_Project_Report___ML.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    data-testid="cancer-project-external"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Android Dungeon Crawler Game */}
          <div
            className="project-card bg-card rounded-2xl border border-border shadow-lg overflow-hidden"
            data-testid="project-dungeon-crawler"
          >
            <div
              className="h-64 bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center border-b border-border"
              data-testid="project-game-mockup"
            >
              <div className="text-center">
                <i className="fas fa-gamepad text-6xl text-green-600 mb-4"></i>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                  data-testid="tag-mobile"
                >
                  Mobile Development
                </span>
                <span
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  data-testid="tag-java"
                >
                  Java
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                data-testid="game-project-title"
              >
                Android Dungeon Crawler Game
              </h3>
              <p
                className="text-muted-foreground mb-6"
                data-testid="game-project-description"
              >
                A comprehensive mobile gaming application that showcases
                advanced software architecture and object-oriented design
                principles. Built using Java and Android SDK, this full-featured
                dungeon crawler implements the MVC architecture pattern for
                clean separation of concerns and maintainable code. The game
                features a robust engine with dynamic character progression
                supporting 20+ unique character classes, each with distinct
                abilities and statistical attributes. I implemented
                comprehensive JUnit testing for reliability and used Agile
                development methodologies with Jira for project management and
                Git for collaborative version control. This project demonstrates
                my ability to architect complex systems, implement gaming
                mechanics, and deliver polished user experiences on mobile
                platforms.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span
                    className="flex items-center gap-1"
                    data-testid="game-project-dates"
                  >
                    <i className="fas fa-calendar"></i>
                    Aug 2024 - Dec 2024
                  </span>
                  <span
                    className="flex items-center gap-1"
                    data-testid="game-project-characters"
                  >
                    <i className="fas fa-users"></i>
                    20+ Characters
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




