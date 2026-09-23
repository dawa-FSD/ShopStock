import { Link, useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>

        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Product Details</h1>

      <img src={product.image} alt={product.name} width="300" />

      <h2>{product.name}</h2>

      <p>Category: {product.category}</p>

      <p>Price: {product.price} ETB</p>

      <p>Quantity: {product.quantity}</p>

      <p>Supplier: {product.supplier}</p>

      <p>{product.description}</p>

      <p>Stock Status: {product.quantity <= 5 ? "Low Stock" : "In Stock"}</p>

      <Link to="/products">Back to Products</Link>
    </div>
  );
}
