import Button from "./Button";
import UserProfile from "./UserProfile";

const handleClick = () => {
  alert("Clicked me");
};

function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      {/* <UserProfile /> */}
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;
