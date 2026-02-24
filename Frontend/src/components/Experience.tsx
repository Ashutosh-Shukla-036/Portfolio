import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
    const theme = useRecoilValue(themeState);

    const bullets = [
        'Architected a shared PostgreSQL connection pool singleton and schema cache within the core Python database handler, eliminating per-request pool creation across multiple services and reducing connection overhead.',
        'Re-engineered transaction lifecycle management in the database abstraction layer, preventing unintended rollbacks and strengthening consistency guarantees for robotic execution pipelines.',
        'Discovered and resolved two silent production-critical defects — a connection double-close during schema operations and a trigger-guard bypass masked by exception handlers.',
        'Built a unified multi-service database test framework using an isolated test database to validate schema integrity and CRUD behavior per service, establishing a regression safety baseline for future production deployments.',
    ];

    return (
        <section
            id="experience"
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
                        Experience
                    </p>
                    <h2
                        className={`headline-lg ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                            }`}
                    >
                        Where I've been building.
                    </h2>
                </motion.div>

                {/* Experience card */}
                <motion.div
                    className="card p-8 md:p-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                        <div>
                            <h3
                                className={`headline-md mb-2 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                                    }`}
                            >
                                Software Engineer Intern
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="flex items-center gap-1.5 text-text-secondary text-sm">
                                    <Building2 size={14} className="text-accent" />
                                    LeapMile Robotics
                                </span>
                                <span className="flex items-center gap-1.5 text-text-secondary text-sm">
                                    <Calendar size={14} className="text-accent" />
                                    Jan 2026 — Present
                                </span>
                                <span className="flex items-center gap-1.5 text-text-secondary text-sm">
                                    <MapPin size={14} className="text-accent" />
                                    On-site
                                </span>
                            </div>
                        </div>

                        {/* Status badge */}
                        <span className="pill !bg-accent/10 !text-accent !border-accent/20 self-start whitespace-nowrap">
                            Current Role
                        </span>
                    </div>

                    {/* Bullets */}
                    <div className="space-y-5">
                        {bullets.map((bullet, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                <p className="body-md !text-sm leading-relaxed">
                                    {bullet}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech tags */}
                    <motion.div
                        className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.06]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {['Python', 'PostgreSQL', 'Database Architecture', 'Connection Pooling', 'Testing Frameworks'].map(
                            (tech) => (
                                <span key={tech} className="pill text-xs">
                                    {tech}
                                </span>
                            )
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
