import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  return <h1>{count}</h1>;
};

export default User;
