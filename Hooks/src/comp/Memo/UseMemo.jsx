// import { useMemo } from "react";

import { useState } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (let i = 0; i <= 100000000; i++) {
      i = i + 1;
    }
    return i;
  };
  //   const total = useMemo(() => sum(), []);
  const total = sum;
  return <p>sum: {total}</p>;
};
const MemoParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button onClick={() => setCount(count + 1)}>Re-Render Parent</button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};
export default MemoParentComponent;
