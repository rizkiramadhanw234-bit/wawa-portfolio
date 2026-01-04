import React from "react";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl lg:max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mt-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
              Experience
            </span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg px-4">
            Lebih dari satu dekade pengalaman dalam pengembangan bisnis,
            analisis pasar, dan eksekusi strategi di industri asuransi dan
            digital.
          </p>
        </div>

        {/* Summary */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl">
          <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            Saya memiliki lebih dari 10 tahun pengalaman dalam pengembangan
            bisnis, analisis pasar dan supervisi di industri asuransi dan
            digital agency. Terbiasa mengidentifikasi peluang, menyusun strategi
            pemasaran yang relevan, serta membangun hubungan yang kuat dengan
            klien dan mitra.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            Berpengalaman menyiapkan proposal, melakukan negosiasi, dan
            mendukung akuisisi klien dengan pendekatan yang terukur. Terampil
            melakukan presentasi dan bekerja lintas tim untuk memastikan solusi
            yang ditawarkan tepat dan dapat dieksekusi dengan baik. Saya juga
            memiliki sertifikasi CDMS dan CDMM sebagai penguatan kompetensi di
            bidang pemasaran digital dan pengembangan bisnis.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {/** PT Deltaloka */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Senior Business Development Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT Deltaloka Konsultasi Indonesia — Jakarta | Jul 2023 – Present
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="leading-relaxed">
                Identifikasi dan validasi peluang bisnis berbasis data dan
                market intelligence.
              </li>
              <li className="leading-relaxed">
                Merancang strategi go-to-market, value proposition, pricing, dan
                roadmap akuisisi.
              </li>
              <li className="leading-relaxed">
                Mengelola proses end-to-end dari engagement hingga kontrak.
              </li>
              <li className="leading-relaxed">
                Membangun partnership strategis dan relasi C-level.
              </li>
              <li className="leading-relaxed">
                Koordinasi dengan tim engineering, UI/UX, dan digital marketing.
              </li>
              <li className="leading-relaxed">
                Evaluasi performa proyek, ROI analysis, dan process improvement.
              </li>
              <li className="leading-relaxed">
                Perwakilan perusahaan dalam pitching dan thought leadership.
              </li>
            </ul>
          </div>

          {/** IBS Group */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Technical Service Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT Cipta Integra Duta (IBS Group) — Jakarta | Jun 2018 – Jul 2023
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="leading-relaxed">
                Mengelola operasional klaim asuransi korporasi dengan kontrol
                kualitas ketat.
              </li>
              <li className="leading-relaxed">
                Menangani dispute case dan investigasi klaim kompleks.
              </li>
              <li className="leading-relaxed">
                Terlibat dalam desain dan pengembangan ERP serta platform
                e-commerce.
              </li>
              <li className="leading-relaxed">
                Menyusun laporan analitik tren klaim dan risk exposure.
              </li>
              <li className="leading-relaxed">
                Menginisiasi program edukasi kesehatan berbasis data.
              </li>
            </ul>
          </div>

          {/** Mega Insurance */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Claims Officer Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Mega Insurance (CT Corp) — Bali & Jakarta | Jun 2015 – Nov 2016
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="leading-relaxed">
                Mengelola lifecycle klaim managed care wilayah Bali.
              </li>
              <li className="leading-relaxed">
                Risk assessment pada klaim berpotensi tinggi.
              </li>
              <li className="leading-relaxed">
                Penyusunan laporan analitik biaya dan utilisasi layanan.
              </li>
            </ul>
          </div>

          {/** Healthcare Background */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Healthcare & Claims Background
            </h3>
            <ul className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li className="leading-relaxed">
                RS Suci Paramita — Insurance & Administration Officer
                (2016–2017)
              </li>
              <li className="leading-relaxed">
                Across Asia Assist — Claims Executive (2014–2015)
              </li>
              <li className="leading-relaxed">
                RS Halmahera Siaga — Emergency Nurse (2013–2014)
              </li>
            </ul>
            <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm">
              Fondasi kuat dalam analisis medis, manajemen risiko, dan
              operasional layanan kesehatan.
            </p>
          </div>
        </div>

        {/* Additional Responsive Spacing */}
        <div className="mt-12 sm:mt-16"></div>
      </div>
    </section>
  );
}
