'use client'

import { motion } from 'framer-motion'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Tonkotsu Ramen',
    description: 'Rich pork broth with fresh noodles, chashu pork, egg, and nori',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990888?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb'
  },
  {
    id: 2,
    name: 'Steamed Buns',
    description: 'Soft steamed buns filled with marinated pork and vegetables',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb'
  },
  {
    id: 3,
    name: 'Gyoza',
    description: 'Crispy pan-fried dumplings filled with ground pork and vegetables',
    price: '$9',
    image: 'https://images.unsplash.com/photo-1576107616104-496e48092fac?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb'
  },
  {
    id: 4,
    name: 'Yakisoba',
    description: 'Stir-fried noodles with pork, cabbage, and our special sauce',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1579489583091-3a0b6a1bd4c0?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb'
  }
]

export default function MenuHighlights() {
  return (
    <section id="menu" className="section">
      <h2 className="section-title">── OUR FAVORITES ──</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gray-200">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-mincho text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-ash mb-2 text-sm">{item.description}</p>
              <p className="font-mincho text-lg font-semibold text-akane">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <a 
          href={process.env.NEXT_PUBLIC_ORDER_URL || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View Full Menu
        </a>
      </div>
    </section>
  )
}
