'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CATEGORIES, PRODUCTS, PRICES } from '@/lib/data'

interface SearchResult {
  type: 'category' | 'product'
  label: string
  sublabel: string
  href: string
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  const results: SearchResult[] = query.length >= 2 ? (() => {
    const words = query.toLowerCase().trim().split(/\s+/)
    const items: SearchResult[] = []
    const seen = new Set<string>()

    function add(item: SearchResult) {
      if (!seen.has(item.label)) { seen.add(item.label); items.push(item) }
    }

    function matches(text: string) {
      return words.every(w => text.toLowerCase().includes(w))
    }

    // Поиск по категориям
    CATEGORIES
      .filter(c => matches(c.name))
      .slice(0, 3)
      .forEach(cat => {
        const groupLabel = cat.group === 'black' ? 'Чёрный металл' : cat.group === 'stainless' ? 'Нержавейка' : 'Цветной металл'
        add({ type: 'category', label: cat.name, sublabel: groupLabel, href: `/catalog/${cat.slug}` })
      })

    // Поиск по позициям с размерами
    PRODUCTS.forEach(product => {
      const cat = CATEGORIES.find(c => c.id === product.categoryId)
      if (!cat) return
      const sizes = [...new Set(PRICES.filter(pr => pr.productId === product.id).map(pr => pr.size))]

      // Проверяем каждую комбинацию "название + размер"
      sizes.forEach(size => {
        const label = `${product.name} ${size}`
        if (matches(label)) {
          add({ type: 'product', label, sublabel: product.standard, href: `/catalog/${cat.slug}` })
        }
      })

      // Если совпадает только название без размера
      if (matches(product.name) && !items.find(i => i.label.startsWith(product.name))) {
        add({ type: 'product', label: product.name, sublabel: sizes.length ? `${product.standard} · ${sizes.join(', ')}` : product.standard, href: `/catalog/${cat.slug}` })
      }
    })

    return items.slice(0, 8)
  })() : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSelect(href: string) {
    setQuery('')
    setOpen(false)
    router.push(href)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (results.length === 1) handleSelect(results[0].href)
    else if (results.length > 1) setOpen(true)
  }

  return (
    <div ref={ref} className="relative max-w-2xl">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => query.length >= 2 && setOpen(true)}
          placeholder="Найти сортамент, например «арматура 12мм» или «уголок»"
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
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2e8f0] rounded-lg shadow-lg z-50 overflow-hidden">
          {results.map((item, i) => (
            <button
              key={i}
              onMouseDown={() => handleSelect(item.href)}
              className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#f8f9fa] flex items-center justify-between group"
            >
              <span className="text-[#1a1a1a] group-hover:text-[#e85d04] transition-colors">{item.label}</span>
              <span className="text-xs text-[#64748b] ml-4 shrink-0">{item.sublabel}</span>
            </button>
          ))}
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2e8f0] rounded-lg shadow-lg z-50 px-4 py-3 text-sm text-[#64748b]">
          Ничего не найдено
        </div>
      )}
    </div>
  )
}
