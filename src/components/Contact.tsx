import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/yourusername', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', color: 'hover:text-secondary' },
    { icon: Code2, label: 'LeetCode', url: 'https://leetcode.com/yourprofile', color: 'hover:text-accent' },
    { icon: Mail, label: 'Email', url: 'mailto:your.email@gmail.com', color: 'hover:text-primary' }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card border-border hover-glow">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect!</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">your.email@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">+91 12345 67890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-foreground">Your City, Your State</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border hover-glow">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Find me online</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      className={`justify-start hover-glow ${link.color}`}
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border hover-glow">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input placeholder="John Doe" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" className="bg-background border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="Project Collaboration" className="bg-background border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello!" 
                    rows={5}
                    className="bg-background border-border"
                  />
                </div>
                
                <Button size="lg" className="w-full glow-blue hover-glow">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;