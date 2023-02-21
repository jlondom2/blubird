import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    formFields: [],
  },
  reducers: {
    addFields: (state, { payload }) => {
      state.formFields.push(payload);
    },
  },
});

export const { addFields } = signupSlice.actions;
export default signupSlice;
