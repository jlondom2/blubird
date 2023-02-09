import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState, init);

  const login = (email = "") => {
    const user = {
      id: email,
      email: email,
    };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };
  return (
    <>
      <AuthContext.Provider value={{ ...state, login: login, logout: logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
