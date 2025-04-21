import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media platforms with data visualization and customizable reporting features.',
    image: 'https://images.pexels.com/photos/7654000/pexels-photo-7654000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tech: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'A web application that leverages AI to generate blog posts, social media content, and product descriptions.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tech: ['React', 'Python', 'OpenAI API', 'FastAPI'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      '.projects-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <h2 className="projects-title text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Featured Projects
        </h2>
        <p className="projects-title text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Here are some of my recent projects. Each represents different challenges I've tackled and skills I've developed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={18} className="ml-1" />
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