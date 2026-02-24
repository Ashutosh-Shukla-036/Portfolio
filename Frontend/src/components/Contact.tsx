import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, ExternalLink, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const theme = useRecoilValue(themeState);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ashutosh-Shukla-036',
      icon: <Github size={18} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashutosh-shukla-1189b625b/',
      icon: <Linkedin size={18} />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Ashutoshshukla_123/',
      icon: <ExternalLink size={18} />,
    },
    {
      name: 'Email',
      url: 'mailto:ashutoshshukla8970@gmail.com',
      icon: <Mail size={18} />,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    alert("Message sent successfully! I'll get back to you soon.");
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 ${theme === 'dark'
      ? 'bg-white/[0.04] border border-white/[0.08] text-text-primary placeholder:text-text-tertiary focus:border-accent/30'
      : 'bg-black/[0.02] border border-black/[0.08] text-text-primary-light placeholder:text-text-tertiary focus:border-accent/30'
    }`;

  return (
    <section
      id="contact"
      className={`py-28 md:py-36 ${theme === 'dark' ? 'bg-black' : 'bg-surface-light'
        }`}
    >
      <div className="section-divider mb-28" />

      <div className="max-w-[980px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2
            className={`headline-lg mb-4 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
              }`}
          >
            Let's build something together.
          </h2>
          <p className="body-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to
            discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className={`block text-xs font-medium uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-text-secondary' : 'text-text-tertiary'
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
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs font-medium uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-text-secondary' : 'text-text-tertiary'
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
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs font-medium uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-text-secondary' : 'text-text-tertiary'
                      }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
                      ? 'bg-text-secondary/20 text-text-tertiary cursor-not-allowed'
                      : 'bg-accent text-white hover:bg-accent-hover'
                    }`}
                  whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Location */}
            <div className="card p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p
                    className={`font-semibold text-sm ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                      }`}
                  >
                    Bengaluru, Karnataka
                  </p>
                  <p className="text-text-secondary text-xs mt-0.5">India</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:ashutoshshukla8970@gmail.com"
                    className={`text-sm transition-colors hover:text-accent ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                      }`}
                  >
                    ashutoshshukla8970@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+917483562755"
                    className={`text-sm transition-colors hover:text-accent ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                      }`}
                  >
                    (+91) 7483562755
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="card p-6">
              <p
                className={`text-xs font-semibold tracking-widest uppercase mb-4 ${theme === 'dark' ? 'text-text-secondary' : 'text-text-tertiary'
                  }`}
              >
                Connect
              </p>
              <div className="space-y-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${theme === 'dark'
                        ? 'hover:bg-white/[0.04] text-text-secondary hover:text-text-primary'
                        : 'hover:bg-black/[0.03] text-text-tertiary hover:text-text-primary-light'
                      }`}
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-24 pt-8 border-t border-white/[0.04]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-text-tertiary text-xs">
            Designed & built by Ashutosh Shukla · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;