import { createSlice } from "@reduxjs/toolkit";

export const tokenomicsSlice = createSlice({
  name: "tokenomics",
  initialState: {
    setupDone: false,
  },
  reducers: {
    increment: (state /* action */) => {
      console.log("");
    },
  },
});

export const { increment } = tokenomicsSlice.actions;
export default tokenomicsSlice;
