import { useState, useCallback, type ChangeEvent } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductProps {
  product: Product;
  onAddToCart: (productId: number) => void;
}

function ProductComponent({ product, onAddToCart }: ProductProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
}

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const products: Product[] = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  const addToCartCallBack = useCallback((productId: number) => {
    setCartCount((prev) => prev + 1);
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search product..."
      />
      <h3>Cart Items: {cartCount}</h3>

      {filteredProducts.map((product) => (
        <ProductComponent
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}
