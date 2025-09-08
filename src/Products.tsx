import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div style={{ flex: 1 }}>
        <h1>Products List</h1>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.image} alt={p.title} width="100" height="100" />
            <h3>{p.title}</h3>
            <p>${p.price}</p>

            <Link
              to={`/products/${p.id}`}
              state={{ product: p }} 
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, borderLeft: "2px solid #ddd", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
