import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
  const [count, setCount] = useState(0);
  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <div className="title">
          Subscribers <br />
          Realtime Counter
        </div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};
