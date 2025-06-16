import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Brain, Code, Trophy, Users, Bug } from 'lucide-react';

const About: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const highlights = [
    {
      icon: <Brain size={24} />,
      text: 'Final Year Project: AI Interview Bot (NLP + Speech + Semantic Scoring)',
    },
    {
      icon: <Code size={24} />,
      text: 'Actively learning: ML, DL, System Design, Advanced DSA',
    },
    {
      icon: <Trophy size={24} />,
      text: 'LeetCode: 200+ problems solved',
    },
    {
      icon: <Users size={24} />,
      text: 'Founder - Aprameya Productions: tech + storytelling',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            About Me 🧠
          </h2>

          <motion.p
            className={`text-lg md:text-xl leading-relaxed mb-12 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate developer transitioned from MERN stack to AI/ML. I build smart systems that 
            solve real-world problems with creativity, logic, and love for clean code.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border border-gray-700'
                    : 'bg-white/70 border border-gray-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 flex-shrink-0 mt-1">
                    {highlight.icon}
                  </div>
                  <p
                    className={`text-left ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {highlight.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={`p-6 rounded-xl shadow-lg backdrop-blur-sm border-2 border-dashed ${
              theme === 'dark'
                ? 'bg-gray-800/50 border-yellow-500/50 text-yellow-400'
                : 'bg-yellow-50/70 border-yellow-400/50 text-yellow-700'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center gap-3">
              <Bug size={24} />
              <p className="font-medium">
                Fun fact: "If debugging is removing bugs, then programming must be putting them in 🐛"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;