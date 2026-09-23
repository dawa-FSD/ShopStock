import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} width="200" />

      <h2>{product.name}</h2>

      <p>Category: {product.category}</p>

      <p>Price: {product.price} ETB</p>

      <p>Quantity: {product.quantity}</p>

      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}
