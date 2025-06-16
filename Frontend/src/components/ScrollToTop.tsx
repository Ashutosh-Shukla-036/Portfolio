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
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700'
              : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
          }`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;