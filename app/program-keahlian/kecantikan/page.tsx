import PageHeader from '@/components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader
        title="Kecantikan dan Spa"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Kecantikan dan Spa' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TODO: Isi konten halaman Kecantikan dan Spa */}
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">Konten halaman <strong>Kecantikan dan Spa</strong> dalam pengembangan</p>
        </div>
      </div>
    </>
  )
}
