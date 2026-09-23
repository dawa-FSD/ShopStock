import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>ShopStock</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/products">Products</Link>

        <Link to="/products/new">Add Product</Link>

        <Link to="/inventory">Inventory</Link>
      </div>
    </nav>
  );
}
