import React from 'react'
import { Props } from './types';

const MenuButton: React.FC<Props> = ({ onClick = () => { }, text, icon: Icon, isSelected = false, textIsVisible = true }) => {
    return (
        <button onClick={onClick} className={`hover:bg-grey-300/10
         w-full flex items-center py-5 px-6 gap-7 ${isSelected ? "bg-grey-300/10" : "bg-dark-700"}`} >
            {Icon}
            {textIsVisible && <span className='flex-1 text-left text-xl'>{text}</span>}
        </button >
    )
}

export default MenuButton;