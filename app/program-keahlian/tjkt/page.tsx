import PageHeader from '@/components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader
        title="Teknik Jaringan Komputer dan Telekomunikasi"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Teknik Jaringan Komputer dan Telekomunikasi' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TODO: Isi konten halaman Teknik Jaringan Komputer dan Telekomunikasi */}
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">Konten halaman <strong>Teknik Jaringan Komputer dan Telekomunikasi</strong> dalam pengembangan</p>
        </div>
      </div>
    </>
  )
}
