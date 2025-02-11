'use client';

import React, { useEffect, useState } from 'react';
// First install date-fns: npm install date-fns
import { format } from 'date-fns';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  createdAt: string;
}

function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?limit=3&sort=-createdAt&status=published');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();
        setBlogs(data.docs);
      } catch (err) {
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="bg-zinc-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Blog Post Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black rounded-lg overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-700" />
                <div className="p-6">
                  <div className="h-4 bg-gray-700 rounded w-1/4 mb-3" />
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-700 rounded w-full mb-4" />
                  <div className="h-4 bg-gray-700 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="bg-zinc-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Blog Post Terbaru</h2>
          <p className="text-yellow-100">{error}</p>
        </div>
      </section>
    );
  }
  return (
    <section id="blog" className="bg-zinc-900 py-20">
 
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Blog Post Terbaru</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src={blog.featuredImage.url} 
                alt={blog.featuredImage.alt} 
                className="w-full h-48 object-cover" 
              />

              <div className="p-6">
                <div className="flex items-center text-yellow-100 text-sm mb-3">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>{format(new Date(blog.createdAt), 'dd MMMM yyyy')}</span>
                </div>

                <h3 className="text-xl font-semibold text-yellow-400 mb-3">{blog.title}</h3>
                <p className="text-yellow-100 mb-4">
                  {blog.excerpt ? `${blog.excerpt.slice(0, 150)}...` : ''}
                </p>

                <a href={`/blog/${blog.slug}`} className="text-yellow-400 hover:text-yellow-300 transition-colors inline-flex items-center">
                  Selengkapnya
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

      
      </div>
    </section>
  );
}

export default BlogSection;