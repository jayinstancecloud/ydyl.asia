'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center`}>
        <Image
          src="/logo.png"
          alt="YDYL Token Logo"
          fill
          className="object-contain p-0.5"
          priority
          onError={(e) => {
            // Fallback to text if image fails to load
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = '<span class="text-white font-bold">Y</span>'
            }
          }}
        />
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent`}>
          YDYL
        </span>
      )}
    </Link>
  )
}
