import Link from 'next/link'
import { getCategories } from '@/lib/db'
import SearchBar from '@/components/SearchBar'

export default async function HomePage() {
  const categories = await getCategories()
  const blackCategories = categories.filter((c: any) => c.group_type === 'black')
  const stainlessCategories = categories.filter((c: any) => c.group_type === 'stainless')
  const nonferrousCategories = categories.filter((c: any) => c.group_type === 'nonferrous')

  return (
    <div>
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3">
            Сравнение цен на металлопрокат
          </h1>
          <p className="text-[#64748b] text-lg mb-8 max-w-xl">
            Прямые цены от проверенных поставщиков — производителей и металлобаз. Без посредников.
          </p>
          <SearchBar />
        </div>
      </section>

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

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-[#1a1a1a] mb-6">Каталог металлопроката</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { label: 'Чёрный металл', group: 'black', items: blackCategories },
            { label: 'Нержавейка', group: 'stainless', items: stainlessCategories },
            { label: 'Цветной металл', group: 'nonferrous', items: nonferrousCategories },
          ].map(col => (
            <div key={col.group} className="bg-white rounded-xl border border-[#e2e8f0] p-5">
              <Link href={`/catalog?group=${col.group}`}>
                <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center justify-between hover:text-[#e85d04] transition-colors">
                  {col.label}
                  <span className="text-xs text-[#64748b] font-normal">{col.items.length} видов →</span>
                </h3>
              </Link>
              <ul className="space-y-1.5">
                {col.items.map((cat: any) => (
                  <li key={cat.id}>
                    <Link href={`/catalog/${cat.slug}`} className="text-sm text-[#1a1a1a] hover:text-[#e85d04] transition-colors">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
