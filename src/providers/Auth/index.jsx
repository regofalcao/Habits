import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useUser } from "../User";

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export const AuthProvider = ({ children }) => {
  const { setUser } = useUser();
  const [token, setToken] = useState(
    localStorage.getItem("@kenzieHabits:token") || ""
  );

  const login = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access: token } = response.data;
        const decodedToken = jwt_decode(token);
        const { user_id } = decodedToken;

        const user = {
          id: user_id,
          username: data.username,
        };

        localStorage.setItem("@kenzieHabits:token", token);
        localStorage.setItem("@kenzieHabits:user", user);
        setToken(token);
        setUser(user);
        toast.success("Você está logado");
      })
      .catch((err) => toast.error("Usuário e/ou senha incorretos"));
  };

  const logout = () => {
    localStorage.removeItem("@kenzieHabits:token");
    localStorage.removeItem("@kenzieHabits:user");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
