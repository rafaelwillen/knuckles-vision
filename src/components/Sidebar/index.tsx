import React from "react";
import {
  MdOutlineAdd,
  MdOutlineHome,
  MdPersonOutline,
  MdRadio,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes/RoutesEnum";
import MenuButton from "../Button/MenuButton";

const Sidebar = () => {
  const ICON_SIZE = 30;

  const location = useLocation();
  const navigate = useNavigate();

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
          isSelected={location.pathname == RoutesEnum.Home}
          icon={<MdOutlineHome size={ICON_SIZE} />}
          onClick={() => navigate(RoutesEnum.Home)}
          text="Início"
        />
        <MenuButton
          isSelected={location.pathname == RoutesEnum.Account}
          icon={<MdPersonOutline size={ICON_SIZE} />}
          text="Minha Conta"
        />
        <MenuButton
          isSelected={location.pathname == RoutesEnum.Radio}
          icon={<MdRadio size={ICON_SIZE} />}
          text="Rádio"
          onClick={() => navigate(RoutesEnum.Radio)}
        />
      </section>

      <section className="flex flex-col border-t-2 border-t-grey-700 py-7 px-6 gap-9">
        <div className="flex items-center">
          <span className="flex-1 text-xl">Meus Grupos</span>
          <MdOutlineAdd
            className="cursor-pointer"
            size={ICON_SIZE}
            onClick={() => navigate(RoutesEnum.CreateGroup)}
          />
        </div>
        <div className="flex flex-col gap-3 text-base"></div>
      </section>
    </aside>
  );
};

export default Sidebar;
