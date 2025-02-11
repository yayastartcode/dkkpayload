'use client';

import { useEffect, useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: {
    url: string;
  };
  isActive: boolean;
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('/api/testimonials?where[isActive][equals]=true')
      .then(response => response.json())
      .then(data => {
        setTestimonials(data.docs || []);
      })
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">Testimonials</h2>
        <p className="text-center mb-12 text-yellow-100 max-w-3xl mx-auto">
          What our clients say about our services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-black p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar.url}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <span className="text-yellow-400 text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-yellow-400 font-semibold">{testimonial.name}</h3>
                  <p className="text-yellow-100/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-yellow-100">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;