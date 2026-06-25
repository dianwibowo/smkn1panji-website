import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Identitas sekolah */}
          <div className="lg:col-span-1">
            <img src="/images/logo.png" alt="Logo SMKN 1 Panji" className="h-14 w-auto mb-4 brightness-0 invert" />
            <h3 className="font-bold text-lg leading-tight mb-1">SMK Negeri 1 Panji Situbondo</h3>
            <p className="text-blue-200 text-sm">SMK Pusat Keunggulan</p>
            <p className="text-blue-300 text-xs mt-2 italic">Kreatif, Inovatif dan Berkarakter</p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-blue-100">Kontak</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex gap-2">
                <span className="mt-0.5">📍</span>
                <span>Jl. Gunung Arjuno No. 17, Mimbaan, Panji, Situbondo 68322</span>
              </li>
              <li>📞 0338 - 672507 / 0338 - 677323</li>
              <li>✉️ info@smkn1panji-sit.sch.id</li>
              <li>🕐 Senin – Sabtu: 07.00 – 17.00</li>
            </ul>
          </div>

          {/* Tautan cepat */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-blue-100">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              {[
                { label: 'Sejarah Sekolah', href: '/profil/sejarah' },
                { label: 'Visi dan Misi', href: '/profil/visi-misi' },
                { label: 'Program Keahlian', href: '/program-keahlian' },
                { label: 'Berita & Kegiatan', href: '/berita' },
                { label: 'Kontak Kami', href: '/kontak' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media sosial */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-blue-100">Ikuti Kami</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/smknegeri1panjisitubondo/', icon: 'fb' },
                { label: 'Instagram', href: 'https://www.instagram.com/smkn1panji/', icon: 'ig' },
                { label: 'YouTube', href: 'https://www.youtube.com/channel/UCXLajOB6tbOYVfPnQd69l_Q/', icon: 'yt' },
                { label: 'Twitter / X', href: 'https://twitter.com/smkn1panji_sit/', icon: 'tw' },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <span className="w-6 text-center">🔗</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} SMK Negeri 1 Panji Situbondo. Hak cipta dilindungi.</p>
          <p>
            <a href="https://www.smkn1panji-sit.sch.id" className="hover:text-white transition-colors">
              www.smkn1panji-sit.sch.id
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
