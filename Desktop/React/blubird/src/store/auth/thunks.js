import { redirect, useNavigate } from "react-router-dom";
import blubirdApi from "../../api/blubirdApi";
import {
  onLogin,
  checking,
  onLogout,
  onSucessRegister,
  clearErrorMessage,
  clearChecking,
} from "./authSlice";
import { clearFields } from "./signupSlice";

export const startLogin = (data) => {
  return async (dispatch) => {
    console.log("Login Started", data);
    dispatch(checking());

    const { email } = data;

    const login = email;
    const { password } = data;

    try {
      const { data } = await blubirdApi.post("/users/login", {
        login,
        password,
      });

      localStorage.setItem("token", data["user-token"]);

      dispatch(onLogin(data));
    } catch (error) {
      console.log("there is an error!");
      console.log(error);
      const errorMessage = error.response.data.message;

      dispatch(onLogout(errorMessage));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };
};

export const startRegister = () => {
  return async (dispatch, getState) => {
    dispatch(checking());
    const { formFields } = getState().signup;

    try {
      const data = await blubirdApi.post("/users/register", {
        email: formFields[0],
        password: formFields[2],
        name: formFields[1],
      });

      /*  localStorage.setItem("token", data["user-token"]); */
      dispatch(onSucessRegister());
    } catch (error) {
      const errorMessage = error.response.data.message;

      console.log(errorMessage);

      dispatch(clearFields());

      dispatch(onLogout(errorMessage));
    }
  };
};

export const validateLogin = () => {
  return async (dispatch) => {
    dispatch(checking());
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const resp = await blubirdApi.get(`/users/isvalidusertoken/${token}`);

      console.log("logged?", resp.data);

      dispatch(clearChecking());

      if (!resp.data) return dispatch(onLogout());
    } catch (error) {
      console.log(error);
      dispatch(onLogout());
    }
  };
};
