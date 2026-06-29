import Link from 'next/link'

// ── DATA ─────────────────────────────────────────────────────────
const stats = [
  { value: '12', label: 'Program Keahlian' },
  { value: '58+', label: 'Tahun Berdiri' },
  { value: 'ISO', sublabel: '9001:2008', label: 'Bersertifikat' },
  { value: '#1', label: 'Adiwiyata Mandiri\ndi Kab. Situbondo' },
]

const programs = [
  { short: 'TJKT', name: 'Teknik Jaringan Komputer & Telekomunikasi', href: '/program-keahlian/tjkt', color: '#1a3a5c' },
  { short: 'PPLG', name: 'Pengembangan Perangkat Lunak & Gim', href: '/program-keahlian/pplg', color: '#1d6a8a' },
  { short: 'DKV', name: 'Desain Komunikasi Visual', href: '/program-keahlian/dkv', color: '#2d7d46' },
  { short: 'AKL', name: 'Akuntansi & Keuangan Lembaga', href: '/program-keahlian/akuntansi', color: '#6b4c9a' },
  { short: 'PHT', name: 'Perhotelan', href: '/program-keahlian/perhotelan', color: '#8a3a2d' },
  { short: 'Kuliner', name: 'Kuliner', href: '/program-keahlian/kuliner', color: '#8a6a1a' },
  { short: 'Busana', name: 'Busana', href: '/program-keahlian/busana', color: '#8a2d6b' },
  { short: 'MPLB', name: 'Manajemen Perkantoran & Layanan Bisnis', href: '/program-keahlian/mplb', color: '#2d5a8a' },
  { short: 'Pemasaran', name: 'Pemasaran (Bisnis Daring)', href: '/program-keahlian/pemasaran', color: '#1a6b5a' },
  { short: 'Broadcasting', name: 'Broadcasting & Perfilman', href: '/program-keahlian/broadcasting', color: '#6b1a1a' },
  { short: 'Kecantikan', name: 'Kecantikan & Spa', href: '/program-keahlian/kecantikan', color: '#8a2d4a' },
  { short: 'APHP', name: 'Agribisnis Pengolahan Hasil Pertanian', href: '/program-keahlian/aphp', color: '#3a6b1a' },
]

const news = [
  {
    category: 'Kegiatan Siswa', date: '22 Jan 2026',
    title: 'Alumni Berbagi: Strategi Sukses Menjadi Pelajar Cerdas Hukum dan Berkarakter',
    href: '/berita',
  },
  {
    category: 'Kerjasama Industri', date: '26 Nov 2025',
    title: 'Guru Tamu Alfaclass: Narasumber dari PT. Sumber Alfaria Trijaya (Alfamart)',
    href: '/berita',
  },
  {
    category: 'Kegiatan Sekolah', date: '25 Nov 2025',
    title: 'Upacara Hari Guru Nasional & Serah Terima Jabatan Pengurus OSIS 2025/2026',
    href: '/berita',
  },
]

// ── COMPONENTS ───────────────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-gray mb-3">
      {children}
    </p>
  )
}

// ── PAGE ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="font-sans">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden bg-brand-black">

        {/* Background image placeholder — ganti src dengan foto sekolah asli */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Kegiatan siswa SMKN 1 Panji"
            className="w-full h-full object-cover opacity-40"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-blue-900/20" />
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-32 w-full">
          <p className="text-brand-gray text-sm font-medium tracking-widest uppercase mb-6">
            SMK Pusat Keunggulan · Situbondo
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
            Bukan sekadar{' '}
            <br className="hidden sm:block" />
            belajar —{' '}
            <span className="text-brand-gray italic">berkarya.</span>
          </h1>
          <p className="text-white/70/80 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
            SMK Negeri 1 Panji Situbondo berdiri sejak 1965, membentuk lulusan
            yang siap kerja, mandiri, dan berdaya saing global melalui 12 program
            keahlian unggulan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/profil/sejarah"
              className="bg-white text-brand-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Kenali Kami
            </Link>
            <Link
              href="/program-keahlian"
              className="border border-white/40 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Program Keahlian →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-brand-dark-red text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.value} className="px-8 py-10">
                <div className="text-4xl font-bold leading-none mb-1">
                  {s.value}
                  {s.sublabel && (
                    <span className="text-xl ml-1 font-normal text-brand-gray">{s.sublabel}</span>
                  )}
                </div>
                <div className="text-brand-gray text-sm mt-2 whitespace-pre-line leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISI SECTION ──────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Teks */}
          <div>
            <SectionLabel>Visi Sekolah</SectionLabel>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Pusat Keunggulan yang{' '}
              <span className="text-brand-white italic">Berkarakter</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Menjadi SMK Pusat Keunggulan berpola BLUD berstandar Internasional,
              Berkebudayaan dan Berwawasan Lingkungan serta memiliki karakter
              Profil Pelajar Pancasila.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sejak 1965, kami telah meluluskan ribuan alumni yang berkontribusi
              di dunia industri lokal maupun internasional. Sistem manajemen mutu
              ISO 9001:2008 dan penghargaan Adiwiyata Mandiri menjadi bukti komitmen
              kami terhadap kualitas dan lingkungan.
            </p>
            <Link
              href="/profil/visi-misi"
              className="inline-flex items-center gap-2 text-brand-white font-semibold hover:gap-3 transition-all"
            >
              Baca Visi & Misi lengkap →
            </Link>
          </div>

          {/* Gambar */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/10">
              <img
                src="/images/visi-foto.jpg"
                alt="Kegiatan pembelajaran SMKN 1 Panji"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[220px]">
              <p className="text-3xl font-bold text-brand-white">Adiwiyata</p>
              <p className="text-sm text-gray-500 mt-1">Mandiri — satu-satunya<br />di Kab. Situbondo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMBUTAN KEPALA SEKOLAH ───────────────────────────── */}
      <section className="bg-white/5 py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel>Sambutan</SectionLabel>
          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-800 leading-relaxed italic mb-10">
            "Kami mempersiapkan tamatan yang tidak hanya siap kerja,
            tetapi juga mandiri, kompetitif, dan siap bersaing di era global
            dengan tetap menjunjung nilai-nilai Pancasila."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 overflow-hidden flex-shrink-0">
              <img
                src="/images/kepala-sekolah.jpg"
                alt="Paimin, M.Pd."
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Paimin, M.Pd.</p>
              <p className="text-sm text-gray-500">Kepala SMKN 1 Panji Situbondo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM KEAHLIAN ──────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Program Keahlian</SectionLabel>
              <h2 className="text-4xl font-bold text-gray-900">
                12 Jurusan,{' '}
                <span className="text-brand-white italic">satu tujuan.</span>
              </h2>
            </div>
            <Link
              href="/program-keahlian"
              className="text-brand-white font-semibold hover:underline text-sm flex-shrink-0"
            >
              Lihat semua program →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {programs.map((p) => (
              <Link
                key={p.short}
                href={p.href}
                className="group relative rounded-xl overflow-hidden aspect-square flex flex-col justify-end p-5 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: p.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative">
                  <p className="text-white/60 text-xs font-medium mb-1">{p.short}</p>
                  <p className="text-white font-semibold text-sm leading-snug">{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FASILITAS / KEUNGGULAN ────────────────────────────── */}
      <section className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Gambar grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square rounded-xl bg-brand-dark-red overflow-hidden">
              <img src="/images/fasilitas-1.jpg" alt="Fasilitas lab komputer" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl bg-blue-800 overflow-hidden mt-8">
              <img src="/images/fasilitas-2.jpg" alt="Workshop praktik" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl bg-blue-800 overflow-hidden">
              <img src="/images/fasilitas-3.jpg" alt="Ruang kelas" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-xl bg-brand-dark-red overflow-hidden mt-8">
              <img src="/images/fasilitas-4.jpg" alt="Area sekolah" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Teks */}
          <div>
            <SectionLabel>Fasilitas & Keunggulan</SectionLabel>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Belajar di lingkungan{' '}
              <span className="text-brand-gray italic">yang mendukung</span>
            </h2>
            <div className="space-y-5 mb-10">
              {[
                { icon: '🏫', title: 'Kampus Hijau Adiwiyata', desc: 'Lingkungan belajar asri dan berwawasan lingkungan' },
                { icon: '🔬', title: 'Laboratorium Modern', desc: 'Lab komputer, workshop, dapur praktik, dan studio' },
                { icon: '🤝', title: 'Kemitraan Industri', desc: 'Kerjasama dengan DUDI nasional dan internasional' },
                { icon: '🏆', title: 'ISO 9001:2008', desc: 'Sistem manajemen mutu berstandar internasional' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/profil/sarana-prasarana"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Lihat Sarana & Prasarana →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BERITA ────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <SectionLabel>Berita & Kegiatan</SectionLabel>
              <h2 className="text-4xl font-bold text-gray-900">
                Terkini dari{' '}
                <span className="text-brand-white italic">SMKN 1 Panji</span>
              </h2>
            </div>
            <Link href="/berita" className="text-brand-white font-semibold hover:underline text-sm flex-shrink-0">
              Lihat semua berita →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <Link
                key={i}
                href={n.href}
                className="group block border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Gambar placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-brand-gray text-4xl">📰</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand-white bg-white/5 px-2.5 py-1 rounded-full">
                      {n.category}
                    </span>
                    <span className="text-xs text-gray-400">{n.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-brand-white transition-colors">
                    {n.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PPDB ──────────────────────────────────────────── */}
      <section className="bg-brand-dark-red py-20 px-6 lg:px-8 text-white text-center">
        <p className="text-brand-gray text-sm font-semibold tracking-widest uppercase mb-4">
          Penerimaan Peserta Didik Baru
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
          Mulai perjalananmu di SMKN 1 Panji
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Bergabunglah dengan ribuan alumni yang telah berhasil berkarier
          di industri nasional dan internasional.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/kontak"
            className="bg-white text-brand-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors"
          >
            Hubungi Kami
          </Link>
          <Link
            href="/profil/sejarah"
            className="border border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Profil Sekolah
          </Link>
        </div>
      </section>

    </div>
  )
}
