import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/States/counterSlice";
import userReducer from "../Slices/States/userSlice";
import { postApi } from "../Slices/API/postApiSlice";

export const myStore = configureStore({
  reducer: {
    //state slices
    counter: counterReducer,
    user: userReducer,

    //api slices
    [postApi.reducerPath]: postApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
