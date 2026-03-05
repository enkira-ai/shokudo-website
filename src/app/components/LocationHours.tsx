'use client'

import { motion } from 'framer-motion'

const restaurantInfo = {
  address: '1855 Route 57, Unit A',
  city: 'Hackettstown',
  state: 'NJ',
  zip: '07840',
  googleMapsUrl: 'https://maps.google.com/?q=1855+Route+57+Hackettstown+NJ+07840',
  phone: '(908) 269-8390',
  hours: [
    { days: 'Mon – Sat', time: '11:30am – 10:00pm' },
    { days: 'Sunday', time: '12:00pm – 10:00pm' },
  ],
}

export default function LocationHours() {
  return (
    <section id="location" className="py-28 bg-ink relative overflow-hidden">
      {/* Decorative kanji */}
      <div className="absolute -top-8 left-0 select-none pointer-events-none">
        <span
          className="font-mincho leading-none text-cream"
          style={{ fontSize: '20rem', opacity: 0.018 }}
        >
          所
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mincho text-amber text-xs tracking-[0.45em] uppercase block mb-4">
            Find Us
          </span>
          <h2 className="font-display text-cream text-4xl md:text-6xl mb-5">
            Location &amp; Hours
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#352e26]" />
            <span className="font-mincho text-amber text-xl">場所</span>
            <div className="h-px w-14 bg-[#352e26]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Address block */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-5 bg-amber" />
                <span className="font-mincho text-amber text-xs tracking-[0.35em] uppercase">
                  Address
                </span>
              </div>
              <p className="text-cream text-base leading-relaxed mb-1">
                {restaurantInfo.address}
              </p>
              <p className="text-cream text-base leading-relaxed mb-6">
                {restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}
              </p>
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block"
              >
                Get Directions
              </a>
            </div>

            {/* Hours block */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-5 bg-amber" />
                <span className="font-mincho text-amber text-xs tracking-[0.35em] uppercase">
                  Hours
                </span>
              </div>
              <div className="space-y-0">
                {restaurantInfo.hours.map(({ days, time }) => (
                  <div
                    key={days}
                    className="flex justify-between py-3 border-b border-[#352e26] last:border-0"
                  >
                    <span className="font-mincho text-cream text-sm">{days}</span>
                    <span className="text-warm-muted text-sm">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone block */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-5 bg-amber" />
                <span className="font-mincho text-amber text-xs tracking-[0.35em] uppercase">
                  Phone
                </span>
              </div>
              <a
                href={`tel:+1${restaurantInfo.phone.replace(/\D/g, '')}`}
                className="font-mincho text-cream text-sm hover:text-gold transition-colors duration-200"
              >
                {restaurantInfo.phone}
              </a>
            </div>
          </motion.div>

          {/* Right: Map card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="bg-warm-ink border border-[#352e26] overflow-hidden">
              {/* Map pin header */}
              <div className="px-8 py-7 border-b border-[#352e26]">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--amber)">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mincho text-gold text-base tracking-[0.1em] mb-1">
                      食堂 SHOKUDO
                    </p>
                    <p className="text-warm-muted text-xs leading-relaxed">
                      1855 Route 57, Unit A<br />
                      Hackettstown, NJ 07840
                    </p>
                  </div>
                </div>
              </div>

              {/* Static map embed */}
              <div className="relative" style={{ paddingBottom: '60%' }}>
                <iframe
                  title="Shokudo Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5!2d-74.84!3d40.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a9e9e9e9e9e9%3A0x0!2s1855+NJ-57%2C+Hackettstown%2C+NJ+07840!5e0!3m2!1sen!2sus!4v1"
                  className="absolute inset-0 w-full h-full grayscale contrast-[1.1] opacity-80"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* CTA */}
              <div className="px-8 py-6 flex justify-center">
                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-amber hover:text-gold transition-colors duration-200 text-xs font-mincho tracking-[0.2em] uppercase group"
                >
                  <span>Open in Google Maps</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  >
                    <path d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
