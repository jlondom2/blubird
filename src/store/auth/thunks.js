import blubirdApi from "../../api/blubirdApi";
import { onLogin, checking, onLogout, clearErrorMessage } from "./authSlice";

export const startLogin = (data) => {
  return async (dispatch) => {
    console.log("Login Started", data);
    dispatch(checking());

    const { email } = data;
    const login = email;
    const password = "123456";

    try {
      const { data } = await blubirdApi.post("/users/login", {
        login,
        password,
      });

      localStorage.setItem("token", data["user-token"]);

      dispatch(onLogin(data));
    } catch (error) {
      const errorMessage = error.response.data.message;

      dispatch(onLogout(errorMessage));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };
};

export const validateLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const resp = await blubirdApi.get(`/users/isvalidusertoken/${token}`);

      console.log("logged?", resp.data);

      if (resp.data) return dispatch(onLogin());
    } catch (error) {
      localStorage.clear();
      console.log(error);
      dispatch(onLogout());
    }
  };
};
