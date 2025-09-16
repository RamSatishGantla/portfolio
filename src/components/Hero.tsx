import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Terminal } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'CSE Student & Future Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-transparent" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm mb-6">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Hello, I'm</span>
          <br />
          <span className="text-foreground">Your Name</span>
        </h1>

        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            &gt; {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions through code. 
          Experienced in full-stack development, algorithms, and emerging technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button size="lg" className="glow-blue hover-glow">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="hover-glow">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <Button variant="ghost" size="icon" className="hover-glow glow-blue">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-glow glow-purple">
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;