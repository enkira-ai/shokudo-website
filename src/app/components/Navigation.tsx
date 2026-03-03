'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1a1612]/96 backdrop-blur-sm border-b border-[#352e26]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="font-mincho text-gold text-xl tracking-[0.15em] group-hover:text-amber transition-colors">
            食堂
          </span>
          <span className="font-display text-cream text-xl tracking-[0.2em] group-hover:text-gold transition-colors">
            SHOKUDO
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mincho text-sm text-warm-muted hover:text-cream tracking-[0.12em] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://order.mealkeyway.com/customer/release/index?mid=6f35786d755767486d2f543268774c544251572b63413d3d#/main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber text-sm py-2 px-5"
          >
            Order Online
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-cream transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-px bg-cream transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-px bg-cream transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        } bg-[#1a1612]/98 border-t border-[#352e26]`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-mincho text-cream text-lg tracking-[0.1em] hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://order.mealkeyway.com/customer/release/index?mid=6f35786d755767486d2f543268774c544251572b63413d3d#/main"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber text-center mt-1"
          >
            Order Online
          </a>
        </div>
      </div>
    </nav>
  )
}
