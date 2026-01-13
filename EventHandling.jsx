import React from "react";
import "./Ev.css";

const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event); // SyntheticEvent
    console.log(event.target); // Button element
    console.log(event.type); // "click"

    alert("Hey I am onClick Event");
  };
  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user},Welcome`);
  };
  return (
    <div className="container">
      <h2>React Event Handling Example</h2>
      {/* ?Function Components with Named Functions */}
      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      <br />
      <button onClick={() => handleButtonClick(event)}>Click Me 2</button>
      <br />
      {/* Inline Event Handlers  */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      <br />
      {/* Function Components with Inline Arrow Functions */}
      <button onClick={() => alert("Hey I am inline event function")}>
        Inline Arr fun
      </button>
      <br />
      <br />
      {/* Passing Arguments to Event Handlers */}
      {/* <button onClick={handleWelcomeUser("vinod")}>click Me</button> */}
      <button onClick={() => handleWelcomeUser("chirag")}>click Me</button>
      <button onClick={() => handleWelcomeUser("ram")}>click Me</button>
    </div>
  );
};

export default EventHandling;
