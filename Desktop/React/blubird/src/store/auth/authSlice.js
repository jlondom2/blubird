import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    state: "non-authenticated", //not-authenticated
    user: {},
    errorMessage: undefined,
    successMessage: undefined,
  },
  reducers: {
    checking: (state, action) => {
      state.state = "checking";

      state.errorMessage = undefined;
    },

    clearChecking: (state, action) => {
      state.state = "authenticated";

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
      state.successMessage = undefined;
    },

    clearErrorMessage: (state) => {
      state.errorMessage = null;
      state.successMessage = null;
    },

    onSucessRegister: (state, payload) => {
      state.successMessage = "Account Created! Please login below!";
      state.state = "not-authenticated";
    },
  },
});

export const {
  onLogin,
  onloginTest,
  checking,
  onLogout,
  onSucessRegister,
  clearErrorMessage,
  clearChecking,
} = authSlice.actions;
export default authSlice;
