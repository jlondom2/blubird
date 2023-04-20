import { createSlice } from "@reduxjs/toolkit";

export const addprojectSlice = createSlice({
  name: "addproject",
  initialState: {
    showModal: false,
  },
  reducers: {
    showModal: (state /* action */) => {
      state.showModal = true;
    },
    closeModal: (state /* action */) => {
      state.showModal = false;
    },
  },
});

export const { showModal, closeModal } = addprojectSlice.actions;
export default addprojectSlice;
