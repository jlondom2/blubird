import { createSlice } from "@reduxjs/toolkit";

export const signUpStepsSlice = createSlice({
  name: "signUpSteps",
  initialState: {
    showStep1: true,
    showStep2: false,
  },
  reducers: {
    handleShow1: (state, action) => {
      state.showStep1 = true;
    },

    handleShow2: (state, action) => {
      state.showStep1 = false;
      state.showStep2 = true;
    },
  },
});

export const { handleShow1, handleShow2 } = signUpStepsSlice.actions;
export default signUpStepsSlice;
