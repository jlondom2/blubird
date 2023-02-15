import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    state: "authenticated", //not-authenticated
  },
  reducers: {
    login: (state /* action */) => {
      state.state = "authenticated";
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice;
