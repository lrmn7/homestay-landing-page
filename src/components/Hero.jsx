import React from 'react';
import heroimg from '../assets/heroimg.jpg';

const Hero = () => {
  return (
    <div className="w-full h-screen">
        <img className="top-0 left-0 w-full h-screen object-cover" src={heroimg} alt="/"/>
        <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />

        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            
            <p>All inclusive</p>
            <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches</h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aspernatur quidem quia, id facilis! Officia nostrum ex suscipit maiores?</p>
          
          <button className='bg-white text-black hover:uppercase'>Reserve Now</button>
        </div>
    </div>
    </div>
  )
}

export default Hero