interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {breadcrumb && (
          <nav className="text-brand-gray text-sm mb-3 flex items-center gap-2">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href
                  ? <a href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</a>
                  : <span className="text-white">{crumb.label}</span>
                }
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-brand-gray text-lg">{subtitle}</p>}
      </div>
    </div>
  )
}
