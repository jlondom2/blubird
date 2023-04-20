import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import authSlice from "./auth/authSlice";
import signupSlice from "./auth/signupSlice";
import signUpModalsSlice from "./ui/signUpModalsSlice";
import signUpStepsSlice from "./ui/signUpSteps";
import togglerSlice from "./ui/togglerSlice";
import tokenomicsSlice from "./tokenomics/tokenomicsSlice";
import captableSlice from "./captable/captableSlice";
import addprojectSlice from "./addProject/addProjectSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["signup", "modal", "tokenomics", "captable", "addProject"],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  signup: signupSlice.reducer,
  tokenomics: tokenomicsSlice.reducer,
  modal: signUpModalsSlice.reducer,
  toggler: togglerSlice.reducer,
  captable: captableSlice.reducer,
  addProject: addprojectSlice.reducer,
  signupSteps: signUpStepsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
