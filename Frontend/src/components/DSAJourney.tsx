import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/atoms';
import { motion } from 'framer-motion';
import { Code2, Target, Brain, TrendingUp, Award, ExternalLink, Trophy, Calendar, Zap, Medal } from 'lucide-react';

const DSAJourney: React.FC = () => {
  const theme = useRecoilValue(themeState);

  const stats = [
    { label: 'Problems Solved', value: '221', icon: <Target size={24} />, color: 'from-blue-500 to-blue-600' },
    { label: 'Easy Problems', value: '101', icon: <Zap size={24} />, color: 'from-green-500 to-green-600' },
    { label: 'Medium Problems', value: '107', icon: <TrendingUp size={24} />, color: 'from-yellow-500 to-yellow-600' },
    { label: 'Hard Problems', value: '13', icon: <Trophy size={24} />, color: 'from-red-500 to-red-600' },
    { label: 'Contest Rating', value: '1349', icon: <Award size={24} />, color: 'from-purple-500 to-purple-600' },
    { label: 'Top Percentile', value: '93.67%', icon: <Medal size={24} />, color: 'from-indigo-500 to-indigo-600' },
    { label: 'Submissions (1yr)', value: '533', icon: <Code2 size={24} />, color: 'from-cyan-500 to-cyan-600' },
    { label: 'Max Streak', value: '64 days', icon: <Calendar size={24} />, color: 'from-orange-500 to-orange-600' },
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

  // Problem distribution data for visualization
  const problemDistribution = [
    { type: 'Easy', count: 101, percentage: 45.7, color: 'bg-green-500' },
    { type: 'Medium', count: 107, percentage: 48.4, color: 'bg-yellow-500' },
    { type: 'Hard', count: 13, percentage: 5.9, color: 'bg-red-500' },
  ];

  return (
    <section
      id="dsa"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
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
            DSA + LeetCode Journey 🧠
          </h2>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          className={`max-w-4xl mx-auto mb-12 p-8 rounded-2xl shadow-xl backdrop-blur-sm border-l-4 border-blue-500 ${
            theme === 'dark'
              ? 'bg-gray-800/50 border-gray-700'
              : 'bg-white/70 border-gray-200'
          }`}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, x: 10 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Brain size={32} className="text-blue-500" />
            </motion.div>
            <blockquote
              className={`text-xl md:text-2xl font-medium italic ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              "DSA is my gym — the brain workout I never skip."
            </blockquote>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-sm text-center relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white/70 border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}></div>
              
              <motion.div 
                className="text-blue-500 mb-3 flex justify-center relative z-10"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className={`text-xl md:text-2xl font-bold mb-1 relative z-10 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div
                className={`text-xs md:text-sm relative z-10 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem Distribution Visualization */}
        <motion.div
          className={`max-w-4xl mx-auto mb-12 p-8 rounded-2xl shadow-xl backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-gray-800/50 border border-gray-700'
              : 'bg-white/70 border border-gray-200'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className={`text-2xl font-bold mb-6 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Problem Distribution
          </h3>
          
          <div className="space-y-4">
            {problemDistribution.map((item, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                    }`}
                  >
                    {item.type}
                  </span>
                  <span
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {item.count} ({item.percentage}%)
                  </span>
                </div>
                <div
                  className={`w-full rounded-full h-3 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  <motion.div
                    className={`h-3 rounded-full ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DSA Focus Areas */}
        <motion.div
          className={`max-w-6xl mx-auto mb-12 p-8 rounded-2xl shadow-xl backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-gray-800/50 border border-gray-700'
              : 'bg-white/70 border border-gray-200'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Special Focus Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dsaTopics.map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg backdrop-blur-sm border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-900/50 border-gray-600 hover:border-blue-400'
                    : 'bg-white/80 border-gray-200 hover:border-blue-400'
                } hover:shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="space-y-4">
                  <h4 
                    className={`text-xl font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {item.topic}
                  </h4>
                  <p 
                    className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span 
                      className={`text-xs px-3 py-1 rounded-full ${
                        theme === 'dark'
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {item.repo}
                    </span>
                    <motion.a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      View Repo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LeetCode Profile Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://leetcode.com/u/Ashutoshshukla_123/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 size={24} />
            View LeetCode Profile
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DSAJourney;