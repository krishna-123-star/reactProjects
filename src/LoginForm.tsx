import { useState, type ChangeEvent, type FormEvent } from "react";

function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}

function LoginForm() {
  const username = useFormInput("");
  const password = useFormInput("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.value === "admin" && password.value === "xminds@123") {
      setMessage("Login successful");
    } else {
      setMessage("Try again!!");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" {...username} />
        <br />
        <input type="password" placeholder="Password" {...password} />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LoginForm;
