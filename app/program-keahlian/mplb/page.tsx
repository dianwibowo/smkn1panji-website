import PageHeader from '@/components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader
        title="Manajemen Perkantoran dan Layanan Bisnis"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Manajemen Perkantoran dan Layanan Bisnis' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TODO: Isi konten halaman Manajemen Perkantoran dan Layanan Bisnis */}
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">Konten halaman <strong>Manajemen Perkantoran dan Layanan Bisnis</strong> dalam pengembangan</p>
        </div>
      </div>
    </>
  )
}
