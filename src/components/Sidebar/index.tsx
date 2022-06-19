import React from "react";
import {
  MdOutlineHome,
  MdPersonOutline,
  MdFavoriteBorder,
  MdOutlineFolder,
  MdOutlineAdd,
} from "react-icons/md";
import MenuButton from "../Button/MenuButton";

const Sidebar = () => {
  const ICON_SIZE = 30;

  const fakeGroups = [
    "Group 1",
    "Super Group 1",
    "Super DUPER Group 1",
    "The first Group 1",
    "The 0s",
    "THE SUPER MEGA DUPER GROUP 1!",
    "MEMES",
    "F1",
  ];

  return (
    <aside
      className="w-1/5 min-h-screen"
      style={{
        background:
          "linear-gradient(0deg, #242424 88%, rgba(218, 0, 0, 0.77) 110%)",
      }}
    >
      <section className="flex justify-center items-center py-10 px-6 gap-8">
        <h1 className="font-normal text-xl text-white">Knuckles Vision</h1>
      </section>
      <section className="flex flex-col gap-4">
        <MenuButton
          isSelected
          icon={<MdOutlineHome size={ICON_SIZE} />}
          text="Início"
        />
        <MenuButton
          icon={<MdPersonOutline size={ICON_SIZE} />}
          text="Minha Conta"
        />
        <MenuButton
          icon={<MdFavoriteBorder size={ICON_SIZE} />}
          text="Favoritos"
        />
        <MenuButton
          icon={<MdOutlineFolder size={ICON_SIZE} />}
          text="Meu Conteúdo"
        />
      </section>

      <section className="flex flex-col border-t-2 border-t-grey-700 py-7 px-6 gap-9">
        <div className="flex items-center">
          <span className="flex-1 text-xl">Meus Grupos</span>
          <MdOutlineAdd className="cursor-pointer" size={ICON_SIZE} />
        </div>
        <div className="flex flex-col gap-3 text-base">
          {fakeGroups.map((group, index) => (
            <span key={index} className="hover:underline cursor-pointer">
              {group}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
