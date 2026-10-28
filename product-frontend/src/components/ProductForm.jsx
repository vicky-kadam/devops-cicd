import { useState, useEffect } from 'react'

// Ye form Add aur Edit dono ke liye hai.
// Props: editingProduct (edit mode me product), onSave (save dabane par), onCancel (edit band karne ke liye)
function ProductForm({ editingProduct, onSave, onCancel }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // Jab Edit dabaya jaye, form me us product ki values bhar do
  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name)
      setPrice(editingProduct.price)
    } else {
      setName('')
      setPrice('')
    }
  }, [editingProduct])

  function handleSubmit(e) {
    e.preventDefault() // page reload hone se roko
    onSave({ name, price: Number(price) })
    setName('')
    setPrice('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0"
        step="0.01"
        required
      />
      <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
      {editingProduct && (
        <button type="button" className="secondary" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}

export default ProductForm