import React, { useContext } from "react";
import { DisplayContext } from "./DisplayContext";

// const DisplayCounter = ({ count }) => {
const DisplayCounter = () => {
  const { count } = useContext(DisplayContext);

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default DisplayCounter;
