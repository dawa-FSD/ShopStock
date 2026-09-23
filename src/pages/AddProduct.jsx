import { useState } from "react";

export default function AddProduct({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    supplier: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (!form.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!form.price || Number(form.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (form.quantity === "" || Number(form.quantity) < 0) {
      newErrors.quantity = "Quantity cannot be negative";
    }

    if (!form.supplier.trim()) {
      newErrors.supplier = "Supplier is required";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: form.name,
      category: form.category,
      price: Number(form.price),
      quantity: Number(form.quantity),
      supplier: form.supplier,
      image:
        form.image ||
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: form.description,
    };

    setProducts([...products, newProduct]);

    alert("Product added successfully!");

    setForm({
      name: "",
      category: "",
      price: "",
      quantity: "",
      supplier: "",
      image: "",
      description: "",
    });

    setErrors({});
  }

  return (
    <div>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />
        {errors.name && <p>{errors.name}</p>}

        <label>Category</label>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Enter category"
        />
        {errors.category && <p>{errors.category}</p>}

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Enter price"
        />
        {errors.price && <p>{errors.price}</p>}

        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Enter quantity"
        />
        {errors.quantity && <p>{errors.quantity}</p>}

        <label>Supplier</label>
        <input
          name="supplier"
          value={form.supplier}
          onChange={handleChange}
          placeholder="Enter supplier"
        />
        {errors.supplier && <p>{errors.supplier}</p>}

        <label>Image URL</label>
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
