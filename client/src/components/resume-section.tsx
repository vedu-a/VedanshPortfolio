export default function ResumeSection() {
  const languages = ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "SQL", "R"];
  const frameworks = ["React", "Node.js", "Angular", "Pandas", "Scikit-learn", "Keras"];
  const cloudDb = ["AWS", "Lambda", "DynamoDB", "S3", "Snowflake", "Teradata"];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="resume-title">Resume</h2>
          <p className="text-lg text-muted-foreground" data-testid="resume-subtitle">
            My professional experience and technical expertise
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8" data-testid="education-title">Education</h3>
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="education-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center" data-testid="education-icon">
                <i className="fas fa-graduation-cap text-primary"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg" data-testid="degree-title">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-accent font-medium" data-testid="university-name">Georgia Institute of Technology</p>
                <p className="text-muted-foreground" data-testid="graduation-info">December 2025 • Atlanta, GA</p>
                <div className="mt-3">
                  <p className="font-medium">Concentrations:</p>
                  <p className="text-muted-foreground" data-testid="concentrations">Intelligence and Modeling/Simulations</p>
                </div>
                <div className="mt-3">
                  <p className="font-medium">Relevant Coursework:</p>
                  <p className="text-muted-foreground" data-testid="coursework">
                    Data Structures & Algorithms, Design & Analysis of Algorithms, Object-Oriented Programming, 
                    Computer Organization & Programming, Systems & Networks, Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8" data-testid="skills-title">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="skills-languages">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <i className="fas fa-code text-primary"></i>
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="skill-item bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`skill-${lang.toLowerCase()}`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="skills-frameworks">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <i className="fas fa-cogs text-accent"></i>
                Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework) => (
                  <span
                    key={framework}
                    className="skill-item bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`skill-${framework.toLowerCase().replace('.', '')}`}
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="skills-cloud">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <i className="fas fa-cloud text-orange-500"></i>
                Cloud & DB
              </h4>
              <div className="flex flex-wrap gap-2">
                {cloudDb.map((tech) => (
                  <span
                    key={tech}
                    className="skill-item bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`skill-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8" data-testid="experience-title">Experience</h3>
          <div className="space-y-8">
            {/* Amazon Experience */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="experience-amazon">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0" data-testid="amazon-logo">
                  <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AMZN</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg" data-testid="amazon-title">
                        Software Development Engineering Intern
                      </h4>
                      <p className="text-accent font-medium" data-testid="amazon-company">Amazon</p>
                      <p className="text-muted-foreground" data-testid="amazon-location">Phoenix, AZ</p>
                    </div>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm" data-testid="amazon-dates">
                      May 2025 - Aug 2025
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2" data-testid="amazon-achievement-1">
                      <i className="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      Developed fullstack Promotion Management Console to modernize legacy deal validation system, 
                      utilizing Harmony UI framework in React-TypeScript frontend, AWS infrastructure, and Java backend
                    </li>
                    <li className="flex items-start gap-2" data-testid="amazon-achievement-2">
                      <i className="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      Reduced validation processing time from 15 minutes to 1 minute (93% improvement) by replacing legacy CSV-based system
                    </li>
                    <li className="flex items-start gap-2" data-testid="amazon-achievement-3">
                      <i className="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      Architected scalable, rule-driven validation pipeline enforcing 30+ business rules across 6+ data models
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Elevance Health Experience */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="experience-elevance">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0" data-testid="elevance-logo">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">ELV</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg" data-testid="elevance-title">
                        Data Science & Machine Learning Intern
                      </h4>
                      <p className="text-accent font-medium" data-testid="elevance-company">Elevance Health</p>
                      <p className="text-muted-foreground" data-testid="elevance-location">Atlanta, GA</p>
                    </div>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm" data-testid="elevance-dates">
                      May 2024 - Aug 2024
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2" data-testid="elevance-achievement-1">
                      <i className="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      Engineered multiple classification models achieving 92.62%-93.43% accuracy for identifying Non-Par claims using Scikit-Learn and XGBoost
                    </li>
                    <li className="flex items-start gap-2" data-testid="elevance-achievement-2">
                      <i className="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      Leveraged Snowflake and Teradata SQL to query and analyze 23 million claims from Anthem database
                    </li>
                    <li className="flex items-start gap-2" data-testid="elevance-achievement-3">
                      <i className="fas fa-check-circle text-accent mt-1 flex-shrink-0"></i>
                      Conducted three exploratory data analyses using Pandas, NumPy, Matplotlib, and Seaborn
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
