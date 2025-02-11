'use client';

import React from 'react';
import Image from 'next/image';

function AboutSection() {
    return (
      <section className="bg-zinc-900 py-20">
      
        <div className="container mx-auto px-6">

          {/* Main About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img src="/api/media/file/612efd6a-bdf6-4419-acf5-f296b1467bd3.JPG" alt="Auto Repair Shop" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm font-semibold">Years Experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">Tentang Kami</h2>
              <p className="text-yellow-100 mb-6">PT Dalbo Kencana Kreasi, Berdiri tahun 2022, dan bergerak di bidang otomotif, dengan di dukung oleh sumber daya manusia yang berpengalaman di bidang otomotif. kami menjunjung tinggi kepuasan pelanggan melalui kualitas produk yang di hasilkan, harga yang kompetitif, pengerjaan sesuai estimasi waktu, kami berusaha untuk meningkatkan pelayanan dengan selalu berinovasi untuk terus menjadi lebih baik.</p>
              <div className="space-y-4 text-yellow-100">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-yellow-400 mt-1 mr-3"></i>
                  <p>Peralatan diagnostik mutakhir dan fasilitas perbaikan modern</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-yellow-400 mt-1 mr-3"></i>
                  <p>Tim mekanik bersertifikat dengan pengalaman luas</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-yellow-400 mt-1 mr-3"></i>
                  <p>Komitmen menggunakan suku cadang dan material berkualitas</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-zinc-800 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300 transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-eye text-2xl text-yellow-400 mr-4"></i>
                <h3 className="text-2xl font-bold text-yellow-400">Visi Kami</h3>
              </div>
              <p className="text-yellow-100">Menjadi perusahaan yang terus tumbuh dan berkembang dengan memenuhi kepentingan semua pihak yang terkait, mengembangkan potensi sumber daya manusia dalam bidang otomotif dan menjadikan perusahaan yang berkembang. kuatuntuk membantu ekonomi bangsa dan negara.</p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors duration-300 transform hover:scale-105 duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-bullseye text-2xl text-yellow-400 mr-4"></i>
                <h3 className="text-2xl font-bold text-yellow-400">Misi Kami</h3>
              </div>
              <p className="text-yellow-100">Menjadi perusahaan yang terus belajar (Continuous learning). Mengembangkan potensi sumber daya manusia, menjalin kerja sama yang baik dengan pihak terkait, menjaga. kepercayaan pelanggan, bekerja sama dan membatu. pihak terkait baik pemerintah atau swasta terutama di bidang otomotif.</p>
            </div>
          </div>
  
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-zinc-800 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110">
                <i className="fas fa-wrench text-2xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Layanan Ahli</h3>
              <p className="text-yellow-100">Teknisi bersertifikat kami membawa pengalaman dan keahlian bertahun-tahun untuk setiap perbaikan.</p>
            </div>
            <div className="text-center p-6 bg-zinc-800 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110">
                <i className="fas fa-clock text-2xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Pengerjaan Cepat</h3>
              <p className="text-yellow-100">Kami menghargai waktu Anda dan berusaha memberikan layanan yang efisien tanpa mengorbankan kualitas.</p>
            </div>
            <div className="text-center p-6 bg-zinc-800 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 group-hover:scale-110">
                <i className="fas fa-shield-alt text-2xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Garansi Kualitas</h3>
              <p className="text-yellow-100">Setiap perbaikan dilengkapi dengan garansi kepuasan kami untuk ketenangan pikiran Anda.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default AboutSection;