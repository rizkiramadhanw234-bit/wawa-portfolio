import React from "react";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl lg:max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mt-4" data-aos="fade-up">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
              Experience
            </span>
          </h1>
        </div>

        {/* Summary */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl">
          <p
            className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
            style={{ textAlign: "justify" }}
            data-aos="fade-up">
            Memiliki pengalaman di bidang healthcare, operasional asuransi, layanan broker asuransi, dan corporate healthcare services. <br />
            Memiliki pengalaman lebih dari 10 tahun pada industri kesehatan dan asuransi, dengan fokus pada pengelolaan layanan klien korporasi, koordinasi operasional, manajemen klaim, serta layanan broker asuransi.
            <br />
            Berpengalaman dalam koordinasi kebutuhan corporate healthcare, evaluasi benefit asuransi, pengembangan relasi dengan perusahaan asuransi, serta dukungan operasional pada layanan kesehatan dan insurance services.
            <br />
            Selain itu, memiliki pengalaman dalam mendukung kebutuhan business support dan workflow operasional terkait implementasi sistem berbasis web untuk layanan broker asuransi.
            <br />
            Didukung dengan sertifikasi digital marketing dan pengalaman dalam pengembangan promosi layanan kesehatan, analisis digital marketing, serta pengelolaan komunikasi pemasaran dan relasi korporasi.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 sm:space-y-8">

          {/** Ratulangi Medical Center */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Marketing Manager
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Ratulangi Medical Center | Aug 2024 – Present
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Mengelola pemasaran layanan kesehatan dan implementasi program promosi.</li>
              <li>Menyusun strategi digital marketing, media sosial, serta analisis performa campaign dan tren pasar layanan kesehatan.</li>
              <li>Mengembangkan kerja sama corporate healthcare, institusi, dan kemitraan asuransi.</li>
              <li>Berkoordinasi dengan tim operasional dan pelayanan untuk mendukung kebutuhan klien dan peningkatan service excellence.</li>
              <li>Melakukan monitoring KPI marketing, evaluasi program pemasaran, serta penyusunan laporan dan analisis pasar.</li>
              <li>Mengelola aktivitas branding, event, promosi, dan strategi akuisisi pasien untuk mendukung pertumbuhan layanan.</li>
            </ul>
          </div>

          {/** PT Deltaloka Konsultasi Indonesia */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Business Support Consultant (Project-Based)
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT Deltaloka Konsultasi Indonesia | Aug 2024 – Present
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Memberikan dukungan konsultatif terkait workflow broker asuransi untuk pengembangan sistem ERP dan web-based insurance platform.</li>
              <li>Membantu penerjemahan kebutuhan operasional insurance broker ke dalam kebutuhan sistem dan alur kerja aplikasi.</li>
              <li>Berkoordinasi dengan tim pengembangan dan klien terkait implementasi sistem dan kebutuhan operasional proyek.</li>
              <li>Mendukung dokumentasi kebutuhan bisnis dan monitoring progress implementasi sistem.</li>
            </ul>
          </div>

          {/** PT IBS Benefits Insurance Brokers – Technical Service Executive */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Technical Service Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT IBS Benefits Insurance Brokers | Jan 2022 – Jul 2024
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Menyusun dan mengevaluasi struktur benefit asuransi kesehatan berdasarkan kebutuhan dan tren utilisasi klien.</li>
              <li>Melakukan analisis polis, benefit, dan market review perusahaan asuransi.</li>
              <li>Berkoordinasi dengan tim Business Development dalam proposal, renewal, dan solusi program.</li>
              <li>Memberikan dukungan teknis terkait implementasi program asuransi kesehatan korporasi.</li>
            </ul>
          </div>

          {/** PT IBS Benefits Insurance Brokers – Claims & Client Service Executive */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Claims & Client Service Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT IBS Benefits Insurance Brokers | Jun 2018 – Dec 2021
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Menjadi penghubung utama antara klien korporasi dan perusahaan asuransi terkait layanan peserta dan klaim.</li>
              <li>Menangani koordinasi dan negosiasi dispute klaim serta evaluasi kualitas layanan.</li>
              <li>Melakukan review tren klaim dan kebutuhan servicing untuk lebih dari 100 akun korporasi.</li>
              <li>Memberikan konsultasi terkait manfaat asuransi dan pengelolaan risiko kesehatan perusahaan.</li>
            </ul>
          </div>

          {/** Rumah Sakit Suci Paramita */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Insurance & Administration Officer
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Rumah Sakit Suci Paramita | Nov 2016 – Dec 2017
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Mengelola administrasi layanan pasien asuransi dan proses klaim.</li>
              <li>Berkoordinasi dengan perusahaan asuransi terkait administrasi pelayanan pasien.</li>
              <li>Mendukung pengelolaan kerja sama corporate insurance dan administrasi operasional.</li>
            </ul>
          </div>

          {/** Mega Insurance (CT Corp) */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Claims Officer Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Mega Insurance (CT Corp) | Jun 2015 – Nov 2016
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Mengelola proses klaim managed care termasuk verifikasi administrasi dan analisis medis.</li>
              <li>Melakukan evaluasi data klaim dan monitoring pelayanan peserta.</li>
              <li>Menyusun laporan operasional dan utilisasi layanan kesehatan.</li>
            </ul>
          </div>

          {/** Across Asia Assist */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Claims Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Across Asia Assist | Sep 2014 – Apr 2015
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Mengelola administrasi dan verifikasi klaim asuransi kesehatan.</li>
              <li>Menganalisis dokumen medis dan koordinasi kebutuhan layanan klaim dengan provider.</li>
              <li>Mendukung monitoring proses pelayanan dan administrasi peserta.</li>
            </ul>
          </div>

          {/** RS Halmahera Siaga */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Emergency Nurse
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              RS Halmahera Siaga | Jul 2013 – Aug 2014
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li>Menangani pelayanan pasien gawat darurat sesuai prosedur triage dan standar keselamatan pasien.</li>
              <li>Mendukung koordinasi pelayanan medis dan administrasi pasien.</li>
              <li>Mengelola dokumentasi medis dan administrasi pelayanan pasien.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
