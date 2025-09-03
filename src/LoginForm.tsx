import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuth } from "./api/AuthContext";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  password: string;
};

function LoginForm() {
  const [formData, setFormData] = useState<FormValues>({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.username === "admin" && formData.password === "xminds@123") {
      const fakeToken = "asdf1234token";
      setToken(fakeToken);
      setMessage("Login successful");
      navigate("/products");
    } else {
      setMessage("Try again!!");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoginForm;
