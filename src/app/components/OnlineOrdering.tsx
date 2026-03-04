'use client'

const MEALKEYWAY_URL = 'https://www.mealkeyway.com/restaurant/shokudo'
const DOORDASH_URL = 'https://www.doordash.com/store/shokudo-ramen-and-sushi-hackettstown-27580685/'
const YELP_URL = 'https://www.yelp.com/biz/shokudo-hackettstown'
const GRUBHUB_URL = 'https://www.grubhub.com/restaurant/shokudo-ramen--sushi-1855-nj-57-hackettstown/9053175'

export default function OnlineOrdering() {
  return (
    <section id="order" className="py-20 bg-[#13100d]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <span className="font-mincho text-amber text-xs tracking-[0.45em] uppercase block mb-4">
          Order Online
        </span>
        <h2 className="font-display text-cream text-4xl md:text-5xl mb-4">
          Skip the Wait
        </h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-14 bg-[#352e26]" />
          <span className="font-mincho text-amber text-lg">注文</span>
          <div className="h-px w-14 bg-[#352e26]" />
        </div>
        <p className="text-cream/55 font-mincho text-sm mb-12">
          Order pickup or delivery through your preferred platform
        </p>

        {/* Primary CTA */}
        <a
          href={MEALKEYWAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-amber px-10 py-4 text-base tracking-[0.12em] inline-block mb-10"
        >
          Order on MealKeyway
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-[#352e26]" />
          <span className="font-mincho text-cream/30 text-xs tracking-widest">OR ORDER VIA</span>
          <div className="flex-1 h-px bg-[#352e26]" />
        </div>

        {/* Other platforms */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={DOORDASH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#352e26] hover:border-amber/40 bg-[#1a1612] hover:bg-[#201c17] text-cream/70 hover:text-cream px-6 py-3 rounded text-sm tracking-wide transition-all duration-200"
          >
            DoorDash
          </a>
          <a
            href={GRUBHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#352e26] hover:border-amber/40 bg-[#1a1612] hover:bg-[#201c17] text-cream/70 hover:text-cream px-6 py-3 rounded text-sm tracking-wide transition-all duration-200"
          >
            Grubhub
          </a>
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#352e26] hover:border-amber/40 bg-[#1a1612] hover:bg-[#201c17] text-cream/70 hover:text-cream px-6 py-3 rounded text-sm tracking-wide transition-all duration-200"
          >
            Yelp
          </a>
        </div>

        {/* Phone order note */}
        <p className="mt-10 text-cream/35 font-mincho text-xs tracking-wider">
          Prefer to call?{' '}
          <a href="tel:+19082698390" className="text-amber/60 hover:text-amber transition-colors">
            (908) 269-8390
          </a>
        </p>
      </div>
    </section>
  )
}
