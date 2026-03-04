export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-mincho text-xl font-bold mb-4">食堂 SHOKUDO</h3>
            <p className="text-ash">Authentic Japanese cuisine in Hackettstown, NJ</p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-mincho text-lg font-semibold mb-2">Contact</h4>
            <p className="text-ash mb-1">1855 Route 57, Hackettstown, NJ 07840</p>
            <p className="text-ash mb-1">(908) 269-8390</p>
            <p className="text-ash">(908) 269-8367</p>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-mincho text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/shokudo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-akane transition-colors"
              >
                📷
              </a>
              <a 
                href="https://facebook.com/shokudo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-akane transition-colors"
              >
                📘
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#6B6B6B] pt-8 text-center text-sm text-ash">
          <p>&copy; {new Date().getFullYear()} Shokudo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
