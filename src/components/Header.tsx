'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo and Club Name - Using new icon */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1F7A3A] to-[#34d058] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
              <Image 
                src="/apple-touch-icon.png" 
                alt="CHCI Logo" 
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#111111] tracking-tight">CHCI Coding</h1>
              <p className="text-sm text-gray-500 font-medium">x Robotics</p>
            </div>
          </Link>

          {/* Clean Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#1F7A3A] font-medium transition-colors duration-200 text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[#1F7A3A] font-medium transition-colors text-lg py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}