import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Trophy, Code2 } from 'lucide-react';

const Achievements: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const items = [
    {
      icon: <Lightbulb size={20} />,
      title: 'Innovation Patent (2025)',
      description:
        'Filed design patent for "Smart Rainwater-Harvesting Umbrella with Integrated Purification and Monitoring System" (Application No. 202541065174).',
      accent: 'text-accent-orange',
    },
    {
      icon: <Trophy size={20} />,
      title: '2nd Place — Sustainable Innovation Tech',
      description: 'Skyline University, Dubai. International recognition for sustainable technology innovation.',
      accent: 'text-accent',
    },
    {
      icon: <Award size={20} />,
      title: 'Top 1% — Tem-E-Thon 2025',
      description: 'Ranked in top 1% among 3000+ participating teams across India.',
      accent: 'text-accent-purple',
    },
    {
      icon: <Award size={20} />,
      title: 'Finalist — VYUHA National Hackathon',
      description: 'Selected as finalist in national-level hackathon competition.',
      accent: 'text-accent-green',
    },
    {
      icon: <Code2 size={20} />,
      title: '200+ LeetCode Problems',
      description: 'Solved across algorithms, data structures, and dynamic programming.',
      accent: 'text-accent-red',
    },
  ];

  return (
    <section
      id="achievements"
      className={`py-28 md:py-36 ${theme === 'dark' ? 'bg-black' : 'bg-surface-light'
        }`}
    >
      <div className="section-divider mb-28" />

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
            Recognition
          </p>
          <h2
            className={`headline-lg ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
              }`}
          >
            Achievements & awards.
          </h2>
        </motion.div>

        {/* Achievement items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="card p-6 flex items-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className={`p-2.5 rounded-xl flex-shrink-0 ${theme === 'dark' ? 'bg-white/[0.06]' : 'bg-black/[0.04]'
                  }`}
              >
                <span className={item.accent}>{item.icon}</span>
              </div>
              <div>
                <p
                  className={`font-semibold text-sm mb-1 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                    }`}
                >
                  {item.title}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
