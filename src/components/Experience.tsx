
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
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
              }, index * 100);
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

  const experiences = [
    {
      title: "Associate Software Developer",
      company: "Amazing Minds Therapy",
      period: "2024 - Present",
      location: "Miami, FL",
      description: [
        "Designed and developed a professional, user-friendly website using WordPress",
        "Customized themes and plugins to align with the business's branding and functionality needs",
        "Optimized website performance, security, and SEO to improve visibility and user experience",
        "Integrated booking systems, contact forms, and accessibility features to enhance user experience",
        "Collaborated with stakeholders to gather requirements and implement updates based on feedback",
        "Provided ongoing maintenance, troubleshooting, and content management support"
      ]
    },
    {
      title: "Licensed Electrician",
      company: "Baptist Health South Florida",
      period: "04/2020 - Present",
      location: "Miami, FL",
      description: [
        "Installed and tested electrical machinery and switchboard components",
        "Performed generator testing in compliance with NFPA 110, 99 standards",
        "Diagnosed and repaired electrical defects using testing instruments",
        "Inspected and tested systems to ensure compliance with standards"
      ]
    },
    {
      title: "Database Management & CMS Developer (Volunteer)",
      company: "Christ Fellowship",
      period: "12/2024 - Present",
      location: "Miami, FL",
      description: [
        "Designed and managed collections to organize dynamic content efficiently using Wix",
        "Connected datasets to various site elements for automated content updates",
        "Created and customized dynamic pages using Wix Data to display structured content"
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Arts in Computer Science",
    institution: "Florida International University",
    period: "12/2022 - 12/2024",
    location: "Miami, FL"
  };

  return (
    <section id="experience" className="py-20 bg-secondary/30" ref={containerRef}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up-stagger">
          <p className="text-primary font-medium mb-3 animated-element">My Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animated-element">
            Professional Journey
          </h2>
          <p className="text-muted-foreground animated-element">
            A timeline of my professional experience and education.
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-up-stagger">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 animated-element"
            >
              <div className="glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-4">
                  <div className="md:w-1/3">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight size={16} className="mt-1 mr-2 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="mb-12 animated-element">
            <div className="glass rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-4">
                <div className="md:w-1/3">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar size={16} className="mr-2" />
                    {education.period}
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-primary">{education.institution}</p>
                  <p className="text-sm text-muted-foreground">{education.location}</p>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-lg font-medium">{education.degree}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
