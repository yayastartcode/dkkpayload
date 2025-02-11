import React from 'react';
import Slider from './components/Slider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

export default async function HomePage() {
  // TODO: Replace with actual data fetching



  return (
    <div className="min-h-screen">
      <Slider />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <GallerySection />
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
