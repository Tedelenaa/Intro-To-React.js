import { useState } from "react";
import { DisplayContext } from "./DisplayContext";
import DisplayCounter from "./DisplayCounter";
import DisplayUser from "./DisplayUser";
import InputLogic from "./InputLogic";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  const addNum = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const reduceNum = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  const reset = () => {
    return setCount(0);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <h1>Counter</h1>
      {/* <h3>{count}</h3> */}

      {/* <DisplayCounter count={count} /> */}
      <div className="d-flex mb-5">
        <button className="btn btn-primary me-3" onClick={addNum}>
          Add
        </button>

        <button className="btn btn-primary me-3" onClick={reduceNum}>
          Remove
        </button>

        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
      {/* <input
        type="text"
        className="mb-3"
        name="username"
        onChange={(e) => setUser(e.target.value)}
      /> */}

      {/* <InputLogic setUser={setUser} user={user} /> */}
      {/* <p>{user}</p> */}
      {/* <DisplayUser user={user} /> */}

      <DisplayContext.Provider
        // value={{ count: count, user: user, setUser: setUser }}
        value={{ count, user, setUser }}
      >
        <DisplayCounter />
        <InputLogic />
        <DisplayUser />
      </DisplayContext.Provider>
    </div>
  );
};
