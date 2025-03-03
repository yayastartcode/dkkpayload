'use client';

import React from 'react';
import Link from 'next/link';



function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">Layanan Kami</h2>
        <p className="text-center mb-12 text-yellow-100 max-w-3xl mx-auto">Solusi otomotif komprehensif yang disesuaikan dengan kebutuhan Anda. Dari badan kendaraan kustom hingga perbaikan ahli, kami siap melayani Anda.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Karoseri Service */}
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" alt="Karoseri" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Karoseri</h3>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs">Kustom</span>
                  <span className="px-2 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs">Profesional</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-yellow-100 mb-4">Spesialis dalam pembuatan bodi kustom untuk truk, bus, dan kendaraan berat. Tim ahli kami menggabungkan fungsionalitas dengan desain untuk memberikan solusi bodi kendaraan berkualitas tinggi.</p>
              <ul className="space-y-3">
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Pembuatan bodi truk kustom dengan desain modern</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Manufaktur bodi bus dengan standar kualitas tinggi</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Modifikasi kendaraan berat sesuai kebutuhan</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Material berkualitas dengan garansi terbaik</span>
                </li>
              </ul>
              <Link 
                href="https://wa.me/6285228319696?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Karoseri%20Anda.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Pelajari Lebih Lanjut</span>
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>

          {/* Engine Maintenance */}
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop" alt="Perawatan Mesin" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Perawatan Mesin</h3>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs">Berkala</span>
                  <span className="px-2 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs">Ahli</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-yellow-100 mb-4">Layanan perawatan dan perbaikan mesin komprehensif untuk menjaga kendaraan Anda beroperasi dengan performa optimal. Dari perawatan rutin hingga perbaikan kompleks.</p>
              <ul className="space-y-3">
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Diagnosa mesin dengan teknologi modern</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Penyetelan performa mesin optimal</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Penggantian suku cadang berkualitas</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Perawatan berkala terjadwal</span>
                </li>
              </ul>
              <Link 
                href="https://wa.me/6285228319696?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Perawatan%20Mesin%20Anda.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Pelajari Lebih Lanjut</span>
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>

          {/* Body Repair */}
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="relative h-48 overflow-hidden">
              <img src="/api/media/file/bodirepair.webp" alt="Perbaikan Bodi" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Body Repair</h3>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs">Presisi</span>
                  <span className="px-2 py-1 bg-yellow-400/20 rounded-full text-yellow-400 text-xs">Garansi</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-yellow-100 mb-4">Layanan perbaikan bodi mobil profesional untuk mengembalikan tampilan dan integritas struktural kendaraan Anda. Pencocokan warna ahli dan penghilangan penyok.</p>
              <ul className="space-y-3">
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Perbaikan kerusakan akibat tabrakan</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Layanan pengecatan profesional</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Perbaikan penyok dan gores</span>
                </li>
                <li className="flex items-start text-yellow-100">
                  <i className="fas fa-check-circle text-yellow-400 mr-3 mt-1"></i>
                  <span>Pelurusan rangka presisi</span>
                </li>
              </ul>
              <Link 
                href="https://wa.me/6285228319696?text=Halo,%20saya%20tertarik%20dengan%20layanan%20Body%20Repair%20Anda.%20Bisakah%20Anda%20memberikan%20informasi%20lebih%20lanjut?"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <span>Pelajari Lebih Lanjut</span>
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;