import { useState, useEffect, useRef } from "react";

function TypingCounter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyPress = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Typing Counter</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Please type here..."
        onKeyDown={handleKeyPress}
      />
      <p>Keys typed: {count}</p>
    </div>
  );
}

export default TypingCounter;
