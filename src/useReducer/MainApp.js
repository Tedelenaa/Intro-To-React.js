import React from "react";
import {
  ConditionalRend,
  MultipleRet,
} from "../conditionalRendering/ConditionalRend";
import { CounterApp } from "../propDrilling_contextAPI/CounterApp/CounterApp";
import {
  ConditionalR,
  CounterUseRedApp,
  DataUseRedApp,
} from "./CounterUseRedApp";
// import {DataUseRedApp} from './CounterUseRedApp'
import NewCounter from "./NewCounter";

const MainApp = () => {
  return (
    <div>
      {/* <CounterUseRedApp />
      <DataUseRedApp /> */}
      {/* <ConditionalR /> */}
      {/* <NewCounter /> */}
      {/* <ConditionalRend /> */}
      {/* <MultipleRet /> */}
      <CounterApp />
    </div>
  );
};

export default MainApp;
