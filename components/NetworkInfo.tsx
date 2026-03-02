'use client'

import { motion } from 'framer-motion'

const networks = [
  {
    name: 'Ethereum',
    chainId: 1,
    symbol: 'ETH',
    icon: '🔷',
    color: 'from-blue-500 to-blue-700',
    status: 'Active',
    description: 'Main network for YDYL Token',
  },
  {
    name: 'Polygon',
    chainId: 137,
    symbol: 'MATIC',
    icon: '🟣',
    color: 'from-purple-500 to-purple-700',
    status: 'Active',
    description: 'Low-cost transactions',
  },
  {
    name: 'Arbitrum',
    chainId: 42161,
    symbol: 'ETH',
    icon: '🔵',
    color: 'from-cyan-500 to-cyan-700',
    status: 'Active',
    description: 'Layer 2 scaling solution',
  },
  {
    name: 'Optimism',
    chainId: 10,
    symbol: 'ETH',
    icon: '🔴',
    color: 'from-red-500 to-red-700',
    status: 'Active',
    description: 'Optimistic rollup network',
  },
  {
    name: 'BNB Chain',
    chainId: 56,
    symbol: 'BNB',
    icon: '🟡',
    color: 'from-yellow-500 to-yellow-700',
    status: 'Coming Soon',
    description: 'Binance Smart Chain support',
  },
  {
    name: 'Avalanche',
    chainId: 43114,
    symbol: 'AVAX',
    icon: '❄️',
    color: 'from-teal-500 to-teal-700',
    status: 'Coming Soon',
    description: 'High throughput network',
  },
]

export default function NetworkInfo() {
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
              Supported Networks
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            YDYL Token is available on multiple blockchain networks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${network.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-2xl`}></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{network.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    network.status === 'Active'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                  }`}>
                    {network.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{network.name}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                  <span>Chain ID: {network.chainId}</span>
                  <span>•</span>
                  <span>{network.symbol}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{network.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network Switching Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-white mb-2">Multi-Chain Support</h3>
            <p className="text-gray-400">
              Switch between networks seamlessly using your wallet. YDYL Token is available across multiple blockchains for maximum accessibility and flexibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
