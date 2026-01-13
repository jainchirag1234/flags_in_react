// import "../Hooks.css";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  // console.log(useState(5));
  const handleIncrement = () => {
    setCount(count + 1);
    console.log("inner", count);
  };
  console.log("outer", count);
  return (
    <div className="container state-container" style={{ textAlign: "center" }}>
      <h1>UseState Hook!</h1>
      <br />
      <p>{count}</p>
      {/* <button className="state-button" onClick={() => setCount(count + 1)}>
        Increment
      </button> */}
      <button className="state-button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};
