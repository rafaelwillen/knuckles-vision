import React from "react";
import PostedMusic from "../../components/Account/PostedMusic";
import PostedVideos from "../../components/Account/PostedVideos";
import UserDetails from "../../components/Account/UserDetails";
import UserGroups from "../../components/Account/UserGroups";

const Account = () => {
  return (
    <section className="flex-1 flex flex-col items-center pt-16 px-10">
      <h2>Detalhes da Conta</h2>
      <div className="flex w-full min-h-[380px] mt-10 gap-4">
        <UserDetails />
        <UserGroups />
      </div>
      <hr className="my-10 border-dark-600 h-1 w-full" />
      <div className="flex w-full min-h-[450px] gap-4">
        <PostedVideos />
        <PostedMusic />
      </div>
    </section>
  );
};

export default Account;
