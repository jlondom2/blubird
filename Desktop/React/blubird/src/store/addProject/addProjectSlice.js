import { createSlice } from "@reduxjs/toolkit";

export const addprojectSlice = createSlice({
  name: "addproject",
  initialState: {
    modal1: false,
    modal2: false,
  },
  reducers: {
    showModal1: (state /* action */) => {
      state.modal1 = true;
    },
    showModal2: (state /* action */) => {
      state.modal1 = false;
      state.modal2 = true;
    },
    closeModal1: (state /* action */) => {
      state.modal1 = false;
    },
    closeModal2: (state /* action */) => {
      state.modal2 = false;
    },
  },
});

export const { showModal1, showModal2, closeModal1, closeModal2 } =
  addprojectSlice.actions;
export default addprojectSlice;
