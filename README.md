# ShopStock — Inventory Management System

ShopStock is a React-based inventory management system designed for small shops and businesses.

It helps shop owners and store managers manage products, monitor stock quantities, identify low-stock products, and add new products easily.

## Project Overview

Managing products manually using notebooks or spreadsheets can make it difficult to know current stock quantities, product information, and low-stock items.

ShopStock provides a simple web-based solution for managing inventory in one place.

## Target User

- Small business owners
- Shop owners
- Store managers

## Main Features

### Dashboard

- View total number of products
- View total stock quantity
- View low-stock products
- View recent products

### Products

- View all products
- Search products by name
- Filter products by category
- Open individual product details

### Product Details

- View product image
- View product name
- View category
- View price
- View quantity
- View supplier
- View description
- View stock status

### Add Product

- Add a new product
- Validate required fields
- Enter product name, category, price, quantity, supplier, image, and description
- Automatically save the new product

### Inventory

- View product stock quantities
- Increase stock quantity
- Decrease stock quantity
- Identify low-stock products

### Data Persistence

ShopStock uses browser localStorage to keep product data and inventory changes after refreshing the page.

## Routes

| Route           | Description          |
| --------------- | -------------------- |
| `/dashboard`    | Dashboard            |
| `/products`     | Product list         |
| `/products/:id` | Product details      |
| `/products/new` | Add new product      |
| `/inventory`    | Inventory management |

The `/` route also opens the Dashboard.

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- HTML
- CSS
- Browser localStorage

## Project Structure

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── data/
│   └── products.js
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── AddProduct.jsx
│   └── Inventory.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```
