import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Award, FileText, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const stats = [
    { label: 'LeetCode Problems', value: '200+', icon: <Code2 size={18} /> },
    { label: 'Patent Filed', value: '1', icon: <FileText size={18} /> },
    { label: 'Hackathon Wins', value: '3+', icon: <Award size={18} /> },
  ];

  const certifications = [
    {
      title: 'Intel® Unnati Industrial Training',
      subtitle: 'Scalable Software Systems and Architecture',
      year: '2024',
      link: 'https://drive.google.com/file/d/1_k2EMZiaogOVwYZoL3mmSPWvTrHbGLoH/view',
    },
    {
      title: 'Full Stack Web Development',
      subtitle: '100xDevs by Harkirat Singh',
      year: '2024',
      link: 'https://drive.google.com/file/d/1y1VEwDQPoZXLLAMk9HjXFWtUKE9SuX9f/view',
    },
  ];

  return (
    <section
      id="about"
      className={`py-28 md:py-36 ${theme === 'dark' ? 'bg-black' : 'bg-surface-light'
        }`}
    >
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            About
          </p>
          <h2
            className={`headline-lg mb-6 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
              }`}
          >
            Building things that matter.
          </h2>
          <p className="body-lg max-w-3xl">
            Backend Engineer with hands-on production experience designing PostgreSQL
            abstraction layers, optimizing connection lifecycle management, and eliminating
            silent failure states across multi-service robotic backend systems.
            Currently pursuing B.Tech in Computer Science Engineering at CMR Institute
            of Technology, Bengaluru.
          </p>
        </motion.div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Left: Key info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-xl ${theme === 'dark' ? 'bg-white/[0.06]' : 'bg-black/[0.04]'
                }`}>
                <GraduationCap size={20} className="text-accent" />
              </div>
              <div>
                <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                  }`}>
                  B.Tech Computer Science Engineering
                </p>
                <p className="text-text-secondary text-sm mt-0.5">
                  CMR Institute of Technology, Bengaluru
                </p>
                <p className="text-text-tertiary text-xs mt-0.5">
                  2022–2026 · CGPA: 7.5/10
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-xl ${theme === 'dark' ? 'bg-white/[0.06]' : 'bg-black/[0.04]'
                }`}>
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                  }`}>
                  Bengaluru, Karnataka
                </p>
                <p className="text-text-secondary text-sm mt-0.5">
                  Open to relocation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-xl ${theme === 'dark' ? 'bg-white/[0.06]' : 'bg-black/[0.04]'
                }`}>
                <Code2 size={20} className="text-accent" />
              </div>
              <div>
                <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                  }`}>
                  Core Competencies
                </p>
                <p className="text-text-secondary text-sm mt-0.5">
                  Full Stack Development · API Design · DSA · System Reliability
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`card p-5 text-center flex flex-col items-center justify-center gap-2`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-accent mb-1">{stat.icon}</div>
                <p
                  className={`text-2xl font-bold font-display ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                    }`}
                >
                  {stat.value}
                </p>
                <p className="text-text-secondary text-xs leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p
            className={`text-sm font-semibold tracking-widest uppercase mb-6 ${theme === 'dark' ? 'text-text-secondary' : 'text-text-tertiary'
              }`}
          >
            Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card p-5 group flex items-start justify-between gap-4`}
              >
                <div>
                  <p
                    className={`font-semibold text-sm mb-1 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                      }`}
                  >
                    {cert.title}
                  </p>
                  <p className="text-text-secondary text-xs">{cert.subtitle}</p>
                  <p className="text-text-tertiary text-xs mt-1">{cert.year}</p>
                </div>
                <ExternalLink
                  size={14}
                  className="text-text-tertiary group-hover:text-accent transition-colors flex-shrink-0 mt-1"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;