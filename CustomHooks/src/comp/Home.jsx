import { useBioContext } from "./ContextAPI";

export const Home = () => {
  const { myName, myAge } = useBioContext();
  return (
    <h1>
      Hello Context API(Home). My name is {myName}. I am {myAge} yrs old.
    </h1>
  );
};
