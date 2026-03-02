'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import TokenStats from '@/components/TokenStats'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import TokenInfo from '@/components/TokenInfo'
import NetworkInfo from '@/components/NetworkInfo'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo size="md" />
          <div className="flex items-center gap-3">
            <Link 
              href="/community"
              className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium text-sm transition-all backdrop-blur-sm"
            >
              Community
            </Link>
            <Link 
              href="/enquiry"
              className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium text-sm transition-all backdrop-blur-sm"
            >
              Enquiry
            </Link>
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium text-sm transition-all backdrop-blur-sm cursor-not-allowed opacity-60">
              Coming Soon
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Token Stats */}
      <TokenStats />

      {/* Features Section */}
      <Features />

      {/* Token Information */}
      <TokenInfo />

      {/* Network Information */}
      <NetworkInfo />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo size="sm" />
            <div className="text-gray-400 text-sm">
              © 2024 YDYL Token. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
