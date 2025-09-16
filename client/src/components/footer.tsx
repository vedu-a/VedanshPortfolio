export default function Footer() {
  return (
    <footer className="bg-secondary py-8 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground" data-testid="copyright">
              © 2024 Vedansh Arya. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:vedansh.arya2004@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://linkedin.com/in/vedansh-arya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/vedu-a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="tel:706-572-1199"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-phone"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
