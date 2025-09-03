import { Navigate } from "react-router-dom";
import { useAuth } from "./api/AuthContext";
import type { JSX } from "react";

type ProtectedRouteProps = {
  children: JSX.Element;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
