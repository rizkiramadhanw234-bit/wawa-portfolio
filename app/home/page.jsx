import React from "react";
import ProfileImg from "../assets/profile.jpg";
import Image from "next/image";
import { dataTools } from "../data/dataTools";
import { dataCreative } from "../data/dataTools";
import { dataClients } from "../data/dataClients";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gray-800 flex items-center justify-center relative overflow-hidden py-8 md:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-20">
            {/* Text Content */}
            <div className="text-center lg:text-left max-w-2xl order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-4 sm:mb-6">
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-gray-100 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-tight">
                Hello, I&apos;m
                <span className="block text-white mt-1 sm:mt-2">
                  Wawa Wardil Hasan
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 mb-6 sm:mb-8 leading-relaxed">
                Senior Business Development & Digital Strategy Specialist
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  View Projects
                </Link>
                <a
                  href="/CV WARDIL HASAN-1.pdf"
                  target="_blank"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-800/50 backdrop-blur-sm text-gray-200 font-medium rounded-lg border border-gray-700 hover:bg-gray-700/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-full bg-blue-700 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative">
                <Image
                  src={ProfileImg}
                  alt="Wawa Wardil Hasan - Digital Strategy Specialist"
                  width={280}
                  height={280}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                />
                <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:-right-2 md:bottom-4 md:-right-2 lg:bottom-6 lg:-right-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-700 shadow-lg">
                  <span className="text-gray-200 text-xs sm:text-sm font-medium">
                    10+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 sm:w-10 lg:w-12 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
              <span className="text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                About Me
              </span>
              <div className="w-8 sm:w-10 lg:w-12 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 sm:mb-6">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                Overview
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4">
              Driving business growth through innovative digital strategies and
              comprehensive project execution
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Left Column - Experience */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl hover:border-gray-600 transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-blue-900/30 rounded-lg">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 sm:mb-2">
                      Experience & Background
                    </h3>
                    <div className="w-12 sm:w-16 h-1 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <p
                  className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6"
                  style={{ textAlign: "justify" }}
                >
                  Memiliki lebih dari 10 tahun pengalaman dalam Business
                  Development, Market Intelligence, dan pengelolaan operasional
                  pada industri asuransi dan layanan berbasis digital.
                  Berpengalaman dalam mengidentifikasi peluang pertumbuhan
                  bisnis, merumuskan strategi berbasis data, serta mengelola
                  hubungan jangka panjang dengan klien dan mitra strategis untuk
                  mendukung keberlanjutan pendapatan perusahaan.
                </p>

                <p
                  className="text-gray-300 leading-relaxed text-sm sm:text-base"
                  style={{ textAlign: "justify" }}
                >
                  Memiliki rekam jejak dalam penyusunan proposal strategis,
                  negosiasi kontrak bernilai tinggi, serta pengelolaan
                  portofolio akun klien melalui pendekatan sistematis dalam
                  skema Key Account Management, dengan penerapan standar kontrol
                  kualitas dan kepatuhan (compliance) yang konsisten. Peran
                  dijalankan secara strategis dengan keterlibatan langsung pada
                  tahap perencanaan hingga koordinasi eksekusi. Kompetensi
                  profesional diperkuat oleh sertifikasi CDMS dan CDMM sebagai
                  fondasi keahlian di bidang pemasaran digital dan pengembangan
                  bisnis yang berorientasi hasil.
                </p>
              </div>

              {/* Approach */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:h-117 border border-gray-700 shadow-xl">
                <h4 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-blue-400">🛠️</span> Tools & Systems
                </h4>
                <p
                  className="text-gray-300 text-sm sm:text-base leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  Terampil menggunakan Google Analytics, Microsoft Excel
                  (analisis dan pemodelan data), serta Meta Business Suite,
                  didukung berbagai dashboard operasional untuk pemantauan
                  kinerja bisnis dan kampanye. Menguasai Figma, Canva, Adobe
                  Premiere Pro, Filmora, dan CapCut untuk kebutuhan desain dan
                  produksi konten.
                </p>
                <p
                  className="text-gray-300 text-sm sm:text-base leading-relaxed mt-5"
                  style={{ textAlign: "justify" }}
                >
                  Memiliki pemahaman dalam implementasi ERP dan HRIS, workflow
                  automation, pemanfaatan solusi bisnis berbasis AI, serta
                  pengembangan e-commerce berbasis Shopify, yang mendukung
                  integrasi proses bisnis dan teknologi secara scalable dan
                  efisien.
                </p>
              </div>
            </div>

            {/* Right Column - Expertise */}
            <div className="space-y-6 sm:space-y-8">
              {/* Core Expertise Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-purple-900/30 rounded-lg">
                    <span className="text-xl sm:text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1 sm:mb-2">
                      Core Expertise
                    </h3>
                    <div className="w-12 sm:w-16 h-1 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p
                      className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      Berpengalaman dalam Business Development dan Growth
                      Management dengan fokus pada market intelligence, analisis
                      kompetitif, serta perumusan strategi go-to-market berbasis
                      data. Terbiasa melakukan validasi peluang pasar,
                      pengembangan pipeline bisnis, dan pengelolaan stakeholder
                      engagement. Memiliki pengalaman dalam penyusunan proposal
                      strategis dan high-value negotiation hingga tahap
                      implementasi dan eksekusi solusi.
                    </p>
                    <p
                      className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed mt-5"
                      style={{ textAlign: "justify" }}
                    >
                      Memiliki kapabilitas kuat dalam insurance claim management
                      dan operasional, mencakup investigasi kasus, penanganan
                      dispute, serta analisis tren dan risiko untuk mendukung
                      pengendalian biaya, peningkatan efisiensi proses, dan
                      pengambilan keputusan berbasis data. Kemampuan analitis
                      dan business storytelling digunakan untuk menerjemahkan
                      insight kompleks menjadi rekomendasi strategis yang
                      aplikatif dan presisi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-xl">
                <h4 className="text-gray-200 text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">⚡</span>
                  Digital, Growth & Creative
                </h4>
                <p
                  className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6  leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  Berpengalaman dalam pengelolaan inisiatif pertumbuhan digital
                  melalui SEO, Google Ads, dan Meta Ads, didukung segmentasi
                  audiens, optimasi funnel, dan analisis performa kampanye.
                  Terlibat dalam pengembangan brand dan komunikasi bisnis,
                  termasuk penyusunan corporate profile, perumusan value
                  proposition, dan penguatan positioning digital.
                </p>
                <p
                  className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed mt-5"
                  style={{ textAlign: "justify" }}
                >
                  Berpengalaman dalam pengembangan dan integrasi solusi digital
                  berbasis e-commerce, ERP, dan aplikasi mobile, dengan
                  pendekatan user-centric dan business-driven. Memiliki
                  kapabilitas dalam content ideation, scriptwriting, creative
                  direction, serta video post-production untuk mendukung brand
                  awareness dan demand generation.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Clients Served" },
              { value: "360°", label: "Strategy Approach" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/30 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-900 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h6 className="text-white text-center font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-10">
                Tools & Systems
              </h6>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
                {dataTools.map((tool, index) => (
                  <div
                    key={index}
                    className="text-white flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 hover:bg-gray-700/30 rounded-lg transition-colors duration-300"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl">
                      {tool.icon}
                    </div>
                    <div className="text-xs sm:text-sm text-center">
                      {tool.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h6 className="text-white text-center font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 lg:mb-10">
                Creative Tools
              </h6>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
                {dataCreative.map((tool, index) => (
                  <div
                    key={index}
                    className="text-white flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 hover:bg-gray-700/30 rounded-lg transition-colors duration-300"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl">
                      {tool.icon}
                    </div>
                    <div className="text-xs sm:text-sm text-center">
                      {tool.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-800 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-white text-center font-bold text-base sm:text-3xl lg:text-4xl mb-8 sm:mb-10">
            Key Account Management (Corporate & Insurance Clients)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {dataClients.map((data, id) => (
              <div
                key={id}
                className="p-3 sm:p-4 flex bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg sm:rounded-xl items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 min-h-15 sm:min-h-20"
              >
                <div className="text-xs sm:text-sm text-center leading-tight">
                  {data.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
