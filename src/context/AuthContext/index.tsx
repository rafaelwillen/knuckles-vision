import React, { createContext, useContext, useEffect, useState } from "react";
import User, { UserType } from "../../models/User";
import { getUserOnStorage, saveUserOnStorage } from "../../utils/LocalStorage";
import { AuthContextType, CreateUser, SignInFunction } from "./types";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {
  const DEFAULT_USER: User = {
    userType: UserType.GUEST,
    username: "",
    password: "",
  };

  const [user, setUser] = useState<User>(DEFAULT_USER);
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
    setTimeout(() => {
      const user = new User(username, password, UserType.NORMAL);
      saveUserOnStorage(user);
      setUser(user);
      setLoading(false);
    }, 2000);
  };

  const signUp: CreateUser = async ({ password, userType, username }) => {
    setLoading(true);
    setTimeout(() => {
      const user = new User(username, password, userType);
      signIn({
        username,
        password,
      });
      console.log(user);
    }, 2000);
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
