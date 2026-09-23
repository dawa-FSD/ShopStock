import products from "../data/products";

export default function Dashboard() {
  const totalProducts = products.length;

  const totalStock = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  const lowStock = products.filter((product) => product.quantity <= 5).length;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to ShopStock.</p>

      <div>
        <h2>Total Products</h2>
        <p>{totalProducts}</p>
      </div>

      <div>
        <h2>Total Stock</h2>
        <p>{totalStock}</p>
      </div>

      <div>
        <h2>Low Stock Products</h2>
        <p>{lowStock}</p>
      </div>

      <h2>Recent Products</h2>

      {products.slice(0, 3).map((product) => (
        <p key={product.id}>
          {product.name} — {product.quantity} in stock
        </p>
      ))}
    </div>
  );
}
