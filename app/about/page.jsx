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
          <p
            className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
            style={{ textAlign: "justify" }}
          >
            Saya memiliki lebih dari 10 tahun pengalaman di bidang Business
            Development, Market Intelligence, dan pengelolaan operasional pada
            industri asuransi. Saya berfokus pada identifikasi peluang
            pertumbuhan bisnis, perumusan strategi berbasis data, serta
            pengelolaan hubungan jangka panjang dengan klien dan mitra strategis
            untuk mendorong keberlanjutan pendapatan perusahaan. Saya memiliki
            rekam jejak yang terukur dalam penyusunan proposal strategis,
            negosiasi kontrak bernilai tinggi, serta pengelolaan akun klien
            melalui pendekatan sistematis dalam skema Key Account Management,
            dengan penerapan standar kontrol kualitas dan kepatuhan (compliance)
            yang ketat. Kompetensi profesional saya diperkuat oleh sertifikasi
            CDMS dan CDMM sebagai fondasi keahlian di bidang pemasaran digital
            dan pengembangan bisnis yang berorientasi pada hasil.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {/** PT Sinar Mulia Makmur */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Supervisor Business Development
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT Sinar Mulia Makmur | Okt 2025 – Sekarang
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li className="leading-relaxed">
                Mengidentifikasi dan memvalidasi peluang bisnis melalui market
                intelligence, analisis kompetitif, serta segmentasi klien
                berbasis data untuk Managed Print Services (MPS), IT Equipment
                Rental (printer dan laptop leasing), serta platform konten
                digital berbasis YouTube dan media sosial.
              </li>
              <li className="leading-relaxed">
                Merancang strategi go-to-market yang mencakup perumusan value
                proposition, service packaging (creative solutions, digital
                campaigns, content production, dan YouTube channel management),
                pricing model, serta roadmap akuisisi klien yang selaras dengan
                dinamika industri dan kebutuhan pasar.
              </li>
              <li className="leading-relaxed">
                Berperan dalam perancangan inisiatif business development dan
                analisis pertumbuhan bisnis, meliputi solution
                conceptualization, pemetaan potensi pasar, serta penyusunan
                rekomendasi strategis berbasis data.
              </li>
              <li className="leading-relaxed">
                Berkoordinasi dengan tim lintas fungsi digital marketing dan
                content strategy untuk memastikan strategi pemasaran yang
                feasible, scalable, dan relevan terhadap business objectives
                serta karakter target audiens.
              </li>
              <li className="leading-relaxed">
                Melakukan evaluasi performa proyek dan kampanye melalui analisis
                ROI dan metrik kinerja konten (engagement, reach, conversion),
                disertai rekomendasi berbasis insight untuk meningkatkan
                efektivitas eksekusi dan retensi klien.
              </li>
              <li className="leading-relaxed">
                Mewakili perusahaan dalam aktivitas komunikasi publik, termasuk
                peran sebagai host dan spokesperson pada konten solusi kreatif
                dan digital branding di berbagai kanal digital.
              </li>
            </ul>
          </div>

          {/** PT Deltaloka Konsultasi Indonesia */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Senior Business Development
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT Deltaloka Konsultasi Indonesia | Jul 2023 - Okt 2025
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li className="leading-relaxed">
                Memimpin identifikasi dan validasi peluang bisnis melalui market
                intelligence, analisis kompetitif, dan segmentasi klien berbasis
                data untuk solusi digital dan teknologi.
              </li>
              <li className="leading-relaxed">
                Merancang strategi go-to-market yang mencakup value proposition,
                service packaging, pricing model, dan roadmap akuisisi klien.
              </li>
              <li className="leading-relaxed">
                Mengelola proses end-to-end mulai dari early engagement hingga
                negosiasi dan finalisasi kontrak, dengan fokus pada efisiensi,
                mitigasi risiko, dan pencapaian target pendapatan.
              </li>
              <li className="leading-relaxed">
                Membangun strategic partnership dan hubungan kerja dengan level
                eksekutif untuk memperluas pipeline dan memperkuat positioning
                perusahaan.
              </li>
              <li className="leading-relaxed">
                Berkoordinasi dengan tim lintas fungsi (engineering, UI/UX,
                digital marketing) untuk memastikan solusi yang feasible,
                scalable, dan selaras dengan kebutuhan bisnis klien.
              </li>
              <li className="leading-relaxed">
                Melakukan evaluasi performa proyek melalui analisis ROI,
                perbaikan proses, serta rekomendasi berbasis insight untuk
                meningkatkan kualitas eksekusi dan retensi klien.
              </li>
              <li className="leading-relaxed">
                Mewakili perusahaan dalam aktivitas pitching, presentasi solusi,
                dan agenda thought leadership eksternal.
              </li>
            </ul>
          </div>

          {/** PT Cipta Integra Duta (IBS Group) */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Technical Service Executive
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              PT Cipta Integra Duta (IBS Group) | Jun 2018 – Jul 2023
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li className="leading-relaxed">
                Mengelola operasional klaim asuransi kesehatan, jiwa, dan
                kecelakaan pada tingkat korporasi, termasuk pengelolaan lebih
                dari 100 akun klien dan perusahaan asuransi dalam skema Key
                Account Management, dengan standar kontrol kualitas dan
                kepatuhan yang ketat.
              </li>
              <li className="leading-relaxed">
                Menangani dispute dan investigasi klaim melalui analisis data
                medis, ketentuan polis, dan underwriting untuk memastikan
                keputusan klaim yang akurat dan terukur.
              </li>
              <li className="leading-relaxed">
                Berperan dalam pengembangan FITS.ID, platform e-commerce
                kesehatan berbasis wellness ecosystem, dengan fokus pada system
                analysis, user experience, serta integrasi produk asuransi dalam
                alur digital.
              </li>
              <li className="leading-relaxed">
                Berkontribusi dalam pengembangan BRIX, sistem ERP broker
                asuransi, melalui analisis alur klaim, manajemen data, serta
                otomatisasi perhitungan premi untuk meningkatkan efisiensi,
                transparansi, dan skalabilitas operasional.
              </li>
              <li className="leading-relaxed">
                Menyusun laporan analitik terkait tren klaim, risk exposure, dan
                rekomendasi strategis guna penguatan kontrol biaya dan
                peningkatan efisiensi operasional.
              </li>
              <li className="leading-relaxed">
                Menginisiasi program edukasi kesehatan berbasis data untuk
                menurunkan claim ratio melalui pendekatan preventif dan
                perubahan perilaku peserta.
              </li>
            </ul>
          </div>

          {/** Rumah Sakit Suci Paramita */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Insurance & Administration Officer
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Rumah Sakit Suci Paramita | Nov 2016 – Des 2017
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li className="leading-relaxed">
                Mengelola operasional klaim pasien asuransi dengan fokus pada
                ketepatan validasi, kelengkapan dokumentasi, dan penyelesaian
                sengketa klaim.
              </li>
              <li className="leading-relaxed">
                Mendukung pengembangan kerja sama corporate insurance serta
                inisiatif pemasaran layanan kesehatan, termasuk akuisisi kerja
                sama dengan lebih dari 13 perusahaan asuransi.
              </li>
              <li className="leading-relaxed">
                Melakukan studi kepuasan pasien dan analisis service performance
                sebagai dasar penyempurnaan kualitas dan efektivitas layanan.
              </li>
            </ul>
          </div>

          {/** Mega Insurance (CT Corp)*/}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Claims Officer Executive{" "}
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              Mega Insurance (CT Corp) | Jun 2015 – Nov 2016
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li className="leading-relaxed">
                Mengelola lifecycle klaim managed care untuk wilayah Bali,
                termasuk verifikasi, penilaian medis, serta koordinasi dengan
                rumah sakit dan pihak ketiga.
              </li>
              <li className="leading-relaxed">
                Melakukan risk assessment pada klaim berpotensi tinggi dan
                memberikan rekomendasi teknis untuk keputusan klaim.
              </li>
              <li className="leading-relaxed">
                Menyusun laporan analitik triwulanan terkait tren biaya,
                utilisasi layanan kesehatan, dan pola risiko untuk mendukung
                keputusan manajemen.
              </li>
            </ul>
          </div>

          {/** Across Asia Assist */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
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
              <li className="leading-relaxed">
                Mengelola klaim asuransi BCA secara nasional melalui proses
                verifikasi yang presisi dan pengelolaan risiko yang terstruktur.
              </li>
              <li className="leading-relaxed">
                Melakukan investigasi klaim kompleks serta menyusun rekomendasi
                berdasarkan temuan data, dokumen medis, dan kebijakan polis.
              </li>
              <li className="leading-relaxed">
                Menyusun laporan analitik triwulanan sebagai dasar pengambilan
                keputusan operasional dan evaluasi efisiensi.
              </li>
            </ul>
          </div>

          {/** RS Halmahera Siaga */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:border-gray-600 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
              Emergency Nurse
            </h3>
            <p className="text-blue-400 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
              RS Halmahera Siaga | Jul 2013 – Agu 2014
            </p>
            <ul
              className="list-disc list-inside text-gray-300 mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm"
              style={{ textAlign: "justify" }}
            >
              <li className="leading-relaxed">
                Menangani pasien gawat darurat berbasis clinical triage dan
                protokol keselamatan pasien.
              </li>
              <li className="leading-relaxed">
                Mengelola alur kerja klinis, dokumentasi medis, dan koordinasi
                unit dalam lingkungan yang membutuhkan ketepatan tinggi dan
                respon cepat.
              </li>
              <li className="leading-relaxed">
                Mendukung kesinambungan perawatan melalui koordinasi antar
                profesi dan pengelolaan informasi klinis yang akurat.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
