export type MetalGroup = 'black' | 'stainless' | 'nonferrous'

export interface Category {
  id: string
  name: string
  group: MetalGroup
  slug: string
}

export interface Product {
  id: string
  categoryId: string
  name: string
  standard: string
  description: string
}

export interface Supplier {
  id: string
  name: string
  city: string
  verified: boolean
}

export interface PriceEntry {
  id: string
  productId: string
  supplierId: string
  size: string
  pricePerTon: number
  inStock: boolean
  updatedAt: string
  isPremium: boolean
}

export const GROUPS: { id: MetalGroup; label: string }[] = [
  { id: 'black', label: 'Чёрный металл' },
  { id: 'stainless', label: 'Нержавейка' },
  { id: 'nonferrous', label: 'Цветной металл' },
]

export const CATEGORIES: Category[] = [
  // Чёрный металл
  { id: 'armatura', name: 'Арматура', group: 'black', slug: 'armatura' },
  { id: 'balka', name: 'Балка', group: 'black', slug: 'balka' },
  { id: 'dvutavr', name: 'Двутавр', group: 'black', slug: 'dvutavr' },
  { id: 'kanat', name: 'Канаты стальные', group: 'black', slug: 'kanat' },
  { id: 'kvadrat', name: 'Квадрат', group: 'black', slug: 'kvadrat' },
  { id: 'krug', name: 'Круг', group: 'black', slug: 'krug' },
  { id: 'list-gk', name: 'Лист горячекатаный', group: 'black', slug: 'list-gk' },
  { id: 'list-hk', name: 'Лист холоднокатаный', group: 'black', slug: 'list-hk' },
  { id: 'list-oc', name: 'Лист оцинкованный', group: 'black', slug: 'list-oc' },
  { id: 'polosa', name: 'Полоса', group: 'black', slug: 'polosa' },
  { id: 'pokovka', name: 'Поковка', group: 'black', slug: 'pokovka' },
  { id: 'profnastil', name: 'Профнастил', group: 'black', slug: 'profnastil' },
  { id: 'relsy', name: 'Рельсы', group: 'black', slug: 'relsy' },
  { id: 'setka', name: 'Сетка', group: 'black', slug: 'setka' },
  { id: 'truba-krug', name: 'Труба круглая', group: 'black', slug: 'truba-krug' },
  { id: 'truba-prof', name: 'Труба профильная', group: 'black', slug: 'truba-prof' },
  { id: 'truba-ppu', name: 'Труба в ППУ изоляции', group: 'black', slug: 'truba-ppu' },
  { id: 'ugolok', name: 'Уголок', group: 'black', slug: 'ugolok' },
  { id: 'shveller', name: 'Швеллер', group: 'black', slug: 'shveller' },
  { id: 'shestigrannik', name: 'Шестигранник', group: 'black', slug: 'shestigrannik' },
  { id: 'shtrips', name: 'Штрипс', group: 'black', slug: 'shtrips' },
  // Нержавейка
  { id: 'nerj-list', name: 'Лист нержавеющий', group: 'stainless', slug: 'nerj-list' },
  { id: 'nerj-truba', name: 'Труба нержавеющая', group: 'stainless', slug: 'nerj-truba' },
  { id: 'nerj-krug', name: 'Круг нержавеющий', group: 'stainless', slug: 'nerj-krug' },
  { id: 'nerj-ugolok', name: 'Уголок нержавеющий', group: 'stainless', slug: 'nerj-ugolok' },
  { id: 'nerj-polosa', name: 'Полоса нержавеющая', group: 'stainless', slug: 'nerj-polosa' },
  { id: 'nerj-shveller', name: 'Швеллер нержавеющий', group: 'stainless', slug: 'nerj-shveller' },
  // Цветной металл
  { id: 'alyum-list', name: 'Алюминий лист', group: 'nonferrous', slug: 'alyum-list' },
  { id: 'alyum-truba', name: 'Алюминий труба', group: 'nonferrous', slug: 'alyum-truba' },
  { id: 'bronza', name: 'Бронза', group: 'nonferrous', slug: 'bronza' },
  { id: 'latun', name: 'Латунь', group: 'nonferrous', slug: 'latun' },
  { id: 'med', name: 'Медь', group: 'nonferrous', slug: 'med' },
  { id: 'titan', name: 'Титан', group: 'nonferrous', slug: 'titan' },
]

export const SUPPLIERS: Supplier[] = [
  { id: 's1', name: 'МеталлСервис', city: 'Москва', verified: true },
  { id: 's2', name: 'СталепромГрупп', city: 'Санкт-Петербург', verified: true },
  { id: 's3', name: 'УралМет', city: 'Екатеринбург', verified: true },
  { id: 's4', name: 'ЮгМеталл', city: 'Краснодар', verified: true },
  { id: 's5', name: 'СибирьСталь', city: 'Новосибирск', verified: true },
]

export const PRODUCTS: Product[] = [
  { id: 'p1', categoryId: 'armatura', name: 'Арматура А500С', standard: 'ГОСТ 52544', description: 'Горячекатаная рифлёная' },
  { id: 'p2', categoryId: 'armatura', name: 'Арматура А240', standard: 'ГОСТ 5781', description: 'Горячекатаная гладкая' },
  { id: 'p3', categoryId: 'ugolok', name: 'Уголок равнополочный', standard: 'ГОСТ 8509', description: 'Горячекатаный' },
  { id: 'p4', categoryId: 'truba-krug', name: 'Труба электросварная', standard: 'ГОСТ 10704', description: 'Прямошовная' },
  { id: 'p5', categoryId: 'list-gk', name: 'Лист г/к', standard: 'ГОСТ 19903', description: 'Горячекатаный лист' },
]

export const PRICES: PriceEntry[] = [
  { id: 'pr1', productId: 'p1', supplierId: 's1', size: '12мм', pricePerTon: 68000, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr2', productId: 'p1', supplierId: 's2', size: '12мм', pricePerTon: 66500, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr3', productId: 'p1', supplierId: 's3', size: '12мм', pricePerTon: 63200, inStock: true, updatedAt: '2026-05-12', isPremium: true },
  { id: 'pr4', productId: 'p1', supplierId: 's4', size: '16мм', pricePerTon: 67000, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr5', productId: 'p1', supplierId: 's5', size: '16мм', pricePerTon: 64800, inStock: false, updatedAt: '2026-05-11', isPremium: false },
  { id: 'pr6', productId: 'p2', supplierId: 's1', size: '10мм', pricePerTon: 65000, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr7', productId: 'p2', supplierId: 's3', size: '10мм', pricePerTon: 62000, inStock: true, updatedAt: '2026-05-13', isPremium: true },
  { id: 'pr8', productId: 'p3', supplierId: 's1', size: '50х50х5', pricePerTon: 72000, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr9', productId: 'p3', supplierId: 's2', size: '50х50х5', pricePerTon: 70500, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr10', productId: 'p4', supplierId: 's2', size: '57х3,5', pricePerTon: 78000, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr11', productId: 'p4', supplierId: 's4', size: '57х3,5', pricePerTon: 74500, inStock: true, updatedAt: '2026-05-12', isPremium: true },
  { id: 'pr12', productId: 'p5', supplierId: 's1', size: '4мм', pricePerTon: 71000, inStock: true, updatedAt: '2026-05-13', isPremium: false },
  { id: 'pr13', productId: 'p5', supplierId: 's3', size: '4мм', pricePerTon: 69200, inStock: true, updatedAt: '2026-05-13', isPremium: false },
]
