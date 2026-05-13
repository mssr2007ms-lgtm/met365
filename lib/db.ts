import { supabase } from './supabase'

export async function getCategories() {
  const { data } = await supabase
    .from('categories')
    .select('*')
    .order('name')
  return data ?? []
}

export async function getCategoryBySlug(slug: string) {
  const { data } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single()
  return data
}

export async function getProductsByCategory(categoryId: string) {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', categoryId)
  return data ?? []
}

export async function getPricesByProduct(productId: string) {
  const { data } = await supabase
    .from('prices')
    .select(`*, suppliers(name, city)`)
    .eq('product_id', productId)
    .order('price_per_ton')
  return data ?? []
}

export async function getSuppliers() {
  const { data } = await supabase
    .from('suppliers')
    .select('*')
    .eq('verified', true)
    .order('name')
  return data ?? []
}

export async function getAllProducts() {
  const { data } = await supabase
    .from('products')
    .select('*, categories(slug)')
  return data ?? []
}

export async function getAllPrices() {
  const { data } = await supabase
    .from('prices')
    .select('*, products(name, category_id, standard)')
  return data ?? []
}
