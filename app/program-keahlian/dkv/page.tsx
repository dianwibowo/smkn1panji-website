import PageHeader from '@/components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader
        title="Desain Komunikasi Visual"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Desain Komunikasi Visual' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TODO: Isi konten halaman Desain Komunikasi Visual */}
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">Konten halaman <strong>Desain Komunikasi Visual</strong> dalam pengembangan</p>
        </div>
      </div>
    </>
  )
}
