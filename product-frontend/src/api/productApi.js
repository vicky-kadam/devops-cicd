// Backend ka address. Sirf yahin likha hai, baaki jagah isi ko use karenge.
const BASE_URL = 'http://localhost:8080/api/products'

// READ: saare products laao
export async function getProducts() {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Products load nahi hue')
  return res.json()
}

// CREATE: naya product banao
export async function createProduct(product) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  if (!res.ok) throw new Error('Product create nahi hua')
  return res.json()
}

// UPDATE: purana product badlo
export async function updateProduct(id, product) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  if (!res.ok) throw new Error('Product update nahi hua')
  return res.json()
}

// DELETE: product hatao
export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Product delete nahi hua')
}