# YDYL Token - Landing Page

A modern, beautiful landing page for YDYL Token, a Web3 token project built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Beautiful gradient-based UI with glassmorphism effects
- 🔐 **Wallet Integration** - Connect with MetaMask and other Web3 wallets via RainbowKit
- 📊 **Token Statistics** - Display token metrics and statistics
- ✨ **Animations** - Smooth animations using Framer Motion
- 📱 **Responsive** - Fully responsive design for all devices
- ⚡ **Fast** - Built with Next.js 14 for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- A Web3 wallet (MetaMask recommended)

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Get a WalletConnect Project ID for mobile wallet support:
   - Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
   - Create a project and get your Project ID
   - Create a `.env.local` file with:
     ```
     NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
     ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ydyl.asia/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   ├── providers.tsx       # Web3 providers (Wagmi + RainbowKit)
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── TokenStats.tsx      # Token statistics section
│   ├── Features.tsx        # Features section
│   └── CTA.tsx             # Call-to-action section
└── package.json
```

## Sections

1. **Hero Section** - Eye-catching introduction with animated gradients
2. **Token Statistics** - Display key token metrics
3. **Features** - Highlight key features and benefits
4. **Call to Action** - Encourage wallet connection and engagement
5. **Footer** - Simple footer with branding

## Customization

- Update token statistics in `components/TokenStats.tsx`
- Modify features in `components/Features.tsx`
- Change colors and gradients in `tailwind.config.js`
- Update metadata in `app/layout.tsx`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Wagmi** - React Hooks for Ethereum
- **RainbowKit** - Wallet connection UI
- **Viem** - TypeScript Ethereum library

## License

MIT
