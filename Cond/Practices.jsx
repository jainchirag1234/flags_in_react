import React from "react";

export const Practices = () => {
  const students = [];
  console.log(Boolean(students.length));
  console.log(students.length);

  return (
    <div>
      <h1>Interview</h1>
      <>
        {/* 1st */}
        <p>{Boolean(!students.length) && "No students found"}</p>
        {/* <p>{students.length === 0 && "No students found"}</p> */}

        <p>Number of Students:{students.length}</p>
      </>
    </div>
  );
};

export default Practices;
