import React, { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ValidationError } from "yup";
import { RoutesEnum } from "../RoutesEnum";
import { AuthValidationSchema } from "../../utils/validation/AuthValidator";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useAuth } from "../../context/AuthContext";
import { UserType } from "../../models/User";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { isLoading, signIn, user } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === RoutesEnum.Login && user.type !== UserType.GUEST)
      navigate(RoutesEnum.Home);
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");
    try {
      await AuthValidationSchema.validate({
        username,
        password,
      });
      await signIn({ username, password });
    } catch (error) {
      const validationError = error as ValidationError;
      if (validationError.path == "username")
        setUsernameError(validationError.message);
      if (validationError.path == "password")
        setPasswordError(validationError.message);
    }
  };

  return (
    <section className="flex-1 flex items-center max-h-screen">
      {isLoading && <LoadingSpinner />}
      <form
        className="bg-dark-700 mx-auto p-8 rounded-lg flex flex-col gap-6 w-5/12"
        onSubmit={onSubmit}
      >
        <h2 className="text-center text-xl mb-2">Login</h2>
        <div className="flex  flex-col ">
          <label className="text-base font-light" htmlFor="username">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-transparent border border-gray-400 py-2 px-2 rounded-sm "
            type="text"
            id="username"
          />
          {usernameError && (
            <span className="text-red-600 text-sm mt-1">{usernameError}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-base font-light" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border border-gray-400 py-2 px-2 rounded-sm"
            type="password"
            id="password"
          />
          {passwordError && (
            <span className="text-red-600 text-sm mt-1">{passwordError}</span>
          )}
        </div>
        <button
          type="submit"
          className="border-gray-400 border w-1/2 py-2 flex items-center justify-center gap-6 hover:bg-white hover:text-black transition self-center"
        >
          Login
        </button>
        <p className="self-center text-sm">
          N??o possui conta?{" "}
          <Link to={RoutesEnum.SignUp} className="underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
