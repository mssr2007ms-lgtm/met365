import { SUPPLIERS, PRICES, PRODUCTS, CATEGORIES } from '@/lib/data'

export default function SuppliersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Поставщики</h1>
      <p className="text-sm text-[#64748b] mb-8">
        Все поставщики прошли проверку — только производители и металлобазы без посредников
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SUPPLIERS.map(supplier => {
          const priceCount = PRICES.filter(p => p.supplierId === supplier.id).length
          const productIds = [...new Set(PRICES.filter(p => p.supplierId === supplier.id).map(p => p.productId))]
          const categoryIds = [...new Set(productIds.map(pid => PRODUCTS.find(p => p.id === pid)?.categoryId).filter(Boolean))]

          return (
            <div key={supplier.id} className="bg-white rounded-xl border border-[#e2e8f0] p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="font-semibold text-[#1a1a1a]">{supplier.name}</h2>
                  <p className="text-sm text-[#64748b] mt-0.5">{supplier.city}</p>
                </div>
                <span className="text-xs bg-[#f0fdf4] text-[#16a34a] px-2 py-1 rounded-full">
                  ✓ Проверен
                </span>
              </div>
              <div className="border-t border-[#f1f5f9] pt-3 flex gap-4 text-sm text-[#64748b]">
                <span>{priceCount} позиций</span>
                <span>{categoryIds.length} видов сортамента</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10 bg-[#fff7f0] border border-[#fde8d8] rounded-xl p-6">
        <h2 className="font-semibold text-[#1a1a1a] mb-2">Хотите стать поставщиком?</h2>
        <p className="text-sm text-[#64748b] mb-4">
          Размещаем только прямых производителей и металлобазы. Перекупы и посредники не проходят проверку.
        </p>
        <a
          href="mailto:info@met365.ru"
          className="inline-block px-5 py-2.5 bg-[#e85d04] hover:bg-[#dc2f02] text-white text-sm font-medium rounded-lg transition-colors"
        >
          Подать заявку
        </a>
      </div>
    </div>
  )
}
