import React, { useReducer, useState } from "react";

const initValue = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "subtract":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
};

const NewCounter = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initValue);

  //   const addNum = () => {
  //     return setCount((prevCount) => prevCount + 1);
  //   };
  //   const removeNum = () => {
  //     return setCount((prevCount) => prevCount - 1);
  //   };
  //   const reset = () => {
  //     return setCount(0);
  //   };

  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <h1>Counter</h1>
      <h3>{state.count}</h3>

      <div className="d-flex">
        <button
          className="btn btn-primary me-3"
          onClick={() => dispatch({ type: "add" })}
        >
          Add
        </button>

        <button
          className="btn btn-primary me-3"
          onClick={() => dispatch({ type: "subtract" })}
        >
          subtract
        </button>

        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "reset" })}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default NewCounter;
