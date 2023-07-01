import React from 'react'
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";


const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={img1} alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={img2} alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={img3} alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={img4} alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={img5} alt="" />
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ad.</p>
            <p className='pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero alias sapiente minima voluptates enim aliquam at voluptatibus beatae dicta. Quisquam hic sequi totam quas harum qui placeat inventore modi delectus.</p>
            <div>
                <button className='border-black mr-4 hover:bg-gray-300'>Learn More</button>
                <button className='bg-black text-white border-black hover:bg-gray-700'>Book your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan