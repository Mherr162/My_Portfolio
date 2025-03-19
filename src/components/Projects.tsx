import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const projects = [
    {
      title: "Bookstore",
      description: "A Java application designed for creating and handling HTTP requests. Developed using IntelliJ IDEA and integrated with Postman for testing APIs. Utilized MySQL as the database to store and manage data efficiently.",
      tags: ["Java", "MySQL", "Postman", "HTTP", "JDBC"],
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      repoLink: "#",
      category: "fullstack"
    },
    {
      title: "Amazing Minds Therapy Website",
      description: "A professional, user-friendly WordPress website for a therapy practice. Customized themes and plugins to align with business branding and functionality needs. Integrated booking systems and contact forms.",
      tags: ["WordPress", "PHP", "CSS", "JavaScript", "SEO"],
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      repoLink: "#",
      category: "frontend"
    },
    {
      title: "Dynamic CMS with Wix",
      description: "Volunteer project for Christ Fellowship. Designed and managed collections to organize dynamic content efficiently. Connected datasets for automated content updates and created customized dynamic pages.",
      tags: ["Wix", "Database", "CMS", "Content Management"],
      image: "https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      repoLink: "#",
      category: "frontend"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <section id="projects" className="py-20 md:py-32" ref={containerRef}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-up-stagger">
          <p className="text-primary font-medium mb-3 animated-element">My Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animated-element">
            Featured Work
          </h2>
          <p className="text-muted-foreground animated-element">
            Explore some of my recent projects and the technologies I've worked with.
          </p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto fade-up-stagger">
          <div className="flex space-x-2 animated-element p-1 glass rounded-full">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeFilter === category.value
                    ? 'bg-primary text-white shadow-md'
                    : 'hover:bg-secondary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up-stagger">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden glass hover:shadow-lg transition-all duration-500 animated-element"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex space-x-3">
                  <a
                    href={project.liveLink}
                    className="text-sm flex items-center hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    className="text-sm flex items-center hover:text-primary transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
