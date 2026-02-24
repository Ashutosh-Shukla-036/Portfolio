import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
}

const TechStack: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const categories: SkillCategory[] = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs', 'JWT Authentication'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Database Design'],
    },
    {
      category: 'AI / ML',
      skills: ['scikit-learn', 'XGBoost', 'HuggingFace Transformers', 'SHAP', 'Feature Engineering'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Vercel', 'Render', 'VS Code', 'Figma'],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills
          </p>
          <h2
            className={`headline-lg ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
              }`}
          >
            Technologies I work with.
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              className="card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: catIndex * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p
                className={`text-xs font-semibold tracking-widest uppercase mb-4 ${theme === 'dark' ? 'text-accent' : 'text-accent'
                  }`}
              >
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="pill text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
