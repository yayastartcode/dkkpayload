"use client"
import GLightbox from 'glightbox';
import { useEffect, useState } from 'react';
import 'glightbox/dist/css/glightbox.min.css';

interface GalleryItem {
    id: string;
    title: string;
    description?: string;
    category?: {
        id: string;
        name: string;
    };
    image: {
        url: string;
    };
    alt: string;
    isActive: boolean;
}

function GallerySection() {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

    useEffect(() => {
        // Fetch gallery data
        fetch('/api/galleries')
            .then(response => response.json())
            .then(data => {
                setGalleryItems((data.docs || []).filter((item: { isActive: any; }) => item.isActive));
            })
            .catch(error => console.error('Error fetching gallery:', error));
    }, []);

    useEffect(() => {
        // Initialize GLightbox after gallery items are loaded
        if (typeof window !== 'undefined' && galleryItems.length > 0) {
            const lightbox = GLightbox({
                selector: '.glightbox',
                touchNavigation: true,
                loop: true,
                autoplayVideos: true
            });
    
            return () => {
                lightbox.destroy();
            };
        }
    }, [galleryItems]); 

    return (
        <section id="gallery" className="bg-black py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">Our Gallery</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.image.url}
                            className="glightbox relative group"
                            data-gallery="gallery1"
                            data-glightbox={`title: ${item.title}; description: ${item.description || ''}`}
                        >
                            <img
                                src={item.image.url}
                                alt={item.alt}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 rounded-lg flex items-center justify-center">
                                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-yellow-400 font-semibold mb-2">{item.title}</h3>
                                    {item.category && (
                                        <p className="text-yellow-100 text-sm">{item.category.name}</p>
                                    )}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GallerySection;