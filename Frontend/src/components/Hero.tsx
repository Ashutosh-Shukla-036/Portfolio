import React from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const scrollToWork = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-surface-light'
        }`}
    >
      {/* Mesh gradient background */}
      <div className="mesh-gradient" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-[980px] mx-auto px-6 text-center">
        {/* Overline */}
        <motion.p
          className={`text-sm font-medium tracking-widest uppercase mb-6 ${theme === 'dark' ? 'text-accent' : 'text-accent'
            }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className={`headline-xl mb-8 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
            }`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Ashutosh{' '}
          <span className="text-gradient">Shukla</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="body-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Backend engineer specializing in transaction-safe database systems
          and reliability-driven architecture. Building robust systems that
          don't break at 3 AM.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="flex items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            onClick={scrollToWork}
            className="px-7 py-3 rounded-full bg-accent text-white text-sm font-semibold tracking-tight hover:bg-accent-hover transition-colors duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View my work
          </motion.button>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Ashutosh-Shukla-036"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'dark'
                  ? 'text-text-secondary hover:text-text-primary hover:bg-white/[0.06]'
                  : 'text-text-tertiary hover:text-text-primary-light hover:bg-black/[0.04]'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ashutosh-shukla-1189b625b/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'dark'
                  ? 'text-text-secondary hover:text-text-primary hover:bg-white/[0.06]'
                  : 'text-text-tertiary hover:text-text-primary-light hover:bg-black/[0.04]'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown
            size={20}
            className={
              theme === 'dark' ? 'text-text-secondary/40' : 'text-text-tertiary/40'
            }
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;