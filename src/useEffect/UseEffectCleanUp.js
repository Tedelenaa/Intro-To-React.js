import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkSize = () => {
    setWidth(window.innerWidth);
    console.log(setWidth(window.innerWidth));
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    //cleanup function
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <div>
      <h1>UseEffectCleanUp Eg</h1>
      <h3>{width}</h3>
      <h3>{height}</h3>
    </div>
  );
};

export default UseEffectCleanUp;
