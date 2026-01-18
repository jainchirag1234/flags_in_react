import { useId, useRef } from "react";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <BeforeReact19Input label="username" ref={username} />
      <BeforeReact19Input label="password" ref={password} />
      <button>Submit</button>
    </form>
  );
};
//I need to create BeforeReact19Input
// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div>
//       <label htmlFor={id}>{props.label}</label>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });
// afterReactv19
const BeforeReact19Input = ({ label, ref }) => {
  const id = useId();
  //   console.log(props);

  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <input htmlFor={id} type="text" ref={ref} />
    </div>
  );
};

// import { useId } from "react";

// const BeforeReact19Input = ({ label, ref }) => {
//   const id = useId();

//   return (
//     <div>
//       <label htmlFor={id}>{label}</label>
//       <input id={id} type="text" ref={ref} />
//     </div>
//   );
// };

export default BeforeReact19Input;
