import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`fixed bottom-8 right-8 p-3 rounded-full z-50 transition-all duration-300 ${theme === 'dark'
              ? 'glass border border-white/[0.08] text-text-secondary hover:text-text-primary'
              : 'glass border border-black/[0.08] text-text-tertiary hover:text-text-primary-light'
            }`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;