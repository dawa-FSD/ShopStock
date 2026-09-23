import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import productsData from "./data/products";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductDetails from "./pages/productDetails";
import AddProduct from "./pages/Addproduct";
import Inventory from "./pages/Inventory";

import Layout from "./components/Layout";

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("shopstock-products");

    return savedProducts ? JSON.parse(savedProducts) : productsData;
  });

  useEffect(() => {
    localStorage.setItem("shopstock-products", JSON.stringify(products));
  }, [products]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard products={products} />} />

          <Route
            path="/dashboard"
            element={<Dashboard products={products} />}
          />

          <Route path="/products" element={<Products products={products} />} />

          <Route
            path="/products/:id"
            element={<ProductDetails products={products} />}
          />

          <Route
            path="/products/new"
            element={
              <AddProduct products={products} setProducts={setProducts} />
            }
          />

          <Route
            path="/inventory"
            element={
              <Inventory products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
