import React from "react";

const UserDetails = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 justify-center h-full">
      <p className="text-xl font-bold">
        Username: <span className="font-normal">Rafaelwillen</span>
      </p>
      <p className="text-xl font-bold">
        Tipo: <span className="font-normal">Normal</span>
      </p>
      <button className="bg-red-600 w-2/3 mx-auto py-2 rounded-md hover:bg-opacity-80">
        Sair
      </button>
    </div>
  );
};

export default UserDetails;
