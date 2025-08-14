import React, { useState, useMemo, useCallback } from "react";

const Product = React.memo(({ product, onAddToCart }: any) => {
  return (
    <div>
      <h4>{product.name}</h4>
      <p>Price: {product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
});

export default function ProductList() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ]);

  const [cart, setCart] = useState<any[]>([]);

  const addToCart = useCallback((product: any) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <Product key={p.id} product={p} onAddToCart={addToCart} />
      ))}

      <h3>🛒 Cart</h3>
      <ul>
        {cart.map((item) => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: {totalPrice}</h3>
    </div>
  );
}
