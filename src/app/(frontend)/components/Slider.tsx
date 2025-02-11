'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: {
    url: string;
  };
  buttonText?: string;
  buttonLink?: string;
  order: number;
  isActive: boolean;
}

export default function Slider() {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('/api/sliders?where[isActive][equals]=true&sort=order');
        const data = await response.json();
        if (data.docs) {
          setSlides(data.docs);
        }
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    fetchSlides();
  }, []);
  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="hero-swiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full h-full">
              <Image
                src={slide.image.url}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="container mx-auto px-6">
                  <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-yellow-400/80 mb-8">
                    {slide.subtitle}
                  </p>
                  {slide.buttonText && slide.buttonLink && (
                    <Link
                      href={slide.buttonLink}
                      className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
                    >
                      {slide.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}