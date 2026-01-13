import { useEffect, useState } from "react";
import "./index.css";

export const ReactUseEffect = () => {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("count value:", count);
  // }, [count]);
  const [date, setDate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      {/* <h1>Hello, useEffect!</h1> */}
      <div className="container effect-container">
        <h1>Date :{date}</h1>
        {/* <h1>useEffect Hook</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button> */}
      </div>
    </div>
  );
};
