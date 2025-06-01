import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white font-heading mb-4">My Projects</h1>
          <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-dark-600 dark:text-dark-300">
            A showcase of my work, personal projects, and contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white font-heading">{project.title}</h3>
        <p className="text-dark-600 dark:text-dark-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech: string, i: number) => (
            <span 
              key={i}
              className="px-2.5 py-0.5 text-xs bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-dark-100 dark:bg-dark-600 hover:bg-dark-200 dark:hover:bg-dark-500 transition-colors text-dark-800 dark:text-dark-200"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors text-primary-800 dark:text-primary-300"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const projects = [
  {
    title: "Lib-Connect",
    description: "A robust library management software with flexible API development, precise data retrieval, and manipulation capabilities.",
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Prisma", "TypeORM"],
    github:"https://github.com/divyansh1216",
    live: "https://github.com/divyansh1216"
  },
   {
    title: "E-commerce Rental Platform",
    description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    github:"https://github.com/divyansh1216",
    live: "https://stunning-pavlova-e381b9.netlify.app/"
  },
  {
    title: "AI Virtual Mouse",
    description: "A Python-based virtual mouse controller using computer vision and hand gesture recognition for touchless interaction.",
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Python", "OpenCV", "Computer Vision", "Gesture Recognition"],
    github:"https://github.com/divyansh1216"
    
  },
  {
    title: "ERP System Dashboard",
    description: "Customizable ERP dashboard with data visualization and real-time analytics for business intelligence.",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React.js", "Node.js", "Express", "Chart.js", "MongoDB"],
    github:"https://github.com/divyansh1216",
    live: "https://example.com"
  },
  {
    title: "HRM Portal",
    description: "Comprehensive human resource management portal with employee profiles, leave management, and performance tracking.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
    github:"https://github.com/divyansh1216"
  
  },
 
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React.js", "OpenWeather API", "Geolocation", "PWA"],
    github:"https://github.com/divyansh1216",
  
    // live: "https://example.com"
  }
];

export default Projects;