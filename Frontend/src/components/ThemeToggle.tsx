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
      className={`relative p-3 rounded-full border-2 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-gray-800 border-gray-600 text-yellow-400'
          : 'bg-white border-gray-200 text-gray-600'
      } hover:scale-110 shadow-lg`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;