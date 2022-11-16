import React, { useState } from "react";
import {
  CounterUseRedApp,
  DataUseRedApp,
} from "../useReducer/CounterUseRedApp";

export const ConditionalRend = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      {/* <button className="btn btn-success" onClick={() => setClick(!click)}>
        toggle
      </button> */}

      <button className="btn btn-success" onClick={() => setClick(!click)}>
        {click ? "counterApp" : "userDataApp"}
      </button>

      {/* {click && <CounterUseRedApp />} */}
      {click ? <CounterUseRedApp /> : <DataUseRedApp />}
      {/* {click ? <CounterUseRedApp /> : null} */}
    </div>
  );
};

export const MultipleRet = () => {
  //   const [Loading, setLoading] = useState(true);
  const [Loading, setLoading] = useState(false);

  if (Loading) {
    return <h3>Loading....</h3>;
  }
  return (
    <div>
      <h1>Multiple Returns</h1>
    </div>
  );
};
