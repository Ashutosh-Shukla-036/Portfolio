import React, { useRef, useEffect } from 'react';
import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const theme = useRecoilValue(themeState);
  const containerRef = useRef<HTMLElement>(null);
  const glowX = useMotionValue(-500);
  const glowY = useMotionValue(-500);
  const smoothX = useSpring(glowX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(glowY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      glowX.set(e.clientX - rect.left);
      glowY.set(e.clientY - rect.top);
    };
    container.addEventListener('mousemove', handleMove);
    return () => container.removeEventListener('mousemove', handleMove);
  }, [glowX, glowY]);

  const scrollToWork = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Split name into characters for staggered animation
  const firstName = 'Ashutosh';
  const lastName = 'Shukla';

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + i * 0.04,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-surface-light'
        }`}
    >
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Mesh gradient background */}
      <div className="mesh-gradient" />

      {/* Cursor glow */}
      <motion.div
        className="cursor-glow hidden md:block"
        style={{ left: smoothX, top: smoothY }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-[980px] mx-auto px-6 text-center">
        {/* Overline */}
        <motion.p
          className="text-accent text-sm font-medium tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer
        </motion.p>

        {/* Main headline with per-letter animation */}
        <h1 className={`headline-xl mb-8 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
          }`}>
          <span className="inline-block">
            {firstName.split('').map((char, i) => (
              <motion.span
                key={`f-${i}`}
                className="inline-block"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="inline-block mx-3" />
          <span className="inline-block text-gradient-animated">
            {lastName.split('').map((char, i) => (
              <motion.span
                key={`l-${i}`}
                className="inline-block"
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={firstName.length + i}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          className="body-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.button
            onClick={scrollToWork}
            className="group relative px-7 py-3 rounded-full bg-accent text-white text-sm font-semibold tracking-tight overflow-hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View my work</span>
            <motion.div
              className="absolute inset-0 bg-accent-hover"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.a
            href="/Ashutosh_Shukla_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ${theme === 'dark'
                ? 'bg-white/[0.06] text-text-primary hover:bg-white/[0.12] border border-white/[0.08]'
                : 'bg-black/[0.04] text-text-primary-light hover:bg-black/[0.08] border border-black/[0.08]'
              }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileText size={16} />
            View Resume
          </motion.a>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Ashutosh-Shukla-036"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'dark'
                ? 'text-text-secondary hover:text-text-primary hover:bg-white/[0.06]'
                : 'text-text-tertiary hover:text-text-primary-light hover:bg-black/[0.04]'
                }`}
              whileHover={{ scale: 1.15, rotate: 5 }}
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
              whileHover={{ scale: 1.15, rotate: -5 }}
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
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown
            size={20}
            className={theme === 'dark' ? 'text-text-secondary/40' : 'text-text-tertiary/40'}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;