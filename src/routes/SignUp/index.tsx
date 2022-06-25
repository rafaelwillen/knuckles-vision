import React from "react";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../RoutesEnum";

const SignUp = () => {
  return (
    <section className="flex-1 flex items-center max-h-screen">
      <form className="bg-dark-700 mx-auto p-8 rounded-lg flex flex-col gap-6 w-5/12">
        <h2 className="text-center text-xl mb-2">Criar um utilizador</h2>
        <div className="flex  flex-col ">
          <label className="text-base font-light" htmlFor="username">
            Username
          </label>
          <input
            className="bg-transparent border border-gray-400 py-2 px-2 rounded-sm "
            type="text"
            id="username"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-base font-light" htmlFor="password">
            Password
          </label>
          <input
            className="bg-transparent border border-gray-400 py-2 px-2 rounded-sm"
            type="password"
            id="password"
          />
        </div>
        <button className="border-gray-400 border w-1/2 py-2 flex items-center justify-center gap-6 hover:bg-white hover:text-black transition self-center">
          Cadastrar-se
        </button>
        <p className="self-center text-sm">
          Já tem uma conta?{" "}
          <Link to={RoutesEnum.Login} className="underline">
            Faça o login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
