/** @type {import('next').NextConfig} */

// Ganti 'smkn1panji-website' dengan nama repo GitHub kamu yang sebenarnya
const REPO_NAME = 'smkn1panji-website'

// isGithubPages = true saat build di GitHub Actions
// isGithubPages = false saat sudah pakai custom domain sch.id
const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',  // wajib untuk GitHub Pages (static export)

  // basePath dan assetPrefix hanya aktif saat di GitHub Pages URL
  // Setelah pindah ke sch.id, set isGithubPages = false atau hapus kedua baris ini
  basePath: isGithubPages ? `/${REPO_NAME}` : '',
  assetPrefix: isGithubPages ? `/${REPO_NAME}/` : '',

  images: {
    // GitHub Pages tidak support Next.js Image Optimization
    // Gunakan <img> biasa atau unoptimized: true
    unoptimized: true,
  },
}

module.exports = nextConfig
