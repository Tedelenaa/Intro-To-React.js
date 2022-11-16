import React, { useContext } from "react";
import { DisplayContext } from "./DisplayContext";

// const DisplayUser = (prop) => {
const DisplayUser = () => {
  const { user } = useContext(DisplayContext);
  return (
    <div>
      <p>{user}</p>
    </div>
  );
};

export default DisplayUser;
