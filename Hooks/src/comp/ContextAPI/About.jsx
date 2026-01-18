// import { useContext } from "react";

import { BioContext } from ".";
import { useContext } from "react";

export const About = () => {
  // const { myName, myAge } = useBioContext();
  const { myName, myAge } = useContext(BioContext);
  //   const { myName, myAge } = use(BioContext);
  //   const newHook = true;
  //   let myName, myAge;
  //   if (newHook) {
  //     ({ myName, myAge } = use(BioContext));
  //   }

  return (
    <h1>
      Hello Context API(About). My name is {myName}. I am {myAge} yrs old.
    </h1>
  );
};
