'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const heroImageUrl = 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&h=1080&fit=crop&crop=entropy&cs=tinysrgb'

  return (
    <section className="relative h-[100svh] md:h-[100vh] overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(28,28,30,0.55)]" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="font-mincho text-4xl md:text-6xl text-white font-bold mb-4">
          食堂 SHOKUDO
        </h1>
        
        <p className="font-cormorant italic text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Authentic Ramen & Japanese Cuisine
        </p>
        
        <p className="text-white mb-12 text-lg md:text-xl">
          Hackettstown, New Jersey
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href={process.env.NEXT_PUBLIC_ORDER_URL || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Order Online
          </Link>
          <Link href="#menu" className="btn-secondary text-lg">
            View Menu
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  )
}
