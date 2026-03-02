'use client'

import { motion } from 'framer-motion'

export default function TokenInfo() {
  const tokenDetails = {
    name: 'YDYL Token',
    symbol: 'YDYL',
    decimals: 18,
    totalSupply: '1,000,000,000',
    network: 'Ethereum Mainnet',
  }

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
              Token Information
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Essential details about YDYL Token
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Token Name */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Token Name</div>
                <div className="text-2xl font-bold text-white">{tokenDetails.name}</div>
              </div>

              {/* Token Symbol */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Symbol</div>
                <div className="text-2xl font-bold text-white">{tokenDetails.symbol}</div>
              </div>

              {/* Decimals */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Decimals</div>
                <div className="text-2xl font-bold text-white">{tokenDetails.decimals}</div>
              </div>

              {/* Total Supply */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Total Supply</div>
                <div className="text-2xl font-bold text-white">{tokenDetails.totalSupply} {tokenDetails.symbol}</div>
              </div>

              {/* Network */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Network</div>
                <div className="text-xl font-semibold text-white">{tokenDetails.network}</div>
              </div>

              {/* Contract Address */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 md:col-span-2">
                <div className="text-sm text-gray-400 mb-3">Contract Address</div>
                <div className="text-xl font-semibold text-gray-400 opacity-60">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Token Logo/Icon */}
            <div className="mt-8 text-center">
              <div className="inline-block p-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-white/10">
                <div className="text-6xl mb-4">🪙</div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {tokenDetails.symbol}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
