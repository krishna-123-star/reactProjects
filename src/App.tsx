import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./api/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
