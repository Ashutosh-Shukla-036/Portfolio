import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Leaf, DollarSign, Film, TrendingUp } from 'lucide-react';
import aprameyaImg from '../assets/aprameya-productions.png';
import cafootImg from '../assets/cafoot-carbon-footprint-tracker.png';
import reactifyImg from '../assets/reactify-finance-manager.png';
import MLImg from '../assets/ML.png';

const Projects: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const projects = [
    {
      title: 'Aprameya Productions',
      description: 'Film-tech content hub for visual storytelling.',
      image: aprameyaImg,
      icon: <Film size={32} />,
      features: [
        'Content management system',
        'User authentication and authorization',
        'Creator collaboration tools',
        'User friendly interface'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'Vercel', 'Render'],
      github: 'https://github.com/Ashutosh-Shukla-036/Aprameya',
      demo: 'https://aprameyaproductions.vercel.app/',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      title: 'CaFooT - Carbon Footprint Tracker',
      description: 'Scope 3 emissions tracker with AI insights and gamification.',
      image: cafootImg,
      icon: <Leaf size={32} />,
      features: [
        'Real-time carbon footprint calculation',
        'AI-powered sustainability recommendations',
        'Corporate dashboard analytics',
        'User friendly interface'
      ],
      techStack: ['React', 'Node.js', 'Tailwind','Postgres', 'Prisma','Chart.js', 'Gemini AI'],
      github: 'https://github.com/Ashutosh-Shukla-036/CaFooT',
      demo: 'https://cafoot.vercel.app',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Reactify - Finance Manager',
      description: 'Transaction tracker with JWT auth and real-time validations.',
      image: reactifyImg,
      icon: <DollarSign size={32} />,
      features: [
        'Secure JWT authentication',
        'Real-time transaction validation',
        'Budgeting and expense tracking',
        'User friendly interface'
      ],
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/Ashutosh-Shukla-036/Reactify',
      demo: '',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Employee Attrition Prediction',
      description: 'ML model with SHAP interpretability and 82% accuracy.',
      image: MLImg,
      icon: <TrendingUp size={32} />,
      features: [
        'Advanced feature engineering',
        'SHAP explainability integration',
        '82% prediction accuracy',
        'Interactive model dashboard'
      ],
      techStack: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'Pandas'],
      github: 'https://github.com/Ashutosh-Shukla-036/Employee-Attrition-Prediction',
      demo: '',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'AI Interview Bot',
      description: 'Voice-based technical interviews using Hugging Face (distilBERT, Whisper, Wav2Vec), real-time feedback.',
      image: MLImg,
      icon: <Brain size={32} />,
      features: [
        'Real-time speech recognition with Whisper',
        'Semantic answer scoring using distilBERT',
        'Dynamic question generation',
        'Comprehensive performance analytics'
      ],
      techStack: ['Python', 'HuggingFace', 'FastAPI', 'React', 'WebRTC'],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects 💼
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A showcase of my journey from full-stack development to AI/ML innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-gray-900/50 border border-gray-700'
                  : 'bg-white/70 border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Project Image */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.div
                    className="text-white/90"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                
                <p
                  className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4
                    className={`font-semibold mb-2 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}
                  >
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`text-sm flex items-center ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark'
                            ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github && project.github.trim() !== '' ? (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg border-2 transition-all duration-300 ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                          : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  ) : (
                    <div
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-gray-500 border border-gray-600'
                          : 'bg-gray-100 text-gray-500 border border-gray-300'
                      }`}
                    >
                      🚧 In Development
                    </div>
                  )}

                  {project.demo && project.demo.trim() !== '' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className={`text-lg mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Want to see more projects or collaborate?
          </p>
          <motion.a
            href="https://github.com/Ashutosh-Shukla-036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            View All Projects on GitHub
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;