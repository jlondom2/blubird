import { createSlice } from "@reduxjs/toolkit";

export const tokenomicsSlice = createSlice({
  name: "tokenomics",
  initialState: {
    setupDone: true,
    firstTimeUser: true,
    formPage: 0,
    formFields: [],
  },
  reducers: {
    setFormFields: (state, { payload }) => {
      state.formFields.push(payload);
    },

    setFormPage: (state) => {
      state.formPage += 1;
    },

    saveFormtoBackend: (state) => {
      console.log("save form! conenect with backend first");

      state.setupDone = true;
    },
  },
});

export const { setFormFields, setFormPage, saveFormtoBackend } =
  tokenomicsSlice.actions;
export default tokenomicsSlice;
