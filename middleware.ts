import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const devPassword = process.env.DEV_PASSWORD

  // Jika DEV_PASSWORD tidak di-set → site terbuka untuk umum (mode produksi)
  if (!devPassword) return NextResponse.next()

  // Halaman login tidak perlu diproteksi
  if (req.nextUrl.pathname === '/login') return NextResponse.next()

  // Cek cookie sesi
  const cookie = req.cookies.get('dev_auth')?.value
  if (cookie === devPassword) return NextResponse.next()

  // Belum login → redirect ke halaman login
  return NextResponse.redirect(new URL('/login', req.url))
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|fonts).*)'],
}
