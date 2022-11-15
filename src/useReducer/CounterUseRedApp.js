import { useReducer, useState } from "react";

const initValues = {
  count: 0,
  user: "",
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    case "userInput":
      return { ...state, user: action.payload };

    default:
      throw new Error("action does not exist");
  }
};

// counter app usestate
const CounterUseRedApp = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initValues);

  //   const addNum = () => {
  //     setCount((prevCount) => {
  //       return prevCount + 1;
  //     });
  //   };

  //   const reduceNum = () => {
  //     setCount((prevCount) => {
  //       return prevCount - 1;
  //     });
  //   };

  //   const reset = () => {
  //     return setCount(0);
  //   };

  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <h1>Counter</h1>
      <h3>{state.count}</h3>
      <div className="d-flex">
        {/* <button className="btn btn-primary me-3" onClick={addNum}>
          Add
        </button> */}
        <button
          className="btn btn-primary me-3"
          onClick={() => dispatch({ type: "increment" })}
        >
          Add
        </button>
        {/* <button className="btn btn-primary me-3" onClick={reduceNum}>
          Remove
        </button> */}
        <button
          className="btn btn-primary me-3"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Reduce
        </button>
        {/* <button className="btn btn-primary" onClick={reset}>
          Reset
        </button> */}
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>

      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: "userInput", payload: e.target.value })
        }
      />

      {/* <p>{state.user}</p> */}
    </div>
  );
};

export default CounterUseRedApp;
