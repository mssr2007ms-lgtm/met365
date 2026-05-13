'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-[#e85d04]">МЕТ</span>
            <span className="text-[#1a1a1a]">365</span>
          </span>
          <span className="hidden sm:block text-xs text-[#64748b] border-l border-[#e2e8f0] pl-2">
            сравнение цен на металлопрокат
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[#1a1a1a]">
          <Link href="/catalog" className="hover:text-[#e85d04] transition-colors">Каталог</Link>
          <Link href="/suppliers" className="hover:text-[#e85d04] transition-colors">Поставщики</Link>
          <Link href="/about" className="hover:text-[#e85d04] transition-colors">О сервисе</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:block text-sm px-4 py-1.5 rounded-md border border-[#e2e8f0] text-[#64748b] hover:border-[#e85d04] hover:text-[#e85d04] transition-colors">
            Войти
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <div className="w-5 h-0.5 bg-[#1a1a1a] mb-1"></div>
            <div className="w-5 h-0.5 bg-[#1a1a1a] mb-1"></div>
            <div className="w-5 h-0.5 bg-[#1a1a1a]"></div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white px-4 py-3 flex flex-col gap-3 text-sm">
          <Link href="/catalog" className="py-1" onClick={() => setMenuOpen(false)}>Каталог</Link>
          <Link href="/suppliers" className="py-1" onClick={() => setMenuOpen(false)}>Поставщики</Link>
          <Link href="/about" className="py-1" onClick={() => setMenuOpen(false)}>О сервисе</Link>
          <button className="text-left py-1 text-[#64748b]">Войти</button>
        </div>
      )}
    </header>
  )
}
