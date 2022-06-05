import React from 'react'
import { MdMenu } from 'react-icons/md';

const Sidebar = () => {
    return (
        <aside className='w-80 bg-dark-700 h-screen'>
            <section className='flex justify-center items-center py-10 px-6 gap-8'>
                <MdMenu size={30} />
                <h1 className='font-normal text-2xl text-white'>Knuckles Vision</h1>
            </section>
        </aside>
    )
}

export default Sidebar;