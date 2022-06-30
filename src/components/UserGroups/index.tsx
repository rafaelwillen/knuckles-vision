import React from "react";

const UserGroups = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 h-full">
      <h3 className="text-center text-lg">Grupos</h3>
      <div className="flex justify-around">
        <div className="flex gap-2 items-center">
          <input type="radio" id="noAdmin" name="isAdmin" value="noAdmin" />
          <label htmlFor="noAdmin">Membro normal</label>
        </div>
        <div className="flex gap-2 items-center">
          <input type="radio" id="Admin" name="isAdmin" value="Admin" />
          <label htmlFor="Admin">Administrador</label>
        </div>
      </div>
      <div className="flex-1 bg-dark-600 rounded-md overflow-y-auto max-h-72"></div>
    </div>
  );
};

export default UserGroups;
