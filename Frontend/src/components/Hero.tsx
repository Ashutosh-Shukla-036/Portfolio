import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="hero"
      className={`pt-20 min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
      }`}
    >

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
  <motion.div
    className={`relative w-28 h-28 mx-auto mb-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-blue-500 to-purple-700'
        : 'bg-gradient-to-br from-blue-400 to-purple-500'
    }`}
    whileHover={{
      scale: 1.1,
      boxShadow: '0 0 25px rgba(99,102,241,0.4)',
    }}
    transition={{ type: 'spring', stiffness: 200 }}
  >
    <motion.div
      whileHover={{ rotate: 6 }}
      transition={{ duration: 0.3 }}
      className="text-white"
    >
      <Code2 size={40} />
    </motion.div>

    {/* Clean glowing ring */}
    <span
      className="absolute inset-0 rounded-full ring-2 ring-blue-500/40 animate-pulse pointer-events-none"
      style={{ zIndex: -1 }}
    />
  </motion.div>
</motion.div>



        <motion.h1
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
          variants={itemVariants}
        >
          Hi there, I'm{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Ashutosh Shukla
          </span>{' '}
          👋
        </motion.h1>

        <motion.p
          className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
          variants={itemVariants}
        >
          🚀 Full-Stack Dev turned AI/ML Enthusiast | 📊 Problem Solver | 🎬 Creative Technologist
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Ashutosh-Shukla-036"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full border-2 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                  : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500'
              } hover:scale-110 shadow-lg`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ashutosh-shukla-1189b625b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full border-2 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                  : 'border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500'
              } hover:scale-110 shadow-lg`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;