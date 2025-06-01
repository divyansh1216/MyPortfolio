import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="mb-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white font-heading mb-4">About Me</h1>
        <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10">
 

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white font-heading mb-4">
            Detail-oriented Software Developer with 2.5 years of experience
          </h2>
          
          <p className="mb-4 text-dark-700 dark:text-dark-200 leading-relaxed">
            I'm a passionate software developer based in Udaipur, Rajasthan, specializing in designing, developing, and maintaining robust applications. With expertise in a wide range of technologies including Node.js, GraphQL, React.js, Next.js, TypeORM, and PostgreSQL, I excel at translating complex business requirements into scalable technical solutions.
          </p>

          <p className="mb-6 text-dark-700 dark:text-dark-200 leading-relaxed">
            My approach combines technical proficiency with a strong collaborative spirit, enabling me to work effectively in cross-functional teams and deliver high-quality code within tight deadlines. I'm constantly exploring new technologies and methodologies to enhance my skill set and create better solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            <InfoItem label="Name" value="Divyansh Tailor" />
            <InfoItem label="Email" value="divyanshtailor36@gmail.com" />
            <InfoItem label="Phone" value="+91 9680543635" />
            <InfoItem label="Location" value="Rishabhdew, Udaipur, Rajasthan" />
          </div>

          <a 
            href="/src/Pdf/DivyanshTailor.pdf" 
            download
            className="btn-primary inline-flex items-center"
          >
            Download Resume <Download className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="font-semibold text-dark-900 dark:text-white">{label}: </span>
    <span className="text-dark-700 dark:text-dark-300">{value}</span>
  </div>
);

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: "Software Developer",
      company: "TDC Consultancy Pvt. Ltd.",
      period: "Sept 2023 - Present",
      location: "Udaipur, Rajasthan, India",
      description: [
        "Experienced in ERP software development with a focus on customization and optimization",
        "Worked with GraphQL APIs to retrieve and display data from databases",
        "Proficient in product management methodologies, prioritization frameworks, and goal-setting for product development",
        "Proficient in TypeORM for object-relational mapping in TypeScript applications. Skilled in Next.js for building fast and scalable React applications",
        "Familiar with HRM (Human Resource Management) systems and practices, contributing to comprehensive organizational management"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "CodePlanet Technologies",
      period: "Dec 2022 - Aug 2023",
      location: "Jaipur, Rajasthan",
      description: [
        "Experienced in full-stack Python and ReactJS development",
        "Proficient in backend development with Django Python, including database management and API creation",
        "Capable of full-stack development, integrating backend and frontend technologies seamlessly",
        "Skilled in frontend development with ReactJS, building dynamic and responsive user interfaces"
      ]
    }
  ];

  return (
    <section className="mb-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-dark-900 dark:text-white font-heading mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-primary-200 dark:bg-primary-800 transform md:translate-x-px"></div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} item={experience} index={index} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Bangalore City University",
      period: "2021 - 2023",
      location: "Bangalore, Karnataka"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Mohanlal Sukhadia University",
      period: "2018 - 2021",
      location: "Udaipur, Rajasthan"
    }
  ];

  return (
    <section>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-dark-900 dark:text-white font-heading mb-4">Education</h2>
        <div className="w-20 h-1 bg-primary-500 dark:bg-primary-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index, isLeft }: { item: any; index: number; isLeft: boolean }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary-500 dark:bg-primary-400 transform -translate-x-1/2 z-10"></div>

      {/* Content */}
      <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right space-y-2">
        <div className={`${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
          <h3 className="text-xl font-bold text-dark-900 dark:text-white">{item.title}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium">{item.company}</p>
          <p className="text-sm text-dark-500 dark:text-dark-400 mb-3">{item.period} • {item.location}</p>
          <ul className={`text-dark-700 dark:text-dark-300 space-y-2 list-disc ${isLeft ? 'md:ml-6' : 'ml-6 md:ml-0'}`}>
            {item.description.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Spacer for alignment in the timeline */}
      <div className="md:w-1/2"></div>
    </motion.div>
  );
};

const EducationCard = ({ education, index }: { education: any; index: number }) => {
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
      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{education.degree}</h3>
      <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{education.institution}</p>
      <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">{education.period}</p>
      <p className="text-dark-700 dark:text-dark-300">{education.location}</p>
    </motion.div>
  );
};

export default About;