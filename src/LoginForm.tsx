import React, { useState, type ChangeEvent, type FormEvent } from "react";

type FormValues = {
  [key: string]: string;
};

function useForm(initialValues: FormValues) {
  const [formData, setFormData] = useState<FormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    formData,
    handleChange,
  };
}

function LoginForm() {
  const { formData, handleChange } = useForm({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.username === "admin" && formData.password === "xminds@123") {
      setMessage("Login successful");
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
