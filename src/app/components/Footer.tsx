export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-warm-ink border-t border-[#352e26]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2.5 mb-5">
              <span className="font-mincho text-gold text-2xl tracking-[0.15em]">食堂</span>
              <span
                className="font-display text-cream text-2xl tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-display, Georgia, serif)' }}
              >
                SHOKUDO
              </span>
            </div>
            <p className="text-warm-muted text-xs leading-relaxed tracking-wide max-w-[220px]">
              Japanese izakaya in Hackettstown, NJ.
              <br />
              Handcrafted ramen &amp; chef-driven sushi.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mincho text-cream text-xs tracking-[0.35em] uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-2.5 text-warm-muted text-xs leading-relaxed">
              <p>1855 Route 57, Unit A</p>
              <p>Hackettstown, NJ 07840</p>
              <div className="pt-2 space-y-1.5">
                <a
                  href="tel:+19082698390"
                  className="block hover:text-cream transition-colors duration-200"
                >
                  (908) 269-8390
                </a>
                <a
                  href="tel:+19082698367"
                  className="block hover:text-cream transition-colors duration-200"
                >
                  (908) 269-8367
                </a>
              </div>
            </div>
          </div>

          {/* Hours + Social */}
          <div>
            <h4 className="font-mincho text-cream text-xs tracking-[0.35em] uppercase mb-5">
              Hours
            </h4>
            <div className="space-y-2 text-xs mb-8">
              <div className="flex justify-between">
                <span className="font-mincho text-cream/80">Mon – Sat</span>
                <span className="text-warm-muted">11:30am – 10:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="font-mincho text-cream/80">Sunday</span>
                <span className="text-warm-muted">12:00pm – 10:00pm</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/shokudonj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-warm-muted hover:text-gold transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/shokudonj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-warm-muted hover:text-gold transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#352e26] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-warm-muted text-[11px] tracking-[0.12em]">
            &copy; {year} Shokudo · Hackettstown, NJ
          </p>
          <p className="font-mincho text-[#4a4038] text-[11px] tracking-[0.2em]">
            本格日本料理
          </p>
        </div>
      </div>
    </footer>
  )
}
