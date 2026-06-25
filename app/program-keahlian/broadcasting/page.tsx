import PageHeader from '@/components/PageHeader'

export default function Page() {
  return (
    <>
      <PageHeader
        title="Broadcasting dan Perfilman"
        breadcrumb={[
          { label: 'Beranda', href: '/' },
          { label: 'Broadcasting dan Perfilman' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TODO: Isi konten halaman Broadcasting dan Perfilman */}
        <div className="text-center text-gray-400 py-20">
          <p className="text-xl">Konten halaman <strong>Broadcasting dan Perfilman</strong> dalam pengembangan</p>
        </div>
      </div>
    </>
  )
}
