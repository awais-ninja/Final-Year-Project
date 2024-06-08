import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuthContext = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};

export { useAuthContext };
