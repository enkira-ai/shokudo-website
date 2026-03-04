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
    <section id="location" className="section">
      <h2 className="section-title">📍 Location & Hours</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Address and Hours */}
        <div className="space-y-6">
          <div>
            <h3 className="font-mincho text-xl font-semibold mb-4">Address</h3>
            <p className="text-lg mb-4">{restaurantInfo.address}</p>
            <p className="text-lg">{restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}</p>
            <a 
              href={restaurantInfo.googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-block mt-4"
            >
              Get Directions
            </a>
          </div>
          
          <div>
            <h3 className="font-mincho text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between py-2 border-b border-[#E0D5C5]">
                  <span className="font-medium">{day}</span>
                  <span className="text-ash">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${restaurantInfo.address}+${restaurantInfo.city}+${restaurantInfo.state}+${restaurantInfo.zip}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shokudo Location Map"
          />
        </div>
      </div>
    </section>
  )
}
