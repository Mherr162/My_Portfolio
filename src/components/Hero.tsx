
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
              }, index * 200);
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

  // Animation for the dynamic background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      if (canvas && ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Initial size setup
    setCanvasSize();

    // Handle resize
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    const particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 150;
    const particleRadius = 2;

    // Particle class
    class Particle {
      x: number;
      y: number;
      dirX: number;
      dirY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dirX = (Math.random() - 0.5) * 0.5;
        this.dirY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.dirX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dirY *= -1;

        // Update position
        this.x += this.dirX;
        this.y += this.dirY;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Set opacity based on distance
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.2})`;
            ctx.stroke();
          }
        }
      }
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative pt-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Dynamic background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_40%)]"></div>
      </div>
      <div className='relative w-40 h-40 mx-auto'><img src="./public/me.jpeg" alt="me" className='absolute bottom-3 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white text-xs rounded-full'/>
      </div>
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 md:px-8 text-center z-10">
        <div className="fade-up-stagger">
          <p className="text-primary font-medium mb-6 animated-element">
            Associate Software Developer
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animated-element">
            Michel <span className="text-primary">Herrera</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animated-element">
            Highlighting my transition from a licensed electrician with extensive hands-on
            experience to a software developer with a robust academic foundation in
            computer science.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animated-element">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              View my work
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-secondary hover:bg-secondary/70 rounded-full transition-all duration-300"
            >
              Learn more about me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-foreground/50 hover:text-primary transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
