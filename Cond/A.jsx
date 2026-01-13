import React from "react";

const A = () => {
  const value = "Hey";
  return (
    <div>
      <p>{value}</p>
      <>The result is {1 + 2 + 3}</>
    </div>
  );
};

export default A;
