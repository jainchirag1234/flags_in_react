import "./App.css";
import { BioProvider } from "./comp/ContextAPI";
import { Home } from "./comp/ContextAPI/Home";
import { About } from "./comp/ContextAPI/About";
import { Services } from "./comp/ContextAPI/Services";

function App() {
  return (
    <>
      <BioProvider>
        <Home />
        <About />
        <Services />
      </BioProvider>
    </>
  );
}

export default App;
