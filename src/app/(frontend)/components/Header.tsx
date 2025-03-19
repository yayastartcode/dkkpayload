'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            {logo ? (
              <Image
                src={logo.image.url}
                alt={logo.image.alt}
                width={200}
                height={80}
                className="h-[90px] w-auto"
                priority
              />
            ) : (
              <span className="text-2xl font-bold text-yellow-400">Digdaya Auto Kreasi</span>
            )}
          </Link>

          <button
            className="md:hidden text-yellow-400 hover:text-yellow-300"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav
            className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/api/media/file/BROSUR%20FORTIS%201124.pdf"
                  rel="noopener noreferrer" target="_blank"
                  className="block py-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                >
                  Brosur
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;