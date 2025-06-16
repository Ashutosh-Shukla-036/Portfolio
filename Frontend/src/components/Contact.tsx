import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { themeState, contactFormState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, ExternalLink, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const theme = useRecoilValue(themeState);
  const [formData, setFormData] = useRecoilState(contactFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    "Hi Ashutosh, I'd like to collaborate on a project...",
    "Hi Ashutosh, I'm interested in your AI/ML work...",
    "Hi Ashutosh, I have a job opportunity...",
    "Hi Ashutosh, Let's discuss your projects...",
    "Hi Ashutosh, I'd love to connect about..."
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashutosh-shukla-1189b625b/',
      icon: <Linkedin size={24} />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Ashutosh-Shukla-036',
      icon: <Github size={24} />,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Ashutoshshukla_123/',
      icon: <ExternalLink size={24} />,
      color: 'hover:text-orange-600'
    },
    {
      name: 'Email',
      url: 'mailto:ashutoshshukla8970@gmail.com',
      icon: <Mail size={24} />,
      color: 'hover:text-red-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFormData(prev => ({ ...prev, message: suggestion }));
    setShowSuggestions(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-indigo-100'
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Let's Connect 📬
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Have a project in mind? Want to collaborate? Or just want to say hi?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm ${
              theme === 'dark'
                ? 'bg-gray-800/50 border border-gray-700'
                : 'bg-white/70 border border-gray-200'
            }`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="relative">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Message
                  <button
                    type="button"
                    onClick={() => setShowSuggestions(!showSuggestions)}
                    className="ml-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <Sparkles size={16} className="inline" />
                  </button>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your message here..."
                  onFocus={() => setShowSuggestions(true)}
                />

                {/* AI Suggestions */}
                {showSuggestions && (
                  <motion.div
                    className={`absolute top-full left-0 right-0 mt-2 p-4 rounded-lg shadow-lg z-10 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-gray-700'
                        : 'bg-white border border-gray-200'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p
                      className={`text-sm mb-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      AI-powered suggestions:
                    </p>
                    <div className="space-y-2">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className={`block w-full text-left p-2 rounded text-sm transition-colors ${
                            theme === 'dark'
                              ? 'hover:bg-gray-700 text-gray-300'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white/70 border border-gray-200'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Get in Touch
              </h3>
              <p
                className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                        : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                    } hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div
              className={`p-8 rounded-2xl shadow-xl backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white/70 border border-gray-200'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Quick Info
              </h3>
              <div className="space-y-3">
                <p
                  className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  📍 Based in Bengaluru, India
                </p>
                <p
                  className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  🕒 Usually responds within 24 hours
                </p>
                <p
                  className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  💼 Open to freelance & full-time opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;