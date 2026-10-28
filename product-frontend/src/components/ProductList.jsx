// Sirf list dikhata hai. Edit/Delete dabane par parent (App) ko bata deta hai.
function formatDate(value) {
  return value ? new Date(value).toLocaleString() : '-'
}

function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p>Abhi koi product nahi hai. Upar se add karo.</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>₹{product.price}</td>
            <td>{formatDate(product.createdAt)}</td>
            <td>{formatDate(product.updatedAt)}</td>
            <td>
              <button onClick={() => onEdit(product)}>Edit</button>
              <button className="danger" onClick={() => onDelete(product.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductList