import { createSlice } from "@reduxjs/toolkit";

export const signUpModalsSlice = createSlice({
  name: "signUpModals",
  initialState: {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    showModal5: false,
    showModal6: false,
  },
  reducers: {
    handleShow1: (state, action) => {
      state.showModal1 = true;
    },

    handleShow2: (state, action) => {
      state.showModal1 = false;
      state.showModal2 = true;
    },

    handleShow3: (state, action) => {
      state.showModal1 = false;
      state.showModal2 = false;
      state.showModal3 = true;
    },

    handleShow4: (state, action) => {
      state.showModal1 = false;
      state.showModal2 = false;
      state.showModal3 = false;
      state.showModal4 = true;
    },

    handleShow5: (state, action) => {
      state.showModal1 = false;
      state.showModal2 = false;
      state.showModal3 = false;
      state.showModal4 = false;
      state.showModal5 = true;
    },

    handleShow6: (state, action) => {
      state.showModal1 = false;
      state.showModal2 = false;
      state.showModal3 = false;
      state.showModal4 = false;
      state.showModal5 = false;
      state.showModal6 = true;
    },

    handleClose: (state, action) => {
      state.showModal1 = false;
      state.showModal2 = false;
      state.showModal3 = false;
      state.showModal4 = false;
      state.showModal5 = false;
      state.showModal6 = false;
    },
  },
});

export const {
  handleShow1,
  handleShow2,
  handleShow3,
  handleShow4,
  handleShow5,
  handleShow6,
  handleClose,
} = signUpModalsSlice.actions;
export default signUpModalsSlice;
