'use client'

import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Profil',
    href: '/profil',
    children: [
      { label: 'Sejarah', href: '/profil/sejarah' },
      { label: 'Visi dan Misi', href: '/profil/visi-misi' },
      { label: 'Kepala Sekolah', href: '/profil/kepala-sekolah' },
      { label: 'Sarana & Prasarana', href: '/profil/sarana-prasarana' },
      { label: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
    ],
  },
  {
    label: 'Program Keahlian',
    href: '/program-keahlian',
    children: [
      { label: 'Agribisnis Pengolahan Hasil Pertanian (APHP)', href: '/program-keahlian/aphp' },
      { label: 'Akuntansi dan Keuangan Lembaga (AKL)', href: '/program-keahlian/akuntansi' },
      { label: 'Broadcasting dan Perfilman', href: '/program-keahlian/broadcasting' },
      { label: 'Busana', href: '/program-keahlian/busana' },
      { label: 'Desain Komunikasi Visual (DKV)', href: '/program-keahlian/dkv' },
      { label: 'Perhotelan', href: '/program-keahlian/perhotelan' },
      { label: 'Kecantikan dan Spa', href: '/program-keahlian/kecantikan' },
      { label: 'Kuliner', href: '/program-keahlian/kuliner' },
      { label: 'Manajemen Perkantoran dan Layanan Bisnis (MPLB)', href: '/program-keahlian/mplb' },
      { label: 'Pemasaran', href: '/program-keahlian/pemasaran' },
      { label: 'Pengembangan Perangkat Lunak dan Gim (PPLG)', href: '/program-keahlian/pplg' },
      { label: 'Teknik Jaringan Komputer dan Telekomunikasi (TJKT)', href: '/program-keahlian/tjkt' },
    ],
  },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Logo SMKN 1 Panji"
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-brand-white leading-tight">SMK Negeri 1 Panji</p>
              <p className="text-xs text-gray-500 leading-tight">Situbondo</p>
            </div>
          </Link>

          {/* Desktop menu — pakai CSS group hover, tanpa JS state */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">

                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown — muncul saat group di-hover */}
                {item.children && (
                  <div className="absolute top-full left-0 w-72 z-50
                                  opacity-0 invisible translate-y-1
                                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                  transition-all duration-150 ease-out
                                  pt-2">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/5 hover:text-brand-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className="flex items-center justify-between border-b border-gray-50">
                <Link
                  href={item.href}
                  className="flex-1 block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 hover:text-brand-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    className="px-4 py-3 text-gray-400"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className="bg-gray-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2 text-sm text-gray-600 hover:bg-white/5 hover:text-brand-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
