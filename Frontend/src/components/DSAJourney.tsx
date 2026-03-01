import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Target, Brain, TrendingUp, Zap, Trophy, Award, Medal, Calendar, Code2, ExternalLink } from 'lucide-react';

const DSAJourney: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const stats = [
    { label: 'Problems Solved', value: '221', icon: <Target size={20} /> },
    { label: 'Easy', value: '101', icon: <Zap size={20} /> },
    { label: 'Medium', value: '107', icon: <TrendingUp size={20} /> },
    { label: 'Hard', value: '13', icon: <Trophy size={20} /> },
    { label: 'Contest Rating', value: '1349', icon: <Award size={20} /> },
    { label: 'Top Percentile', value: '93.67%', icon: <Medal size={20} /> },
    { label: 'Submissions (1yr)', value: '533', icon: <Code2 size={20} /> },
    { label: 'Max Streak', value: '64 days', icon: <Calendar size={20} /> },
  ];

  const problemDistribution = [
    { type: 'Easy', count: 101, percentage: 45.7, color: 'bg-accent-green' },
    { type: 'Medium', count: 107, percentage: 48.4, color: 'bg-accent-orange' },
    { type: 'Hard', count: 13, percentage: 5.9, color: 'bg-accent-red' },
  ];

  const dsaTopics = [
    {
      topic: 'Arrays & Strings',
      summary: 'Solved 50+ problems using Brute → Better → Optimal strategy. Mastered sliding window, two pointers.',
      repo: 'DSA-in-Python',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Python',
    },
    {
      topic: 'HashMap & Hashing',
      summary: 'Mastered key-value strategies, frequency counting, and hash-based optimizations for complex problems.',
      repo: 'DSA-in-Python',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Python',
    },
    {
      topic: 'Recursion & Backtracking',
      summary: 'Recursive tree traversal, permutations, combinations, N-Queens, and maze solving algorithms.',
      repo: 'DSA-in-Python',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Python',
    },
    {
      topic: 'Dynamic Programming',
      summary: 'Solved classic DP problems: LIS, LCS, knapsack variants, and optimization challenges.',
      repo: 'DSA-in-Python',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Python',
    },
    {
      topic: 'Sliding Window & Two Pointers',
      summary: 'Optimized array/string problems with moving windows and pointer techniques for O(n) solutions.',
      repo: 'DSA-in-Python',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Python',
    },
    {
      topic: 'Graphs & Trees',
      summary: 'BFS, DFS, shortest paths, MST algorithms, and binary tree traversals with optimal solutions.',
      repo: 'DSA-in-Python',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Python',
    },
    {
      topic: 'Stacks & Queues',
      summary: 'Implemented core stack/queue operations and used in expression evaluation and parsing.',
      repo: 'DSA-in-Java',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Java',
    },
    {
      topic: 'Linked Lists',
      summary: 'Built custom singly, doubly, and circular linked lists with advanced manipulation techniques.',
      repo: 'DSA-in-Java',
      repoUrl: 'https://github.com/Ashutosh-Shukla-036/DSA-in-Java',
    },
  ];

  return (
    <section
      id="dsa"
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
            DSA Journey
          </p>
          <h2
            className={`headline-lg mb-6 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
              }`}
          >
            The grind that never stops.
          </h2>
          <div className="flex items-center gap-3 mb-2">
            <Brain size={20} className="text-accent" />
            <p className="body-md italic">
              "DSA is my gym — the brain workout I never skip."
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card card-spotlight p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="text-accent mb-2 flex justify-center relative z-10">
                {stat.icon}
              </div>
              <p
                className={`text-xl font-bold font-display tabular-nums relative z-10 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                  }`}
              >
                {stat.value}
              </p>
              <p className="text-text-secondary text-xs mt-1 relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem Distribution */}
        <motion.div
          className="card card-spotlight p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p
            className={`relative z-10 text-sm font-semibold tracking-widest uppercase mb-6 ${theme === 'dark' ? 'text-text-secondary' : 'text-text-tertiary'
              }`}
          >
            Problem Distribution
          </p>
          <div className="space-y-5 relative z-10">
            {problemDistribution.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-sm font-medium ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                      }`}
                  >
                    {item.type}
                  </span>
                  <span className="text-text-secondary text-xs tabular-nums">
                    {item.count} ({item.percentage}%)
                  </span>
                </div>
                <div
                  className={`w-full rounded-full h-2 ${theme === 'dark' ? 'bg-white/[0.06]' : 'bg-black/[0.06]'
                    }`}
                >
                  <motion.div
                    className={`h-2 rounded-full ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p
            className={`text-sm font-semibold tracking-widest uppercase mb-6 ${theme === 'dark' ? 'text-text-secondary' : 'text-text-tertiary'
              }`}
          >
            Special Focus Areas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dsaTopics.map((item, index) => (
              <motion.div
                key={index}
                className="card card-spotlight p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="relative z-10">
                  <h4
                    className={`font-semibold text-sm mb-2 ${theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                      }`}
                  >
                    {item.topic}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="pill text-xs">{item.repo}</span>
                    <motion.a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-hover transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={12} />
                      View
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LeetCode CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="https://leetcode.com/u/Ashutoshshukla_123/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Code2 size={18} />
            View LeetCode Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DSAJourney;