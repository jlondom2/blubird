import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    state: "non-authenticated", //not-authenticated
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    checking: (state, action) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.state = "authenticated";
      state.user = payload;

      console.log(payload);

      state.errorMessage = undefined;
    },

    onLogout: (state, { payload }) => {
      state.state = "not-authenticated";
      state.user = payload;
      localStorage.clear();
      state.errorMessage = payload;
    },

    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { onLogin, checking, onLogout, clearErrorMessage } =
  authSlice.actions;
export default authSlice;
