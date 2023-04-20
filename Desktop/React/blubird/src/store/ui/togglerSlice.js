import { createSlice } from "@reduxjs/toolkit";

export const togglerSlice = createSlice({
  name: "toggler",
  initialState: {
    toggled: true,
  },
  reducers: {
    onToggle: (state, action) => {
      state.toggled = action.payload;
    },
  },
});

export const { onToggle } = togglerSlice.actions;
export default togglerSlice;
