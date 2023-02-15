import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import togglerSlice from "./ui/togglerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,

    toggler: togglerSlice.reducer,
  },
});
