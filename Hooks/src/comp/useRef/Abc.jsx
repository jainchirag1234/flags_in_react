//   console.log(document.getElementById("username"));

import { useRef } from "react";

//   console.log(document.getElementById("password"));
export const Abc = () => {
  //   const username = document.getElementById("username");
  //   const password = document.getElementById("password");

  const username = useRef(null);
  const password = useRef(null);
  //   console.log(username);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="password" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};
