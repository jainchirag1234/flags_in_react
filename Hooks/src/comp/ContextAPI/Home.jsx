// import { useContext } from "react";
// import { BioContext } from ".";

// export const Home = () => {
//    const myName= useContext(BioContext)
//   <h1>Hello Context API. My name is {myName}</h1>;
// };
import { useBioContext } from ".";

export const Home = () => {
  const { myName, myAge } = useBioContext();

  return (
    <h1>
      Hello Context API. My name is {myName}. I am {myAge} yrs old.
    </h1>
  );
};

// custom Hooks
