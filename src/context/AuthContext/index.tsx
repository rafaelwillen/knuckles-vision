import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../api/user";
import { User, UserType } from "../../models/User";
import { RoutesEnum } from "../../routes/RoutesEnum";
import { getUserOnStorage, saveUserOnStorage } from "../../utils/LocalStorage";
import { AuthContextType, CreateUser, SignInFunction } from "./types";

type UserAuth = Pick<User, "username" | "type">;

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const DEFAULT_USER: UserAuth = {
    type: UserType.GUEST,
    username: "",
  };

  const [user, setUser] = useState<UserAuth>(DEFAULT_USER);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userFromStorage = getUserOnStorage();
    if (userFromStorage) {
      setUser(userFromStorage);
    } else {
      setUser(DEFAULT_USER);
    }
    setLoading(false);
  }, []);

  const signIn: SignInFunction = async ({ password, username }) => {
    setLoading(true);
    try {
      const user = await UserService.loginUser(username, password);
      if (user) {
        saveUserOnStorage(user);
        setUser(user);
        setLoading(false);
        navigate(RoutesEnum.Account);
      }
    } catch (error) {
      console.error("Erro no login");
      console.error(error);
      setLoading(false);
    }
  };

  const signUp: CreateUser = async ({ password, type, username }) => {
    setLoading(true);
    try {
      await UserService.createUser({
        password,
        username,
        type,
      });
      setLoading(false);
    } catch (error) {
      console.error("Erro no cadastro");
      console.error(error);
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser(DEFAULT_USER);
    saveUserOnStorage(DEFAULT_USER);
  };

  const providerValue: AuthContextType = {
    user,
    createUser: signUp,
    isLoading,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
