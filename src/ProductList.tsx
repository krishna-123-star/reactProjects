import React, { useState, useMemo } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

export default function ProductList() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const getTotalPrice = () => {
    console.log("Calculating total price...");
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const totalPrice = useMemo(() => getTotalPrice(), [cart]);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />
      <h3>Cart Items ({cart.length})</h3>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
        </div>
      ))}
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}
