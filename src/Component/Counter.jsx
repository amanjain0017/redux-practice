import React from "react";

import { useDispatch } from "react-redux";
import {
  countIncrement,
  countDecrement,
  countIncrementBy5,
  resetCounter,
} from "../Redux/Slices/States/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(countDecrement())}>-</button>
      <button onClick={() => dispatch(countIncrement())}>+</button>
      <button onClick={() => dispatch(countIncrementBy5(5))}>+5</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default Counter;
