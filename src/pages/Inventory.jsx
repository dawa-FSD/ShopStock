import { useState } from "react";
import productsData from "../data/products";

export default function Inventory() {
  const [products, setProducts] = useState(productsData);

  function increaseStock(id) {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }

  function decreaseStock(id) {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  }

  return (
    <div>
      <h1>Inventory</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>Quantity: {product.quantity}</p>

          <p>Status: {product.quantity <= 5 ? "Low Stock" : "In Stock"}</p>

          <button onClick={() => increaseStock(product.id)}>Increase</button>

          <button onClick={() => decreaseStock(product.id)}>Decrease</button>
        </div>
      ))}
    </div>
  );
}
