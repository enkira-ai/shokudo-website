'use client'

import Link from 'next/link'

export default function OnlineOrdering() {
  return (
    <section className="bg-[#C0392B] text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-mincho text-3xl md:text-4xl font-bold mb-4">
            🍜 Ready to order?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Skip the wait. Order pickup or delivery online.
          </p>
          <Link 
            href={process.env.NEXT_PUBLIC_ORDER_URL || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary text-lg"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  )
}
