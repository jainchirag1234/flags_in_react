import { useCallback, memo, useState } from "react";

const Button = memo(({ onClick, children, style }) => {
  console.log(`Rendering button: ${children}`);
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment inside");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement inside");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <Button onClick={increment}>Increment</Button>

      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
