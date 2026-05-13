import { notFound } from 'next/navigation'
import { CATEGORIES, PRODUCTS, PRICES, SUPPLIERS } from '@/lib/data'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = CATEGORIES.find(c => c.slug === slug)
  if (!category) notFound()

  const products = PRODUCTS.filter(p => p.categoryId === category.id)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-[#64748b] mb-6">
        <a href="/" className="hover:text-[#e85d04]">Главная</a>
        {' / '}
        <a href="/catalog" className="hover:text-[#e85d04]">Каталог</a>
        {' / '}
        <span className="text-[#1a1a1a]">{category.name}</span>
      </nav>

      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">{category.name}</h1>
      <p className="text-sm text-[#64748b] mb-8">
        Цены от проверенных поставщиков — обновляются ежедневно
      </p>

      {products.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-8 text-center text-[#64748b]">
          Цены на этот сортамент скоро появятся
        </div>
      ) : (
        <div className="space-y-6">
          {products.map(product => {
            const prices = PRICES.filter(p => p.productId === product.id).sort((a, b) => a.pricePerTon - b.pricePerTon)
            const minPrice = prices.find(p => !p.isPremium)?.pricePerTon

            return (
              <div key={product.id} className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden">
                <div className="px-5 py-4 border-b border-[#e2e8f0] flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-[#1a1a1a]">{product.name}</h2>
                    <p className="text-xs text-[#64748b] mt-0.5">{product.standard} · {product.description}</p>
                  </div>
                  {minPrice && (
                    <div className="text-right">
                      <div className="text-xs text-[#64748b]">от</div>
                      <div className="font-bold text-[#1a1a1a]">{minPrice.toLocaleString('ru-RU')} ₽/т</div>
                    </div>
                  )}
                </div>

                {/* Таблица цен */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#f8f9fa] text-[#64748b] text-xs">
                        <th className="px-5 py-2.5 text-left font-medium">Поставщик</th>
                        <th className="px-5 py-2.5 text-left font-medium">Город</th>
                        <th className="px-5 py-2.5 text-left font-medium">Размер</th>
                        <th className="px-5 py-2.5 text-left font-medium">Наличие</th>
                        <th className="px-5 py-2.5 text-right font-medium">Цена, ₽/т</th>
                        <th className="px-5 py-2.5 text-right font-medium">Контакт</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {prices.map((price, i) => {
                        const supplier = SUPPLIERS.find(s => s.id === price.supplierId)
                        const isBest = i === 0

                        return (
                          <tr key={price.id} className="hover:bg-[#f8f9fa] transition-colors">
                            <td className="px-5 py-3 font-medium text-[#1a1a1a]">
                              {supplier?.name}
                              {isBest && (
                                <span className="ml-2 text-xs bg-[#fef3e2] text-[#e85d04] px-1.5 py-0.5 rounded">
                                  лучшая
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-3 text-[#64748b]">{supplier?.city}</td>
                            <td className="px-5 py-3 text-[#64748b]">{price.size}</td>
                            <td className="px-5 py-3">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                price.inStock
                                  ? 'bg-[#f0fdf4] text-[#16a34a]'
                                  : 'bg-[#fef2f2] text-[#dc2626]'
                              }`}>
                                {price.inStock ? 'В наличии' : 'Под заказ'}
                              </span>
                            </td>
                            <td className="px-5 py-3 text-right font-semibold text-[#1a1a1a]">
                              {price.pricePerTon.toLocaleString('ru-RU')}
                            </td>
                            <td className="px-5 py-3 text-right">
                              {price.isPremium ? (
                                <span className="text-xs text-[#64748b] border border-[#e2e8f0] px-2 py-1 rounded cursor-pointer hover:border-[#e85d04] hover:text-[#e85d04] transition-colors">
                                  Подписка
                                </span>
                              ) : (
                                <span className="text-xs bg-[#e85d04] hover:bg-[#dc2f02] text-white px-2 py-1 rounded cursor-pointer transition-colors">
                                  Показать
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="px-5 py-2.5 text-xs text-[#64748b] bg-[#f8f9fa]">
                  Обновлено: {prices[0]?.updatedAt}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
