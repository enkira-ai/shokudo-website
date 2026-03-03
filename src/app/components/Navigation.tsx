'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#1C1C1E] text-white nav-solid' 
        : 'bg-transparent text-[#1C1C1E] nav-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-mincho font-bold">
            食堂 SHOKUDO
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#menu" className="hover:text-[#C0392B] transition-colors">
              Menu
            </Link>
            <Link href="#gallery" className="hover:text-[#C0392B] transition-colors">
              Gallery
            </Link>
            <Link href="#location" className="hover:text-[#C0392B] transition-colors">
              Location
            </Link>
            <a 
              href={process.env.NEXT_PUBLIC_ORDER_URL || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl">
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}
