import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import signupSlice from "./auth/signupSlice";
import signUpModalsSlice from "./ui/signUpModalsSlice";
import togglerSlice from "./ui/togglerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    signup: signupSlice.reducer,
    modal: signUpModalsSlice.reducer,
    toggler: togglerSlice.reducer,
  },
});
