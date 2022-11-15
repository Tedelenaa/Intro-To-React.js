import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [value, setValue] = useState(0);

  //   useEffect(() => {
  //     //   document.title = `${value} New Messages`;

  //     if (value >= 1) {
  //       document.title = `${value} New Messages`;
  //     }
  //   });

  // useEffect takes in a second parameter (an empty array) that prevents it from rerendering
  //   useEffect(() => {
  //     document.title = `${value} New Messages`;
  //   }, []);

  //   useEffect(() => {
  //     document.title = `${value} New Messages`;
  //   }, [value]);

  useEffect(() => {
    console.log("effect");
  }, []);

  console.log("outside effect");

  return (
    <div>
      <h1>UseEffect Eg 1</h1>
      <h2>{value}</h2>
      <button className="btn btn-primary" onClick={() => setValue(value + 1)}>
        Resize
      </button>
    </div>
  );
};

export default UseEffect1;
