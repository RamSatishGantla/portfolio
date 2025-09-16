import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', icon: Database, items: ['Node.js', 'Python', 'Express', 'MongoDB'] },
    { category: 'Languages', icon: Code, items: ['JavaScript', 'Python', 'Java', 'C++'] },
    { category: 'Tools', icon: Cpu, items: ['Git', 'Docker', 'AWS', 'Linux'] }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate Computer Science Engineering student with a love for problem-solving and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated CSE student with a passion for technology and innovation. 
              My journey began with curiosity about how things work, leading me to explore 
              various domains of computer science including web development, algorithms, 
              and software engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love tackling complex problems and turning ideas into reality through code. 
              When I'm not coding, you can find me contributing to open-source projects, 
              solving algorithmic challenges, or learning about the latest tech trends.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="glow-purple">Problem Solver</Badge>
              <Badge variant="secondary" className="glow-blue">Team Player</Badge>
              <Badge variant="secondary" className="glow-green">Quick Learner</Badge>
            </div>
          </div>

          <Card className="bg-card border-border hover-glow">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-primary">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LeetCode Problems</span>
                  <span className="font-semibold text-secondary">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GitHub Contributions</span>
                  <span className="font-semibold text-accent">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current CGPA</span>
                  <span className="font-semibold text-primary">8.5/10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.category} className="bg-card border-border hover-glow group">
              <CardContent className="p-6 text-center">
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
                <h4 className="text-lg font-semibold mb-4 text-foreground">{skill.category}</h4>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;