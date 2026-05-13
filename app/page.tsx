import Link from 'next/link'
import { CATEGORIES } from '@/lib/data'

export default function HomePage() {
  const blackCategories = CATEGORIES.filter(c => c.group === 'black')
  const stainlessCategories = CATEGORIES.filter(c => c.group === 'stainless')
  const nonferrousCategories = CATEGORIES.filter(c => c.group === 'nonferrous')

  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
            Сравнение цен на металлопрокат
          </h1>
          <p className="text-[#64748b] text-lg mb-8 max-w-xl">
            Прямые цены от проверенных поставщиков — производителей и металлобаз. Без посредников.
          </p>
          <div className="flex gap-2 max-w-2xl">
            <input
              type="text"
              placeholder="Найти сортамент, например «арматура 12мм»"
              className="flex-1 px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-sm focus:outline-none focus:border-[#e85d04] transition-colors"
            />
            <button className="px-6 py-3 bg-[#e85d04] hover:bg-[#dc2f02] text-white text-sm font-medium rounded-lg transition-colors">
              Найти
            </button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Только проверенные', desc: 'Все поставщики проходят ручную проверку — только производители и склады' },
            { title: 'Без посредников', desc: 'Вы видите реальные цены напрямую от металлобаз, без наценки перекупов' },
            { title: 'Ежедневное обновление', desc: 'Цены актуальны — поставщики обновляют прайсы регулярно' },
          ].map(item => (
            <div key={item.title} className="bg-white rounded-xl border border-[#e2e8f0] p-5">
              <div className="w-8 h-1 bg-[#e85d04] rounded mb-3"></div>
              <h3 className="font-semibold text-[#1a1a1a] mb-1">{item.title}</h3>
              <p className="text-sm text-[#64748b]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Каталог */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Каталог металлопроката</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
            <Link href="/catalog?group=black">
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center justify-between hover:text-[#e85d04] transition-colors">
                Чёрный металл
                <span className="text-xs text-[#64748b] font-normal">{blackCategories.length} видов →</span>
              </h3>
            </Link>
            <ul className="space-y-1.5">
              {blackCategories.map(cat => (
                <li key={cat.id}>
                  <Link href={`/catalog/${cat.slug}`} className="text-sm text-[#1a1a1a] hover:text-[#e85d04] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
            <Link href="/catalog?group=stainless">
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center justify-between hover:text-[#e85d04] transition-colors">
                Нержавейка
                <span className="text-xs text-[#64748b] font-normal">{stainlessCategories.length} видов →</span>
              </h3>
            </Link>
            <ul className="space-y-1.5">
              {stainlessCategories.map(cat => (
                <li key={cat.id}>
                  <Link href={`/catalog/${cat.slug}`} className="text-sm text-[#1a1a1a] hover:text-[#e85d04] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-5">
            <Link href="/catalog?group=nonferrous">
              <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center justify-between hover:text-[#e85d04] transition-colors">
                Цветной металл
                <span className="text-xs text-[#64748b] font-normal">{nonferrousCategories.length} видов →</span>
              </h3>
            </Link>
            <ul className="space-y-1.5">
              {nonferrousCategories.map(cat => (
                <li key={cat.id}>
                  <Link href={`/catalog/${cat.slug}`} className="text-sm text-[#1a1a1a] hover:text-[#e85d04] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
