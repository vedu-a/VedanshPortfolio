import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="contact-title">Let's Connect</h2>
          <p className="text-lg text-muted-foreground" data-testid="contact-subtitle">
            Ready to discuss opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a
            href="mailto:vedansh.arya2004@gmail.com"
            className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all text-center"
            data-testid="contact-email"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <i className="fas fa-envelope text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-2" data-testid="email-address">vedansh.arya2004@gmail.com</p>
            <p className="text-primary text-sm font-medium">Send a message →</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/vedansh-arya"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all text-center"
            data-testid="contact-linkedin"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <i className="fab fa-linkedin text-blue-600 text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-sm mb-2">Connect professionally</p>
            <p className="text-blue-600 text-sm font-medium">View profile →</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vedu-a"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all text-center"
            data-testid="contact-github"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
              <i className="fab fa-github text-gray-700 text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground text-sm mb-2">Explore my code</p>
            <p className="text-gray-700 text-sm font-medium">View repositories →</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm" data-testid="contact-form-container">
          <h3 className="text-2xl font-bold mb-6 text-center" data-testid="form-title">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
                data-testid="input-subject"
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or opportunity..."
                className="resize-none"
                required
                data-testid="input-message"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
