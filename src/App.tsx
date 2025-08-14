import { useRef } from "react";
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

const handleClick = () => {
  alert("Clicked me");
};

export type EmployeeData = {
  id: string;
  name: string;
  position: string;
  department: string;
  team: string;
};

function App() {
  const empData: EmployeeData = {
    id: "XM-0144",
    name: "Manu Krishna",
    position: "Software Developer",
    department: "IT",
    team: "Frontend Team",
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* <UserProfile /> */}
      {/* <Button label="Click Me" onClick={handleClick} /> */}
      {/* <Counter/> */}
      {/* <LoginForm/> */}
      {/* <ThemeToggler/> */}
      {/* <Products/> */}
      {/* <CounterWithTitle/> */}
      {/* <TimeInterval/> */}
      {/* <CartApp/> */}
      {/* <h2>Company Data</h2>
      <Department employee={empData} /> */}
      {/* <EmployeeContext.Provider value={empData}>
      <h2>Company Data</h2>
      <Department />
    </EmployeeContext.Provider> */}
      {/* <UserProvider>
      <h2 style={{ textAlign: "center" }}>Chat App</h2>
      <Chat />
    </UserProvider> */}
      {/* <FormComponent/> */}
      {/* <h1>E-commerce App</h1>
      <ProductList /> */}
      <TextInput ref={inputRef} placeholder="Type ..." />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}

export default App;
