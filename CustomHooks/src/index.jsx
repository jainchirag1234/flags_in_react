// import { createContext } from "react";
// // 1 step
// // eslint-disable-next-line react-refresh/only-export-components
// export const BioContext = createContext();
// // 2 step
// export const BioProvider = ({ children }) => {
//   const myName = "vinod";
//   console.log(children);

//   return <BioContext.Provider value={myName}>{children}</BioContext.Provider>;
// };
import { createContext } from "react";

// Step 1
// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

// Step 2
export const BioProvider = ({ children }) => {
  const myName = "Chirag";
  const myAge = 30;
  console.log(children);

  return (
    <BioContext.Provider value={{ myName: myName, myAge: myAge }}>
      {children}
    </BioContext.Provider>
  );
};
