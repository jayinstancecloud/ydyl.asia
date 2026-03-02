'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    label: 'Total Supply',
    value: '1,000,000,000',
    icon: '📊',
    color: 'from-purple-500 to-purple-700',
  },
  {
    label: 'Market Cap',
    value: '$50,000,000',
    icon: '💎',
    color: 'from-blue-500 to-blue-700',
  },
  {
    label: 'Holders',
    value: '10,000+',
    icon: '👥',
    color: 'from-pink-500 to-pink-700',
  },
  {
    label: 'Transactions',
    value: '500,000+',
    icon: '⚡',
    color: 'from-cyan-500 to-cyan-700',
  },
]

export default function TokenStats() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Token Statistics
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time data about YDYL Token
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
