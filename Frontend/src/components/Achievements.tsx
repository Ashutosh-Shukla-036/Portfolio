import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Award, ScrollText, GraduationCap } from 'lucide-react';

const achievements = [
  {
    title: '2nd Place - Sustainable Innovation Tech',
    event: 'Skyline University, Dubai',
    icon: <Award size={24} />,
  },
  {
    title: 'Finalist - VYUHA Hackathon',
    event: 'National Level Hackathon, CMRIT',
    icon: <Award size={24} />,
  },
  {
    title: 'Consolation - B-Plan Competition',
    event: 'CMRIT Business Fest',
    icon: <Award size={24} />,
  },
  {
    title: 'Top 1% - Tem-E-Thon 2025',
    event: '3,000+ teams across India',
    icon: <Award size={24} />,
  },
];

const certifications = [
  {
    title: 'Intel® Unnati - Scalable Software Systems',
    year: '2024',
    link: 'https://drive.google.com/file/d/1_k2EMZiaogOVwYZoL3mmSPWvTrHbGLoH/view',
  },
  {
    title: 'DSA in Python - Udemy',
    year: '2023',
    link: 'https://drive.google.com/file/d/193U3TeYGzdkQk-S2hV4KSfWrAz8dInIu/view',
  },
  {
    title: 'Full Stack Web Dev - 100xDevs',
    year: '2024',
    link: 'https://drive.google.com/file/d/1y1VEwDQPoZXLLAMk9HjXFWtUKE9SuX9f/view',
  },
];

const Achievements: React.FC = () => {
  const theme = useRecoilValue(themeState);

  return (
    <section
      id="achievements"
      className={`min-h-screen py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <Award size={32} /> Achievements
          </h2>
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg shadow-md border-l-4 ${
                  theme === 'dark' ? 'border-blue-500 bg-gray-800' : 'border-blue-600 bg-white'
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm opacity-80">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
            <ScrollText size={32} /> Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className={`p-5 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col gap-2">
                  <GraduationCap size={24} className="text-blue-500" />
                  <p className="font-semibold">{cert.title}</p>
                  <p className="text-sm opacity-70">{cert.year}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
