'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, polygon, arbitrum, optimism } from 'wagmi/chains'
import { injected, metaMask } from 'wagmi/connectors'
import '@rainbow-me/rainbowkit/styles.css'

const config = createConfig({
  chains: [mainnet, sepolia, polygon, arbitrum, optimism],
  connectors: [
    injected({ shimDisconnect: true }),
    metaMask({ dappMetadata: { name: 'YDYL Token' } }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
  },
  ssr: true,
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={mainnet}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
