import Button from "./Button";
import CartApp from "./Cart";
import Counter from "./Counter";
import CounterWithTitle from "./CounterWithTitle";
import { Department } from "./Department";
import LoginForm from "./LoginForm";
import Products from "./Products";
import TimeInterval from "./TimeInterval";
import ThemeToggler from "./Toggler";
import UserProfile from "./UserProfile";

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
    id: 'XM-0144',
    name: "Manu Krishna",
    position: "Software Developer",
    department: "IT",
    team: "Frontend Team",
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
      <h2>Company Data</h2>
      <Department employee={empData} />
    </div>
  );
}

export default App;
