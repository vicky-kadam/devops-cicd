import { useState, useEffect } from 'react'
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from './api/productApi'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

function App() {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
  const [error, setError] = useState('')

  // Backend se latest list mangwa kar state me rakho
  async function loadProducts() {
    try {
      const data = await getProducts()
      setProducts(data)
      setError('')
    } catch (err) {
      setError(err.message + ' (backend chalu hai?)')
    }
  }

  // Page khulte hi ek baar list laao
  useEffect(() => {
    loadProducts()
  }, [])

  // Form ka Save: edit mode hai to PUT, warna POST
  async function handleSave(product) {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, product)
        setEditingProduct(null)
      } else {
        await createProduct(product)
      }
      loadProducts()
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Pakka delete karna hai?')) return
    try {
      await deleteProduct(id)
      loadProducts()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container">
      <h1>Product Manager</h1>
      {error && <p className="error">{error}</p>}

      <ProductForm
        editingProduct={editingProduct}
        onSave={handleSave}
        onCancel={() => setEditingProduct(null)}
      />

      <ProductList
        products={products}
        onEdit={setEditingProduct}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App