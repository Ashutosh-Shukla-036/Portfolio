import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark'
          ? 'text-text-secondary hover:text-accent'
          : 'text-text-tertiary hover:text-accent'
        }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;