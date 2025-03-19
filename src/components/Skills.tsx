
import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = containerRef.current?.querySelectorAll('.animated-element');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, index * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Spring", level: 70 },
        { name: "Django", level: 75 },
        { name: "jQuery", level: 80 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "WordPress", level: 90 },
        { name: "MySQL", level: 80 },
        { name: "Git", level: 75 },
        { name: "Postman", level: 85 },
        { name: "Wix", level: 80 },
      ]
    },
    {
      category: "Operating Systems",
      skills: [
        { name: "Windows", level: 85 },
        { name: "macOS", level: 80 },
        { name: "Linux", level: 75 },
      ]
    }
  ];

  const certifications = [
    {
      name: "Foundations of Cyber Operations",
      issuer: "MITRE"
    },
    {
      name: "Technical Interview Prep",
      issuer: "CodePath"
    },
    {
      name: "AWS Cloud Foundation",
      issuer: "Amazon Academy"
    },
    {
      name: "Python Developer",
      issuer: "Sololearn"
    },
    {
      name: "Electrical Journeyman License",
      issuer: "Broward County, Florida"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30" ref={containerRef}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up-stagger">
          <p className="text-primary font-medium mb-3 animated-element">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animated-element">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground animated-element">
            A comprehensive overview of my technical skills and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="glass rounded-2xl p-8 fade-up-stagger">
              <h3 className="text-xl font-semibold mb-6 animated-element">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="animated-element">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto glass rounded-2xl p-8 fade-up-stagger">
          <h3 className="text-xl font-semibold mb-6 text-center animated-element">Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-4 animated-element">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-4 bg-secondary/50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-medium text-base">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto glass rounded-2xl p-8 fade-up-stagger">
          <h3 className="text-xl font-semibold mb-6 text-center animated-element">Languages</h3>
          
          <div className="flex justify-center gap-12 animated-element">
            <div className="text-center">
              <p className="font-medium">English</p>
              <div className="flex mt-2">
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-secondary mx-1"></span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Proficient</p>
            </div>
            
            <div className="text-center">
              <p className="font-medium">Spanish</p>
              <div className="flex mt-2">
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
                <span className="h-4 w-4 rounded-full bg-primary mx-1"></span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Native</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
