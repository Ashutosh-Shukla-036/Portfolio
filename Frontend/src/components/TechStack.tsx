import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const techCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      technologies: [
        { name: 'React', color: 'from-blue-400 to-blue-600', tooltip: 'Core of all frontend projects' },
        { name: 'TypeScript', color: 'from-blue-500 to-blue-700', tooltip: 'Used in Aprameya & Interview Bot' },
        { name: 'Tailwind CSS', color: 'from-cyan-400 to-cyan-600', tooltip: 'All UI styling is Tailwind-based' },
        { name: 'Recoil', color: 'from-purple-400 to-purple-600', tooltip: 'Global state management' },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      technologies: [
        { name: 'Node.js', color: 'from-green-500 to-green-700', tooltip: 'API logic in Aprameya, CaFooT & Reactify' },
        { name: 'Express.js', color: 'from-gray-600 to-gray-800', tooltip: 'REST APIs & auth flows' },
        { name: 'Python', color: 'from-yellow-400 to-blue-600', tooltip: 'ML logic and scripting' },
        { name: 'Java', color: 'from-red-500 to-orange-600', tooltip: 'DSA & academic learning' },
      ]
    },
    {
      category: 'Database',
      icon: '🗄️',
      technologies: [
        { name: 'MongoDB', color: 'from-green-500 to-green-700', tooltip: 'Used in Reactify & Aprameya' },
        { name: 'PostgreSQL', color: 'from-blue-600 to-blue-800', tooltip: 'Used in CaFooT + Interview Bot' },
        { name: 'Prisma', color: 'from-indigo-500 to-indigo-700', tooltip: 'ORM for PostgreSQL' },
      ]
    },
    {
      category: 'AI/ML',
      icon: '🤖',
      technologies: [
        { name: 'TensorFlow', color: 'from-orange-500 to-orange-700', tooltip: 'Used in ML experiments' },
        { name: 'HuggingFace', color: 'from-yellow-400 to-yellow-600', tooltip: 'Interview Bot NLP & Speech' },
        { name: 'XGBoost', color: 'from-red-500 to-red-700', tooltip: 'Employee Attrition Project' },
        { name: 'Scikit-learn', color: 'from-blue-500 to-orange-500', tooltip: 'Modeling + preprocessing' },
        { name: 'Pandas', color: 'from-purple-500 to-blue-600', tooltip: 'Data wrangling' },
        { name: 'NumPy', color: 'from-blue-400 to-indigo-600', tooltip: 'Core matrix ops' },
      ]
    },
    {
      category: 'Tools & Cloud',
      icon: '☁️',
      technologies: [
        { name: 'Git', color: 'from-red-500 to-red-700', tooltip: 'Version control always' },
        { name: 'Docker', color: 'from-blue-500 to-blue-700', tooltip: 'Containerizing backend/ML' },
        { name: 'Render', color: 'from-orange-400 to-orange-600', tooltip: 'Model & Backend hosting' },
        { name: 'Vercel', color: 'from-gray-700 to-gray-900', tooltip: 'Frontend deploys' },
        { name: 'Postman', color: 'from-orange-500 to-red-600', tooltip: 'API testing' },
      ]
    }
  ];

  return (
    <section id="techstack" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Tech Stack 🛠️
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={`p-6 rounded-2xl shadow-xl backdrop-blur-sm relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gray-900/50 border border-gray-700'
                  : 'bg-white/70 border border-gray-200'
              }`}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 100, damping: 12 },
                },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {category.category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className={`group p-3 rounded-lg text-center transition-all duration-300 relative ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 hover:bg-gray-700/50'
                          : 'bg-gray-50/50 hover:bg-gray-100/50'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: (categoryIndex * 0.1) + (techIndex * 0.05),
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-full h-1 rounded-full bg-gradient-to-r ${tech.color} mb-2`} />
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={`https://skillicons.dev/icons?i=${tech.name.toLowerCase().replace(/\./g, '')}`}
                          alt={tech.name}
                          className="w-5 h-5"
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                          {tech.name}
                        </span>
                      </div>

                      {/* Tooltip */}
                      <span className="absolute bottom-10 z-10 px-3 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {tech.tooltip}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
