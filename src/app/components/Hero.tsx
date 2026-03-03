'use client'

import { motion } from 'framer-motion'

const ORDER_URL =
  'https://order.mealkeyway.com/customer/release/index?mid=6f35786d755767486d2f543268774c544251572b63413d3d#/main'
const RESERVE_URL =
  'https://www.yelp.com/reservations/shokudo-hackettstown?from_reserve_now=1'

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            'url(/images/2829cb76-ecc3-4d27-91ff-3dda65e78e52.jpg)',
        }}
      />

      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-[#1a1612]/62" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(26,22,18,0.72) 100%)',
        }}
      />

      {/* Vertical Japanese text — left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 text-amber/35">
        <span
          className="font-mincho text-xs tracking-[0.5em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          本格日本料理
        </span>
        <div className="w-px h-12 bg-amber/20 mt-3" />
      </div>

      {/* Vertical Japanese text — right */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2 text-amber/35">
        <div className="w-px h-12 bg-amber/20 mb-3" />
        <span
          className="font-mincho text-xs tracking-[0.5em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          ニュージャージー
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Location eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-7"
        >
          <div className="h-px w-10 bg-amber/55" />
          <span className="font-mincho text-amber text-xs tracking-[0.45em] uppercase">
            Hackettstown, New Jersey
          </span>
          <div className="h-px w-10 bg-amber/55" />
        </motion.div>

        {/* Japanese characters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-1"
        >
          <span className="font-mincho text-gold text-5xl md:text-7xl font-bold tracking-[0.18em]">
            食堂
          </span>
        </motion.div>

        {/* English name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-cream text-5xl md:text-8xl lg:text-9xl tracking-[0.22em] mb-7"
        >
          SHOKUDO
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-8 bg-cream/25" />
          <span className="font-mincho text-cream/65 text-sm tracking-[0.35em]">
            拉麺　·　寿司　·　居酒屋
          </span>
          <div className="h-px w-8 bg-cream/25" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-9 py-3.5 text-sm tracking-[0.15em]"
          >
            Order Online
          </a>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-9 py-3.5 text-sm tracking-[0.15em]"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream/35"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-mincho text-[10px] tracking-[0.35em] uppercase">
          scroll
        </span>
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        >
          <path d="M7 2v16M2 13l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  )
}
