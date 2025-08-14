import  { useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h3>Cart Items: {cartCount}</h3>

      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
