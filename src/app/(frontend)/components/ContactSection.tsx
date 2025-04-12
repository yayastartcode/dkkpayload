'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Format the WhatsApp message
    const whatsappMessage = `Halo saya ${name}\n\n${message}`

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/6285228319696?text=${encodeURIComponent(whatsappMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-yellow-100 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-yellow-100 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-yellow-100 mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-2xl w-8">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Our Location</h3>
                <p className="text-yellow-100">
                  Jl . Raya Cileungsi - Jonggol KM 10 RT 007 Kampung Tengah, Desa Cipeucang
                  Cileungsi Bogor Jawa Barat
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-2xl w-8">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Phone Number</h3>
                <Link
                  href="tel:02138746006"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  02138746006
                </Link>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-2xl w-8">
                <i className="fas fa-mobile"></i>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Whatsapp Number</h3>
                <Link
                  href="https://wa.me/6285228319696"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  085228319696
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-2xl w-8">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Email Address</h3>
                <Link
                  href="mailto:info@dalbokencanakreasi.com"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  dak.digdaya@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-2xl w-8">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Working Hours</h3>
                <p className="text-yellow-100">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-yellow-400 text-2xl w-8">
                <i className="fas fa-share-alt"></i>
              </div>
              <div>
                <h3 className="text-yellow-400 font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <i className="fab fa-facebook-f fa-lg"></i>
                  </a>
                  <a
                    href="https://instagram.com/test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a
                    href="https://youtube.com/test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <i className="fab fa-youtube fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
