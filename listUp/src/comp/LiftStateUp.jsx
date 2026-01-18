import { useState } from "react";

export const LiftStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [currentName, setCurrentName] = useState("");

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;

    setHistory((prev) => [...prev, inputValue]);
    setCurrentName(inputValue); // 👈 submit ke baad hi show hoga
    setInputValue(""); // input clear
  };

  return (
    <>
      <h1>LiftState Up</h1>
      <InputComponent
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSubmit={handleSubmit}
      />

      <DisplayComponent currentName={currentName} />

      <HistoryComponent history={history} />
    </>
  );
};

const InputComponent = ({ inputValue, onInputChange, onSubmit }) => {
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={inputValue}
        className="form-control"
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
};

const DisplayComponent = ({ currentName }) => {
  return currentName ? <p>Last submitted name: {currentName}</p> : null;
};

const HistoryComponent = ({ history }) => {
  return (
    <>
      <h5>Input History</h5>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
