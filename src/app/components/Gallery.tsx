'use client'

import { motion } from 'framer-motion'

const IMAGES = [
  {
    src: '/images/2829cb76-ecc3-4d27-91ff-3dda65e78e52.jpg',
    colSpan: 'col-span-2',
    rowSpan: 'row-span-2',
  },
  {
    src: '/images/3b63beeb-e971-4a64-87de-4365f20bf101.jpg',
    colSpan: '',
    rowSpan: '',
  },
  {
    src: '/images/52226172-a020-4194-8cee-d87e81844e24.jpg',
    colSpan: '',
    rowSpan: '',
  },
  {
    src: '/images/827db569-96bd-46dc-afb6-8ca563072f09.jpg',
    colSpan: '',
    rowSpan: '',
  },
  {
    src: '/images/98387f50-5092-4ed2-ab60-942e0437be06.jpg',
    colSpan: '',
    rowSpan: '',
  },
  {
    src: '/images/a06ccf60-941f-47a1-a5f4-de8bc393000f.jpg',
    colSpan: 'col-span-2',
    rowSpan: '',
  },
  {
    src: '/images/b5355418-63eb-4b1a-a604-863ac98d1946.jpg',
    colSpan: '',
    rowSpan: '',
  },
  {
    src: '/images/d1b76e40-41fb-4c0b-b7e7-043f66d34c42.jpg',
    colSpan: '',
    rowSpan: '',
  },
  {
    src: '/images/d95d8e9a-1613-429b-92ed-d05eef7cc20d.jpg',
    colSpan: '',
    rowSpan: '',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-warm-ink">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-mincho text-amber text-xs tracking-[0.45em] uppercase block mb-4">
            Gallery
          </span>
          <h2 className="font-display text-cream text-4xl md:text-6xl mb-5">
            A Taste of Shokudo
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#352e26]" />
            <span className="font-mincho text-amber text-xl">写真</span>
            <div className="h-px w-14 bg-[#352e26]" />
          </div>
        </div>

        {/* Desktop grid — intentional masonry rhythm */}
        <div
          className="hidden md:grid grid-cols-3 gap-2"
          style={{ gridAutoRows: '210px' }}
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className={`gallery-item ${img.colSpan} ${img.rowSpan}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <img
                src={img.src}
                alt={`Shokudo food photo ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile grid — 2 columns, equal height */}
        <div className="md:hidden grid grid-cols-2 gap-2" style={{ gridAutoRows: '180px' }}>
          {IMAGES.map((img, i) => (
            <motion.div
              key={`mobile-${img.src}`}
              className="gallery-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={img.src}
                alt={`Shokudo food photo ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
