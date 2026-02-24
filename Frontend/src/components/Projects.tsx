import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import aprameyaImg from '../assets/aprameya-productions.png';
import cafootImg from '../assets/cafoot-carbon-footprint-tracker.png';

const Projects: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const projects = [
    {
      title: 'Aprameya',
      subtitle: 'Full Stack Film Showcase Platform',
      description:
        'Architected and deployed a production-grade film showcase platform. Engineered RESTful APIs in Node.js and Express with caching strategies reducing response time by 25%. Built secure JWT-based authentication and responsive UI using React and Tailwind CSS.',
      image: aprameyaImg,
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Vercel'],
      github: 'https://github.com/Ashutosh-Shukla-036/Aprameya',
      demo: 'https://aprameyaproductions.vercel.app/',
      accent: 'from-accent to-accent-purple',
    },
    {
      title: 'CaFooT',
      subtitle: 'Carbon Footprint Tracker',
      description:
        'Developed a sustainability platform for real-time carbon emission tracking and AI-driven insights. Integrated Google Gemini AI API to generate 50+ automated recommendations. Designed a normalized PostgreSQL schema supporting 1000+ emission records with optimized queries.',
      image: cafootImg,
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Gemini AI', 'Chart.js'],
      github: 'https://github.com/Ashutosh-Shukla-036/CaFooT',
      demo: '',
      accent: 'from-accent-green to-accent',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-28 md:py-36 ${theme === 'dark' ? 'bg-black' : 'bg-surface-light'
        }`}
    >
      <div className="section-divider mb-28" />

      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2
            className={`headline-lg ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
              }`}
          >
            Selected work.
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card card-spotlight overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 z-10`}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
                      {project.subtitle}
                    </p>
                    <h3
                      className={`headline-md mb-4 ${theme === 'dark'
                        ? 'text-text-primary'
                        : 'text-text-primary-light'
                        }`}
                    >
                      {project.title}
                    </h3>
                    <p className="body-md !text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${theme === 'dark'
                        ? 'bg-white/[0.06] text-text-primary hover:bg-white/[0.12]'
                        : 'bg-black/[0.04] text-text-primary-light hover:bg-black/[0.08]'
                        }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github size={16} />
                      Source
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-300"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/Ashutosh-Shukla-036"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${theme === 'dark'
              ? 'text-text-secondary hover:text-accent'
              : 'text-text-tertiary hover:text-accent'
              }`}
            whileHover={{ x: 4 }}
          >
            View all projects on GitHub
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;