'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20 border border-white/10 p-12 md:p-16"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_70%)]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join thousands of users already using YDYL Token. Wallet connection coming soon!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="px-10 py-5 bg-gradient-to-r from-purple-600/60 to-blue-600/60 rounded-lg text-white font-semibold text-xl transition-all cursor-not-allowed opacity-60 shadow-lg shadow-purple-500/30">
                Connect Wallet - Coming Soon
              </button>
              <Link 
                href="/community"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-white font-semibold text-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Join Community
              </Link>
              <Link 
                href="/enquiry"
                className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold text-xl transition-all backdrop-blur-sm hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
