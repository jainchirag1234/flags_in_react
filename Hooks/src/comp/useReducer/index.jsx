import { useReducer } from "react";
// import { useState } from "react";

export const ReducerComp = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };
  const reducer = (state, action) => {
    console.log(state, action);
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //   return (state = 0);
    // }
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "RESET":
        return { ...state, count: 0 };

      default:
        return state;
    }
  };
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(useReducer(reducer, 0));

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};
