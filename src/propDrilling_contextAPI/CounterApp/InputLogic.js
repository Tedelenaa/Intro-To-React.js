import React, { useContext } from "react";
import { DisplayContext } from "./DisplayContext";

// const InputLogic = ({ user, setUser }) => {
const InputLogic = () => {
  const { user, setUser } = useContext(DisplayContext);
  return (
    <div>
      <h3>{user}</h3>
      <input
        type="text"
        className="mb-3"
        name="username"
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
};

export default InputLogic;
