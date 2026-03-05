'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 bg-warm-ink relative overflow-hidden">
      {/* Giant decorative kanji — 味 (flavor/taste) */}
      <div className="absolute -top-6 right-0 select-none pointer-events-none overflow-hidden">
        <span
          className="font-mincho leading-none text-cream"
          style={{ fontSize: '22rem', opacity: 0.02 }}
        >
          味
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-7 bg-amber" />
              <span className="font-mincho text-amber text-xs tracking-[0.38em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-cream text-4xl md:text-[3.25rem] mb-7 leading-[1.08] tracking-wide">
              A neighborhood gem
              <br />
              <em className="text-gold not-italic">worth finding.</em>
            </h2>

            <p className="text-warm-muted text-sm leading-[1.85] mb-5 max-w-[420px]">
              Tucked along Route 57 in Hackettstown, Shokudo is the kind of
              place regulars keep to themselves. We serve handcrafted ramen
              built on rich, long-simmered pork broth — and chef-driven sushi
              rolls that push well past tradition.
            </p>

            <p className="text-warm-muted text-sm leading-[1.85] mb-12 max-w-[420px]">
              Whether you're warming up with a bowl of Tonkotsu on a winter
              evening, sharing the Cowboy Roll over a cold beer, or building a
              poke bowl to your liking — Shokudo is where New Jersey meets Japan,
              in the best possible way.
            </p>

            {/* Stats */}
            <div className="flex gap-10 border-t border-[#352e26] pt-9">
              {[
                { num: '10+', label: 'Ramen Bowls', jp: '拉麺' },
                { num: '18+', label: "Chef's Rolls", jp: '特製巻' },
                { num: '8', label: 'Poke Bowls', jp: 'ポケ' },
              ].map(({ num, label, jp }) => (
                <div key={label} className="group">
                  <div className="font-display text-gold text-3xl mb-0.5 group-hover:text-amber transition-colors duration-300">
                    {num}
                  </div>
                  <div className="font-mincho text-warm-muted text-[10px] tracking-[0.2em] uppercase">
                    {label}
                  </div>
                  <div className="font-mincho text-[#4a4038] text-[10px] tracking-[0.1em] mt-0.5 group-hover:text-warm-muted transition-colors duration-300">
                    {jp}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="/images/d95d8e9a-1613-429b-92ed-d05eef7cc20d.jpg"
                alt="Shokudo restaurant atmosphere"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Warm gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/50 to-transparent pointer-events-none" />
            </div>

            {/* Hanko seal — positioned lower-left, overlapping edge */}
            <div className="absolute -bottom-5 -left-4 hanko">
              <span>食</span>
              <span>堂</span>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-3 -right-3 w-14 h-14 border-t-2 border-r-2 border-amber/40 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-amber/22 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
