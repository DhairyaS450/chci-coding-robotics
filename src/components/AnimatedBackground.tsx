'use client'

import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/5 rounded-lg rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white/5 rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/3 rounded-lg animate-bounce-slow" />
      
      {/* Code Elements */}
      <div className="absolute top-1/5 right-1/5 text-white/10 text-2xl font-mono animate-fade-pulse">
        {'{ }'}
      </div>
      <div className="absolute bottom-1/4 left-1/6 text-white/10 text-xl font-mono animate-fade-pulse" style={{animationDelay: '2s'}}>
        &lt;/&gt;
      </div>
      <div className="absolute top-3/4 right-1/6 text-white/10 text-lg font-mono animate-fade-pulse" style={{animationDelay: '4s'}}>
        function()
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/5 right-1/8 w-96 h-96 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}} />
    </div>
  )
}