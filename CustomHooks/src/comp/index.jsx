import { createContext, useContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Chirag";
  const myAge = 30;

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBioContext = () => {
  const context = useContext(BioContext);
  if (!context) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};
