'use client'

const restaurantInfo = {
  address: '1855 Route 57',
  city: 'Hackettstown',
  state: 'NJ',
  zip: '07840',
  googleMapsUrl: 'https://maps.google.com/?q=1855+Route+57+Hackettstown+NJ+07840',
  hours: {
    'Mon–Sat': '11:30am – 10:00pm',
    'Sunday': '12:00pm – 10:00pm'
  }
}

export default function LocationHours() {
  return (
    <section id="location" className="py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-mincho text-amber text-xs tracking-[0.45em] uppercase block mb-4">Find Us</span>
          <h2 className="font-display text-cream text-4xl md:text-6xl mb-5">Location &amp; Hours</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#352e26]"></div>
            <span className="font-mincho text-amber text-xl">場所</span>
            <div className="h-px w-14 bg-[#352e26]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-mincho text-cream text-xl font-semibold mb-4">Address</h3>
              <p className="text-warm-muted text-lg mb-1">{restaurantInfo.address}</p>
              <p className="text-warm-muted text-lg mb-4">{restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}</p>
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block mt-2"
              >
                Get Directions
              </a>
            </div>

            <div>
              <h3 className="font-mincho text-cream text-xl font-semibold mb-4">Hours</h3>
              <div className="space-y-2">
                {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between py-2 border-b border-[#352e26]">
                    <span className="font-mincho text-cream font-medium">{day}</span>
                    <span className="text-warm-muted">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-[#2a2520] flex flex-col items-center justify-center gap-6 border border-[#352e26]">
            <div className="text-center px-6">
              <p className="font-mincho text-amber text-lg mb-2">食堂 SHOKUDO</p>
              <p className="text-cream/70 text-sm mb-1">1855 Route 57, Unit A</p>
              <p className="text-cream/70 text-sm mb-6">Hackettstown, NJ 07840</p>
              <a
                href="https://maps.google.com/?q=1855+Route+57+Hackettstown+NJ+07840"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber/10 border border-amber/40 text-amber px-6 py-3 rounded hover:bg-amber/20 transition-colors text-sm tracking-wide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
