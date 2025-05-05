import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countIncrement: (state) => {
      state.count++;
    },
    countDecrement: (state) => {
      state.count--;
    },
    countIncrementBy5: (state, action) => {
      state.count = state.count + action.payload;
    },
    resetCounter: (state) => {
      state.count = initialState.count;
    },
  },
});

export const {
  countIncrement,
  countDecrement,
  countIncrementBy5,
  resetCounter,
} = counterSlice.actions;
export default counterSlice.reducer;
