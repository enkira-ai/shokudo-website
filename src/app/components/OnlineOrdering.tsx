'use client'

import { motion } from 'framer-motion'

const MEALKEYWAY_URL =
  'https://order.mealkeyway.com/customer/release/index?mid=6f35786d755767486d2f543268774c544251572b63413d3d#/main'
const DOORDASH_URL =
  'https://www.doordash.com/store/shokudo-ramen-and-sushi-hackettstown-27580685/'
const YELP_URL = 'https://www.yelp.com/biz/shokudo-hackettstown'
const GRUBHUB_URL =
  'https://www.grubhub.com/restaurant/shokudo-ramen--sushi-1855-nj-57-hackettstown/9053175'

export default function OnlineOrdering() {
  return (
    <section id="order" className="py-28 bg-[#13100d] relative overflow-hidden">
      {/* Decorative kanji */}
      <div className="absolute top-0 right-0 select-none pointer-events-none overflow-hidden">
        <span
          className="font-mincho leading-none text-cream"
          style={{ fontSize: '18rem', opacity: 0.018 }}
        >
          注
        </span>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <span className="font-mincho text-amber text-xs tracking-[0.45em] uppercase block mb-5">
            Order Online
          </span>
          <h2 className="font-display text-cream text-4xl md:text-5xl mb-5 tracking-wide">
            Skip the Wait
          </h2>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-14 bg-[#352e26]" />
            <span className="font-mincho text-amber text-xl">注文</span>
            <div className="h-px w-14 bg-[#352e26]" />
          </div>
          <p className="text-cream/50 font-mincho text-sm tracking-wide mb-12">
            Order pickup or delivery through your preferred platform
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <a
            href={MEALKEYWAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-12 py-4 text-sm tracking-[0.18em] inline-block mb-12"
          >
            Order on MealKeyway
          </a>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#352e26]" />
          <span className="font-mincho text-cream/25 text-[10px] tracking-[0.2em] uppercase">
            or order via
          </span>
          <div className="flex-1 h-px bg-[#352e26]" />
        </div>

        {/* Other platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'DoorDash', href: DOORDASH_URL },
            { label: 'Grubhub', href: GRUBHUB_URL },
            { label: 'Yelp', href: YELP_URL },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#352e26] hover:border-amber/35 bg-[#1a1612] hover:bg-[#201c17] text-cream/60 hover:text-cream px-7 py-3 text-xs font-mincho tracking-[0.1em] transition-all duration-250"
              style={{ borderRadius: '1px' }}
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Phone note */}
        <p className="mt-12 text-cream/30 font-mincho text-xs tracking-wider">
          Prefer to call?{' '}
          <a
            href="tel:+19082698390"
            className="text-amber/55 hover:text-amber transition-colors duration-200"
          >
            (908) 269-8390
          </a>
        </p>
      </div>
    </section>
  )
}
