// import "./App.css";
// // import Challenge from "./comp/Challenge";
// import { ReactUseEffect } from "./comp/useEffect";
// import { CleanUp } from "./comp/useEffect/CleanUp";
// import { HowNotToFetchApi } from "./comp/useEffect/HowNotToFetchApi";
// import { Challenge1 } from "./comp/useEffect/useEffectChallenge";
// import { UseId } from "./comp/useId";
// import { Abc } from "./comp/useRef/Abc";
// import { ForwardRefs } from "./comp/useRef/forwardRefs";
// import { BioProvider } from "./comp/ContextAPI";
// import { Home } from "./comp/ContextAPI/Home";
// import { About } from "./comp/ContextAPI/About";
// import { Services } from "./comp/ContextAPI/Services";
// import { DarkLight, ThemeProvider } from "./comp/ContextAPI/DarkLight";
// import { ReducerComp } from "./comp/useReducer";
// import { ReactMemo } from "./comp/Memo/ReactMemo";
// // import { Counter } from "./comp/Counter";

// function App() {
//   return (
//     <>
//       {/* <Counter /> */}
//       {/* <Challenge /> */}
//       {/* <ReactUseEffect /> */}
//       {/* <Challenge1 /> */}
//       {/* <CleanUp /> */}
//       {/* <HowNotToFetchApi /> */}
//       {/* <Abc /> */}
//       {/* <ForwardRefs /> */}
//       {/* <BeforeReact19Input /> */}
//       {/* <UseId /> */}
//       {/* <BioProvider>
//       <Home />
//         <About />
//         <Services />

//       </BioProvider> */}
//       {/* <ThemeProvider>
//         <DarkLight />
//       </ThemeProvider> */}
//       {/* <ReducerComp /> */}
//       <ReactMemo />
//     </>
//   );
// }

// export default App;
import { ReactMemo } from "./comp/Memo/ReactMemo";
import UseMemo from "react";
import MemoParentComponent from "./comp/Memo/UseMemo";
import UseCallback from "./comp/Memo/UseCallback";
function App() {
  return (
    <div>
      {/* <ReactMemo /> */}
      <UseCallback />
      {/* <MemoParentComponent /> */}
    </div>
  );
}

export default App;
