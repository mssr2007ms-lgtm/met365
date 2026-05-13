import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'МЕТ365 — сравнение цен на металлопрокат',
  description: 'Прямые цены на металлопрокат от проверенных поставщиков без посредников',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-[#f8f9fa]">
        <Header />
        <main>{children}</main>
        <footer className="mt-16 border-t border-[#e2e8f0] bg-white">
          <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-[#64748b] flex flex-col md:flex-row justify-between gap-4">
            <span>© 2026 МЕТ365 — сервис сравнения цен на металлопрокат</span>
            <span>Только проверенные поставщики. Без посредников.</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
