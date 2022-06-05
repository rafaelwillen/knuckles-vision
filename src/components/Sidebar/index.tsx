import React from 'react'
import { MdMenu, MdOutlineHome, MdPersonOutline, MdFavoriteBorder, MdOutlineFolder } from 'react-icons/md';
import MenuButton from '../Button/MenuButton';

const Sidebar = () => {
    const ICON_SIZE = 30;
    return (
        <aside className='w-80 bg-dark-700 h-screen'>
            <section className='flex justify-center items-center py-10 px-6 gap-8'>
                <MdMenu size={ICON_SIZE} />
                <h1 className='font-normal text-2xl text-white'>Knuckles Vision</h1>
            </section>
            <section className='flex flex-col gap-4'>
                <MenuButton isSelected icon={<MdOutlineHome size={ICON_SIZE} />} text="Início" />
                <MenuButton icon={<MdPersonOutline size={ICON_SIZE} />} text="Minha Conta" />
                <MenuButton icon={<MdFavoriteBorder size={ICON_SIZE} />} text="Favoritos" />
                <MenuButton icon={<MdOutlineFolder size={ICON_SIZE} />} text="Meu Conteúdo" />
            </section>
        </aside>
    )
}

export default Sidebar;