'use client'

import { motion } from 'framer-motion'

export default function TokenStats() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Token Statistics
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Detailed token statistics are coming soon.
          </p>
          <div className="inline-block px-8 py-4 rounded-2xl border border-dashed border-purple-500/50 bg-white/5 text-purple-200 text-lg font-medium">
            Coming Soon
          </div>
        </motion.div>
      </div>
    </section>
  )
}
