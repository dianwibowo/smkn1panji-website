import PageHeader from '@/components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader
        title="Sarana dan Prasarana"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Sarana dan Prasarana' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TODO: Isi konten halaman Sarana dan Prasarana */}
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">Konten halaman <strong>Sarana dan Prasarana</strong> dalam pengembangan</p>
        </div>
      </div>
    </>
  )
}
