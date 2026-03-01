import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const theme = useRecoilValue(themeState);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/Ashutosh_Shukla_Resume.pdf', external: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? theme === 'dark'
          ? 'glass border-b border-white/[0.06]'
          : 'glass border-b border-black/[0.06]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className={`font-display font-bold text-sm tracking-tight transition-colors duration-300 ${theme === 'dark'
              ? 'text-text-primary hover:text-white'
              : 'text-text-primary-light hover:text-black'
              }`}
          >
            ashutosh.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-medium tracking-wide transition-colors duration-300 ${theme === 'dark'
                    ? 'text-text-secondary hover:text-text-primary'
                    : 'text-text-tertiary hover:text-text-primary-light'
                    }`}
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-xs font-medium tracking-wide transition-colors duration-300 ${theme === 'dark'
                    ? 'text-text-secondary hover:text-text-primary'
                    : 'text-text-tertiary hover:text-text-primary-light'
                    }`}
                >
                  {item.name}
                </button>
              )
            )}
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className={`p-1.5 rounded-lg transition-colors ${theme === 'dark'
                ? 'text-text-secondary hover:text-text-primary'
                : 'text-text-tertiary hover:text-text-primary-light'
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden ${theme === 'dark'
              ? 'glass border-t border-white/[0.06]'
              : 'glass border-t border-black/[0.06]'
              }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="max-w-[1200px] mx-auto px-6 py-4 space-y-1">
              {navItems.map((item, index) =>
                item.external ? (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-left py-2.5 text-sm font-medium transition-colors ${theme === 'dark'
                      ? 'text-text-secondary hover:text-text-primary'
                      : 'text-text-tertiary hover:text-text-primary-light'
                      }`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ) : (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left py-2.5 text-sm font-medium transition-colors ${theme === 'dark'
                      ? 'text-text-secondary hover:text-text-primary'
                      : 'text-text-tertiary hover:text-text-primary-light'
                      }`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;