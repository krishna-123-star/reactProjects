import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "./api/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const LoginForm = lazy(() => import("./LoginForm"));
const Products = lazy(() => import("./Products"));
const ProductDetail = lazy(() => import("./api/ProductDetail"));

function App() {
  return (
    <AuthProvider>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/login" element={<LoginForm />} />

            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProtectedRoute>
                  <ProductDetail />
                </ProtectedRoute>
              }
            />

            {/* Default redirect */}
            <Route path="*" element={<LoginForm />} />
          </Routes>
        </Suspense>
    </AuthProvider>
  );
}

export default App;
