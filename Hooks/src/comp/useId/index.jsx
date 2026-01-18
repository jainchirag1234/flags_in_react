import { useId } from "react";

export const UseId = () => {
  //   const usernameId = useId();
  //   const passwordId = useId();
  //   const emailId = useId();
  //   return (
  //     <form action="">
  //       <div>
  //         <label htmlFor={usernameId}>Username</label>
  //         <input type="text" name="username" id={usernameId} />
  //       </div>
  //       <div>
  //         <label htmlFor={passwordId}>Username</label>
  //         <input type="text" name="password" id={passwordId} />
  //       </div>
  //       <div>
  //         <label htmlFor={emailId}>Email</label>
  //         <input type="email" name="emailid" id={emailId} />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  const id = useId();

  return (
    <form action="">
      <div>
        <label htmlFor={id + "usernameId"}>Username</label>
        <input type="text" name={id + "username"} id={id + "usernameId"} />
      </div>
      <div>
        <label htmlFor={id + "passwordId"}>Username</label>
        <input type="text" name="password" id={id + "passwordId"} />
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email</label>
        <input type="email" name="emailid" id={id + "emailId"} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
