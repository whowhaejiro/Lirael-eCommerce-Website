import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { categories } from '../assets/datas/categoriesdata';

export default function ShopByCategories() {
  return (
    <div className='container mx-auto mt-32'>
        <div className='flex justify-around sm:justify-between px-5'>
            <h2 className='text-3xl sm:text-4xl font-semibold'>Shop by Categories</h2>
            <div className='max-sm:hidden space-x-4'>
                <button className='bg-gray-200 text-black rounded-md p-2'><IoIosArrowRoundBack size={30} /></button>
                <button className='bg-black text-slate-200 hover:text-white rounded-md p-2'><IoIosArrowRoundForward size={30} /></button>
            </div>
        </div>
        <div className='mt-16 sm:mt-20 grid grid-cols-12 px-5 gap-6'>
           {categories.map(category => (
            <div key={category.id} className='col-span-12 sm:col-span-6 xl:col-span-3 relative bg-gray-100 overflow-hidden w-86 h-96 max-sm:mx-5'>
                <img src={category.image} alt="Casual Wear" className='w-full h-full object-cover' />
                <div className='absolute bottom-4 left-0 right-0 bg-white text-center py-2 mx-10 rounded-lg'>
                    <span className='text-lg font-semibold'>{category.name}</span>
                </div>
            </div>
           ))} 
        </div>
    </div>
  )
}
