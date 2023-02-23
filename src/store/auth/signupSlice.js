import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    formFields: [],
  },
  reducers: {
    addFields: (state, { payload }) => {
      console.log("Payload Is:", payload);

      state.formFields.push(payload);
    },

    clearFields: (state, { payload }) => {
      console.log("clearing Fields:");

      state.formFields = [];
    },
  },
});

export const { addFields, clearFields } = signupSlice.actions;
export default signupSlice;
