import { Navigate } from "react-router-dom";
export const Protected = ({ isSignedIn, children }) => {
  if (isSignedIn != "authenticated") {
    return (
      <Navigate
        to='/login'
        replace
      />
    );
  }

  return children;
};
export default Protected;
