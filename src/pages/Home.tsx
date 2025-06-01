import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-dark-50 dark:from-dark-900 dark:to-dark-800">
        <div 
          ref={heroRef}
          className="container mx-auto px-4 pt-24 pb-16 flex flex-col md:flex-row items-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-dark-900 dark:text-white font-heading">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Divyansh Tailor</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl mb-8 text-dark-700 dark:text-dark-200">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Frontend Specialist',
                  2000,
                  'React.js Expert',
                  2000,
                  'Full Stack Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </div>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-md mx-auto md:mx-0">
              Detail-oriented software developer with expertise in React.js, Next.js, and Node.js. 
              Building robust web applications with clean code and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            
              <a 
                href="/src/Pdf/DivyanshTailor.pdf" 
                download
                className="btn-secondary"
              >
                Download CV <Download className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-xl">
              <img 
                src="/src/Pdf/divyanshImage.jpg" 
                alt="Divyansh Tailor" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </motion.div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white font-heading mb-4">My Expertise</h2>
            <p className="max-w-2xl mx-auto text-lg text-dark-600 dark:text-dark-300">
              Here are the technologies I specialize in and work with daily.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white font-heading mb-4">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-lg text-dark-600 dark:text-dark-300">
              Some of my recent work that showcases my skills and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FeaturedProject
              title="Lib-Connect"
              description="A robust library management software utilizing modern technologies such as Next.js, GraphQL, PostgreSQL, Prisma, and TypeORM. Implemented flexible and efficient API development with precise data retrieval."
              image="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              tags={['Next.js', 'GraphQL', 'PostgreSQL', 'Prisma']}
              index={0}
            />
            <FeaturedProject
              title="AI Virtual Mouse"
              description="Developed a virtual mouse project using Python programming language. Leveraged the OpenCV library for computer vision tasks, including hand gesture recognition and tracking."
              image="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              tags={['Python', 'OpenCV', 'Computer Vision', 'Gesture Recognition']}
              index={1}
            />
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-secondary">
              View All Projects <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Interested in working together?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time positions.
              If you're looking for a developer who can bring your ideas to life, let's talk!
            </p>
            <Link to="/contact" className="btn-white">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'TypeScript', 'HTML/CSS'],
    icon: '💻',
    description: 'Building responsive and interactive user interfaces with modern frameworks and libraries.'
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Django', 'Express.js', 'GraphQL'],
    icon: '⚙️',
    description: 'Creating robust server-side applications and APIs for seamless data handling.'
  },
  {
    title: 'Database Management',
    skills: ['PostgreSQL', 'MySQL', 'TypeORM', 'Prisma'],
    icon: '🗄️',
    description: 'Designing and optimizing the database structures for efficient data storage and retrieval.'
  }
];

const SkillCard = ({ category, index }: { category: any; index: number }) => {
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
      className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-4xl mb-4">{category.icon}</div>
      <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white font-heading">{category.title}</h3>
      <p className="text-dark-600 dark:text-dark-300 mb-5">{category.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {category.skills.map((skill: string, i: number) => (
          <span 
            key={i}
            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const FeaturedProject = ({ title, description, image, tags, index }: { title: string; description: string; image: string; tags: string[]; index: number }) => {
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
      className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-dark-900 dark:text-white font-heading">{title}</h3>
        <p className="text-dark-600 dark:text-dark-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;