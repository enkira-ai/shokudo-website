'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would connect to a backend service
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section">
      <h2 className="section-title">📞 Contact Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="font-mincho text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg mb-4">We'd love to hear from you!</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-medium">Phone:</span>
                <a 
                  href="tel:+19081234567" 
                  className="text-akane hover:text-[#a02720] transition-colors"
                >
                  (908) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="font-medium">Email:</span>
                <a 
                  href="mailto:info@shokudo07840.com" 
                  className="text-akane hover:text-[#a02720] transition-colors"
                >
                  info@shokudo07840.com
                </a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-mincho text-lg font-semibold mb-4">Follow Us</h4>
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
        </div>
        
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#E0D5C5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#E0D5C5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-[#E0D5C5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
