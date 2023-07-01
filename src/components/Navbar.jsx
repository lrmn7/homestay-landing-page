import React, { useState } from 'react';
import {RiMenuAddLine} from 'react-icons/ri';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>L RMN Homestay</h1>
        <RiMenuAddLine onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />

        <div className={nav ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
        : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
            <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className="font-bold text-3xl p-8 cursor-pointer hover:text-white">Home</li>
                <li className="font-bold text-3xl p-8 cursor-pointer hover:text-white">Destinations</li>
                <li className="font-bold text-3xl p-8 cursor-pointer hover:text-white">Reservation</li>
                <li className="font-bold text-3xl p-8 cursor-pointer hover:text-white">Rooms</li>
                <li className="font-bold text-3xl p-8 cursor-pointer hover:text-white">Menu</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar