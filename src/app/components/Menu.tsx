'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  name: string
  price: number
  description?: string
  popular?: boolean
}

interface MenuCategory {
  name: string
  note?: string
  items: MenuItem[]
}

interface MenuData {
  restaurant: {
    name: string
    orderUrl: string
  }
  categories: MenuCategory[]
}

const FEATURED = [
  'Ramen',
  "Chef's Special Roll",
  'Kitchen Appetizers',
  'Poke Bowl',
  'Sushi Roll',
  'Sushi Appetizers',
]

// Japanese translations for category labels
const JP_LABELS: Record<string, string> = {
  Ramen: '拉麺',
  "Chef's Special Roll": '特製巻',
  'Kitchen Appetizers': '前菜',
  'Poke Bowl': 'ポケ',
  'Sushi Roll': '巻寿司',
  'Sushi Appetizers': '寿司前菜',
}

export default function Menu({ menuData }: { menuData: MenuData }) {
  const featured = menuData.categories.filter((c) => FEATURED.includes(c.name))
  const [activeCategory, setActiveCategory] = useState(featured[0]?.name ?? '')
  const currentCategory = featured.find((c) => c.name === activeCategory)

  return (
    <section id="menu" className="py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-mincho text-amber text-xs tracking-[0.45em] uppercase block mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-cream text-4xl md:text-6xl mb-5">
            What We Serve
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#352e26]" />
            <span className="font-mincho text-amber text-xl">献立</span>
            <div className="h-px w-14 bg-[#352e26]" />
          </div>
        </div>

        {/* Category tabs */}
        <div className="relative border-b border-[#352e26] mb-10">
          <div className="flex gap-0 overflow-x-auto no-scrollbar">
            {featured.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`category-tab ${activeCategory === cat.name ? 'active' : ''}`}
              >
                <span className="block">{cat.name}</span>
                {JP_LABELS[cat.name] && (
                  <span className="block text-[10px] tracking-widest opacity-60 mt-0.5">
                    {JP_LABELS[cat.name]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {currentCategory.note && (
                <p className="text-warm-muted text-xs font-mincho mb-6 tracking-wide italic">
                  * {currentCategory.note}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentCategory.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    className="menu-card"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.035 }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-mincho text-cream text-sm font-semibold leading-snug">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <span className="popular-badge">Popular</span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-warm-muted text-xs leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="font-mincho text-gold text-base font-semibold flex-shrink-0 pt-0.5">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Order CTA */}
        <div className="text-center mt-14 pt-10 border-t border-[#352e26]">
          <p className="font-mincho text-warm-muted text-xs tracking-[0.12em] mb-6">
            Full menu available online — order pickup or delivery
          </p>
          <a
            href={menuData.restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-10 py-3.5 text-sm tracking-[0.15em]"
          >
            Order Online
          </a>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
