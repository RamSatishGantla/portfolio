import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Your University Name',
      duration: '2021 - 2025',
      cgpa: '8.5/10',
      highlights: ['Data Structures & Algorithms', 'Database Management', 'Software Engineering', 'Machine Learning']
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Your School Name',
      duration: '2019 - 2021',
      cgpa: '92%',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    }
  ];

  const achievements = [
    'Dean\'s List for Academic Excellence',
    'Winner - University Coding Competition 2023',
    'Published Research Paper on AI Applications',
    'Google Developer Student Clubs Lead'
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Google Cloud Associate',
    'Meta Frontend Developer',
    'Microsoft Azure Fundamentals'
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover-glow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <Badge variant="secondary" className="mb-2">{edu.duration}</Badge>
                      <p className="text-accent font-semibold">CGPA: {edu.cgpa}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Key Subjects:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card className="bg-card border-border hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-accent" />
                  <h4 className="text-lg font-semibold text-foreground">Achievements</h4>
                </div>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card border-border hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-secondary" />
                  <h4 className="text-lg font-semibold text-foreground">Certifications</h4>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;