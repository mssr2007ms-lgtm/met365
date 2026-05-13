'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { CATEGORIES, GROUPS, type MetalGroup } from '@/lib/data'

function CatalogContent() {
  const searchParams = useSearchParams()
  const group = (searchParams.get('group') as MetalGroup) || 'black'

  const categories = CATEGORIES.filter(c => c.group === group).sort((a, b) => a.name.localeCompare(b.name, 'ru'))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Каталог металлопроката</h1>

      {/* Вкладки */}
      <div className="flex gap-1 mb-8 border-b border-[#e2e8f0]">
        {GROUPS.map(g => (
          <Link
            key={g.id}
            href={`/catalog?group=${g.id}`}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
              group === g.id
                ? 'border-[#e85d04] text-[#e85d04]'
                : 'border-transparent text-[#64748b] hover:text-[#1a1a1a]'
            }`}
          >
            {g.label}
          </Link>
        ))}
      </div>

      {/* Список сортамента */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map(cat => (
          <Link
            key={cat.id}
            href={`/catalog/${cat.slug}`}
            className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm font-medium text-[#1a1a1a] hover:border-[#e85d04] hover:text-[#e85d04] transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogContent />
    </Suspense>
  )
}
