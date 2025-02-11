
function ContactSection() {
    return (
        <section id="contact" className="bg-black py-20">
          
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Contact Us</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-zinc-900 p-8 rounded-lg">
                        <form action="https://www.dalbokencanakreasi.com/contact" method="POST" className="space-y-6">
                            <input type="hidden" name="_token" value="3Dq3XrXAIqva9lEP2fmOlFqRDHHTqkdx4jxriG3Q" autoComplete="off" />
                            <div>
                                <label className="block text-yellow-100 mb-2">Name</label>
                                <input type="text" name="name" required className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            </div>

                            <div>
                                <label className="block text-yellow-100 mb-2">Email</label>
                                <input type="email" name="email" required className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            </div>

                            <div>
                                <label className="block text-yellow-100 mb-2">Phone</label>
                                <input type="tel" name="phone" required className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            </div>

                            <div>
                                <label className="block text-yellow-100 mb-2">Subject</label>
                                <input type="text" name="subject" required className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            </div>

                            <div>
                                <label className="block text-yellow-100 mb-2">Message</label>
                                <textarea name="message" rows={4} required className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
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
                                <p className="text-yellow-100">Jl . Raya Cileungsi - Jonggol KM 10 RT 007 Kampung Tengah, Desa Cipeucang Cileungsi Bogor Jawa Barat</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-yellow-400 text-2xl w-8">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <h3 className="text-yellow-400 font-semibold mb-2">Phone Number</h3>
                                <p className="text-yellow-100">02138746006</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="text-yellow-400 text-2xl w-8">
                                <i className="fas fa-mobile"></i>
                            </div>
                            <div>
                                <h3 className="text-yellow-400 font-semibold mb-2">Whatsapp Number</h3>
                                <p className="text-yellow-100">02138746006</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-yellow-400 text-2xl w-8">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h3 className="text-yellow-400 font-semibold mb-2">Email Address</h3>
                                <p className="text-yellow-100">info@dalbokencanakreasi.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-yellow-400 text-2xl w-8">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div>
                                <h3 className="text-yellow-400 font-semibold mb-2">Working Hours</h3>
                                <p className="text-yellow-100">
                                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                                    Saturday: 9:00 AM - 4:00 PM<br />
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
                                    <a href="https://facebook.com/test" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                        <i className="fab fa-facebook-f fa-lg"></i>
                                    </a>
                                    <a href="https://instagram.com/test" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                        <i className="fab fa-instagram fa-lg"></i>
                                    </a>
                                    <a href="https://youtube.com/test" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                        <i className="fab fa-youtube fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;