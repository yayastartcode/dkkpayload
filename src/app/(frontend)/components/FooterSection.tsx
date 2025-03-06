'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function FooterSection() {
    const [logo, setLogo] = useState<{ image: { url: string; alt: string } } | null>(null);

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await fetch('/api/logos?where[isActive][equals]=true');
                const data = await response.json();
                if (data.docs && data.docs.length > 0) {
                    setLogo(data.docs[0]);
                }
            } catch (error) {
                console.error('Error fetching logo:', error);
            }
        };

        fetchLogo();
    }, []);

    return (
        <footer className="bg-zinc-900 text-yellow-100">
           
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="text-2xl font-bold flex items-center">
                            {logo ? (
                                <Image 
                                    src={logo.image.url} 
                                    alt={logo.image.alt} 
                                    width={200}
                                    height={64}
                                    className="h-16 w-auto"
                                    priority
                                />
                            ) : (
                                <span className="text-2xl font-bold text-yellow-400">Digdaya Auto Kreasi</span>
                            )}
                        </Link>
                        <p className="mb-6">
                            PT Digdaya Auto Kreasi, Berdiri tahun 2022, dan bergerak di bidang otomotif, dengan di dukung oleh sumber daya manusia yang berpengalaman di bidang otomotif.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/test" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://instagram.com/test" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://youtube.com/test" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-yellow-400 mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#about" className="hover:text-yellow-400 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-yellow-400 transition-colors">Our Services</Link>
                            </li>
                            <li>
                                <Link href="#gallery" className="hover:text-yellow-400 transition-colors">Gallery</Link>
                            </li>
                            <li>
                                <Link href="#blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-yellow-400 mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <i className="fas fa-phone text-yellow-400"></i>
                               <Link href="tel:02138746006"> <span>02138746006</span></Link>
                            </li>
                            <li className="flex items-center space-x-3">
                                <i className="fas fa-envelope text-yellow-400"></i>
                                <Link href="mailto:info@dalbokencanakreasi.com" className="hover:text-yellow-400 transition-colors">
                                    info@digdayaautokreasi.com
                                </Link>
                            </li>
                            <li className="flex space-x-3">
                                <i className="fas fa-map-marker-alt text-yellow-400 mt-1"></i>
                                <span>Jl . Raya Cileungsi - Jonggol KM 10 RT 007 Kampung Tengah, Desa Cipeucang Cileungsi Bogor Jawa Barat</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter - Commented out as per original HTML */}
                    {/* <div>
                        <h3 className="text-xl font-semibold text-yellow-400 mb-6">Newsletter</h3>
                        <p className="mb-4">Subscribe to our newsletter for updates and special offers.</p>
                        <form action="http://www.dalbokencanakreasi.com/newsletter/subscribe" method="POST" className="space-y-4">
                            <input type="hidden" name="_token" value="3Dq3XrXAIqva9lEP2fmOlFqRDHHTqkdx4jxriG3Q" autoComplete="off" />
                            <input type="email"
                                   name="email"
                                   required
                                   placeholder="Your email address"
                                   className="w-full px-4 py-2 rounded bg-black text-yellow-100 border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <button type="submit"
                                    className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div> */}
                </div>

                {/* Copyright */}
                <div className="border-t border-yellow-400/20 mt-12 pt-8 text-center">
                    <p>© 2025 Digdaya Auto Kreasi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;