import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMainUser,
  setUsers,
  setIsActive,
} from "../Redux/Slices/States/userSlice";

const Form = () => {
  const users = useSelector((state) => state.user.users);
  const isActive = useSelector((state) => state.user.isActive);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMainUser(user));
    dispatch(setUsers(user));
    dispatch(setIsActive());

    console.log("Current user : ", user);
    console.log("Total users : ", [...users, user]); //redux operation are async, it will show previous state of users

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {isActive ? <h1>Form Submitted</h1> : <h1>Form</h1>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name..."
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Email..."
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password..."
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
