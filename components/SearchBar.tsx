'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CATEGORIES } from '@/lib/data'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  const results = query.length >= 2
    ? CATEGORIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSelect(slug: string) {
    setQuery('')
    setOpen(false)
    router.push(`/catalog/${slug}`)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (results.length === 1) handleSelect(results[0].slug)
    else if (results.length > 1) {
      setOpen(true)
    }
  }

  return (
    <div ref={ref} className="relative flex gap-2 max-w-2xl">
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder="Найти сортамент, например «арматура» или «уголок»"
          className="flex-1 px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[#e85d04] hover:bg-[#dc2f02] text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
        >
          Найти
        </button>
      </form>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-16 mt-1 bg-white border border-[#e2e8f0] rounded-lg shadow-lg z-50 overflow-hidden">
          {results.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat.slug)}
              className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#f8f9fa] flex items-center justify-between group"
            >
              <span className="text-[#1a1a1a] group-hover:text-[#e85d04] transition-colors">{cat.name}</span>
              <span className="text-xs text-[#64748b]">
                {cat.group === 'black' ? 'Чёрный металл' : cat.group === 'stainless' ? 'Нержавейка' : 'Цветной'}
              </span>
            </button>
          ))}
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-16 mt-1 bg-white border border-[#e2e8f0] rounded-lg shadow-lg z-50 px-4 py-3 text-sm text-[#64748b]">
          Ничего не найдено
        </div>
      )}
    </div>
  )
}
