import React from "react";

const CreateGroup = () => {
  return (
    <section className="my-10 mx-auto w-2/3 ">
      <h2 className="text-center text-3xl">Criar Grupo</h2>
      <form>
        <div className="flex flex-col mt-10 gap-2">
          <label className="text-base font-light" htmlFor="group-name">
            Nome do Grupo
          </label>
          <input
            type="text"
            id="group-name"
            placeholder="Escolha um nome para o seu grupo"
            className="bg-transparent border border-gray-400 py-2 px-2 rounded-sm text-sm"
          />
        </div>
        <hr className="my-10 border-dark-600" />
        <div className="grid grid-cols-2 grid-rows-[min-content_1fr] gap-6  ">
          <h3 className="col-span-2  justify-self-center text-lg">
            Escolha os Utilizadores
          </h3>
          <div>
            <h4 className="text-center">Utilizadores Selecionados</h4>
            <div className="mt-2 rounded-md overflow-y-auto h-72 bg-dark-600"></div>
          </div>
          <div>
            <h4 className="text-center">Utilizadores Disponíveis</h4>
            <div className="mt-2 rounded-md overflow-y-auto h-72 bg-dark-600"></div>
          </div>
        </div>
        <input
          type="submit"
          value="Criar Grupo"
          className="border-gray-400 border w-1/2 mx-auto my-5 py-2 flex items-center justify-center gap-6 hover:bg-white hover:text-black transition self-center"
        />
      </form>
    </section>
  );
};

export default CreateGroup;
