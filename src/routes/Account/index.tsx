import React from "react";
import UserDetails from "../../components/UserDetails";
import UserGroups from "../../components/UserGroups";

const Account = () => {
  return (
    <section className="flex-1 flex flex-col items-center pt-16 px-10">
      <h2>Detalhes da Conta</h2>
      <div className="flex w-full min-h-[380px] mt-10 gap-4">
        <UserDetails />
        <UserGroups />
      </div>
    </section>
  );
};

export default Account;
