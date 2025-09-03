import { useEffect } from "react";
import {Routes, Route } from "react-router-dom";

import Button from "./Button";
import CartApp from "./Cart";
import { Chat } from "./Chat";
import Counter from "./Counter";
import CounterWithTitle from "./CounterWithTitle";
import { Department } from "./Department";
import { EmployeeContext } from "./EmployeeContext";
import FormComponent from "./FormComponent";
import LoginForm from "./LoginForm";
import ProductList from "./ProductList";
import Products from "./Products";
import TimeInterval from "./TimeInterval";
import ThemeToggler from "./Toggler";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";
import TextInput from "./MyInput";
import GetAxios from "./GetAxios";
import PostAxios from "./PostAxios";
import { AuthProvider, useAuth } from "./api/AuthContext";
import TechnicianDetails from "./PostAxios";
import DeleteTechnician from "./PostAxios";

export type EmployeeData = {
  id: string;
  name: string;
  position: string;
  department: string;
  team: string;
};

function AuthInitializer() {
  const { setToken } = useAuth();

  useEffect(() => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MTkyNzNlNi1kOTQzLTQzMzAtODgxNy0yNmMzNDU1NjMwZGUiLCJpYXQiOjE3NTU1MDY1OTEsImV4cCI6MTc1ODA5ODU5MX0.PrsLtSRWVizwwTejhL0zX1KjuRANg63D5FguQ65Z9NdrYgj9As-sI07ZCcynv3m8w49o4HMYDjrp37oFC_3TjA"
    );
  }, [setToken]);

  return <TechnicianDetails />;
}

function App() {
  const empData: EmployeeData = {
    id: "XM-0144",
    name: "Manu Krishna",
    position: "Software Developer",
    department: "IT",
    team: "Frontend Team",
  };

  return (
    <AuthProvider>
      {/* <Router>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/button">Button</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/cart">Cart</Link> |{" "}
          <Link to="/chat">Chat</Link> |{" "}
          <Link to="/form">Form</Link> |{" "}
          <Link to="/axios-get">GetAxios</Link> |{" "}
          <Link to="/axios-post">PostAxios</Link> |{" "}
          <Link to="/technician">TechnicianDetails</Link> |{" "}
          <Link to="/delete-tech">DeleteTechnician</Link>
        </nav> */}

        <Routes>
          <Route path="/" element={<h2>Welcome to App Dashboard</h2>} />
          <Route path="/button" element={<Button label="Click Me" onClick={() => alert("Clicked me")} />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter-title" element={<CounterWithTitle />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartApp />} />
          <Route path="/chat" element={
            <UserProvider>
              <h2 style={{ textAlign: "center" }}>Chat App</h2>
              <Chat />
            </UserProvider>
          } />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/interval" element={<TimeInterval />} />
          <Route path="/toggler" element={<ThemeToggler />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/axios-get" element={<GetAxios />} />
          <Route path="/axios-post" element={<PostAxios />} />
          <Route path="/technician" element={<TechnicianDetails />} />
          <Route path="/delete-tech" element={<DeleteTechnician />} />
        </Routes>
      {/* </Router> */}
    </AuthProvider>
  );
}

export default App;
