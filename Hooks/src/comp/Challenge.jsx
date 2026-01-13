import React, { useState } from "react";

const Challenge1 = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");
  const [history, setHistory] = useState([]);

  // Increment
  const handleIncrement = () => {
    const stepValue = Number(step) || 1;
    const newValue = count + stepValue;

    setCount(newValue);
    setHistory([...history, newValue]);
  };

  // Decrement (NEGATIVE BLOCKED)
  const handleDecrement = () => {
    const stepValue = Number(step) || 1;
    const newValue = count - stepValue;

    if (newValue < 0) return; // ❌ stop here

    setCount(newValue);
    setHistory([...history, newValue]);
  };

  // Reset
  const handleReset = () => {
    setCount(0);
    setHistory([...history, 0]);
  };

  return (
    <div className="container state-container">
      <h1>useState Counter Challenge</h1>

      <p>
        Count: <span>{count}</span>
      </p>

      <div>
        <label>
          Step :
          <input
            type="number"
            min="1"
            value={step}
            onChange={(e) => setStep(e.target.value)}
          />
        </label>
      </div>

      <div>
        <button onClick={handleIncrement}>Increment</button>

        {/* Disable button when count is 0 */}
        <button onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>

        <button onClick={handleReset}>Reset</button>
      </div>

      <hr />

      <h2>History</h2>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Challenge;
