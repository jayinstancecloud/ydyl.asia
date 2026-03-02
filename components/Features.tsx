'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Decentralized',
    description: 'Built on blockchain technology ensuring transparency and security',
    icon: '🔗',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Fast Transactions',
    description: 'Lightning-fast transaction speeds with minimal gas fees',
    icon: '⚡',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Secure',
    description: 'Advanced security measures protecting your assets',
    icon: '🛡️',
    gradient: 'from-green-500 to-green-700',
  },
  {
    title: 'Scalable',
    description: 'Designed to handle millions of transactions per second',
    icon: '📈',
    gradient: 'from-pink-500 to-pink-700',
  },
  {
    title: 'Community Driven',
    description: 'Governed by the community through decentralized voting',
    icon: '👥',
    gradient: 'from-cyan-500 to-cyan-700',
  },
  {
    title: 'Interoperable',
    description: 'Works seamlessly across multiple blockchain networks',
    icon: '🌐',
    gradient: 'from-orange-500 to-orange-700',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
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
              Why Choose YDYL?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the power of next-generation blockchain technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              ></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all h-full">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
