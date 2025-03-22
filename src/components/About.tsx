
import React, { useEffect, useRef } from 'react';
import { Activity, Code, Server, Zap } from 'lucide-react';

const About: React.FC = () => {
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
              }, index * 150);
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

  const skills = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Frontend Development',
      description: 'I build responsive, user-friendly interfaces using React, Next.js, JavaScript, HTML, and CSS. My work focuses on performance, accessibility, and seamless user experiences. Notable projects include Amazing Minds Therapy’s website, where I optimized UI, integrated third-party services, and enhanced engagement.'
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: 'Backend Development',
      description: 'Working with Java, Python, Django, and Node.js to create robust server solutions.'
    },
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: 'Performance Optimization',
      description: 'Improving website performance, security, and SEO for better visibility.'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Technical Background',
      description: 'Leveraging experience as a licensed electrician for unique problem-solving skills.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32" ref={containerRef}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up-stagger">
          <p className="text-primary font-medium mb-3 animated-element">About Me</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animated-element">
            From Electrician to Developer
          </h2>
          <p className="text-muted-foreground animated-element text-justify mx-auto max-w-[800px] leading-relaxed">
            <span className="block text-center font-semibold max-w-[800px] mx-auto">
              Driven Problem Solver Moving from Electrical Engineering to Software Development
            </span>
            <br />
            I am a Magna Cum Laude Computer Science graduate (Class of 2024, GPA: 3.7) embarking on an exciting journey from a hands-on profession as a licensed electrician to the dynamic world of software development. My expertise in electrical systems has helped me improve my analytical thinking, problem-solving ability, and attention to detail—all of which are vital talents in software development.
            With a solid foundation in computer science fundamentals and software development, I am always honing my programming skills and aggressively looking for opportunities to apply my knowledge in real-world projects. I'm excited to apply my technical versatility, critical thinking, and dedication to continual learning in a software engineering career.

            Let's talk—I'm eager to make an impact!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up-stagger">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover:shadow-md transition-all duration-300 animated-element"
            >
              <div className="bg-secondary inline-flex items-center justify-center p-3 rounded-xl mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center fade-up-stagger">
          <div className="animated-element">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              My journey began in the electrical field, where I gained valuable hands-on experience installing and testing electrical machinery and systems.
              This technical foundation provided me with strong problem-solving skills and attention to detail.
            </p>
            <p className="text-muted-foreground mb-4">
              After completing my degree in Computer Science at Florida International University, I transitioned to software development, combining my
              technical know-how with newly acquired programming skills.
            </p>
            <p className="text-muted-foreground">
              Now as an Associate Software Developer at Amazing Minds Therapy, I develop and maintain professional, user-friendly websites
              while continuously expanding my knowledge in modern web technologies.
            </p>
          </div>

          <div className="animated-element">
            <div className="relative">
              <div className="aspect-video bg-secondary rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl"></div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-6">
                    <h4 className="text-lg font-medium mb-2">Contact Information</h4>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>📱 +1-(786)-319-6002</p>
                      <p>✉️ michelhm22@icloud.com</p>
                      <p>🔗 linkedin.com/in/michel-herrera-760aa1288</p>
                      <p>📍 Miami, Florida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
