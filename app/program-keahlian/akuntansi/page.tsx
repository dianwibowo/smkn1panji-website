import PageHeader from '@/components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader
        title="Akuntansi dan Keuangan Lembaga"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Akuntansi dan Keuangan Lembaga' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TODO: Isi konten halaman Akuntansi dan Keuangan Lembaga */}
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">Konten halaman <strong>Akuntansi dan Keuangan Lembaga</strong> dalam pengembangan</p>
        </div>
      </div>
    </>
  )
}
