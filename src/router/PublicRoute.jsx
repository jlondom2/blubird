import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export default function PublicRoute({ children }) {
  const { logged } = useContext(AuthContext);
  return logged ? <Navigate to='/dashboard'></Navigate> : children;
}
