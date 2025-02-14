import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import SectionImage from '../assets/images/dol2.jpg'
import SectionImage2 from '../assets/images/dol-img2.jpeg'

export default function DealsOfTheMonth() {
  return (
    <div className='container mx-auto mt-44'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center px-5'>
            <div className='flex flex-col gap-10'>
                <h2 className='text-5xl font-semibold'>Deals of the Month</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet provident qui id ipsam, officiis voluptates sint laborum minus dolore neque commodi consequuntur ipsa totam nam officia quam eaque magni.</p>
                <div className='flex gap-4 justify-start mb-2'>
                    <div className='border rounded-lg p-4'>
                        <p className='text-3xl font-bold text-center'>120</p>
                        <p className='text-lg text-center'>Days</p>
                    </div>
                    <div className='border rounded-lg p-4'>
                        <p className='text-3xl font-bold text-center'>18</p>
                        <p className='text-lg text-center'>Hours</p>
                    </div>
                    <div className='border rounded-lg p-4'>
                        <p className='text-3xl font-bold text-center'>15</p>
                        <p className='text-lg text-center'>Mins</p>
                    </div>
                    <div className='border rounded-lg p-4'>
                        <p className='text-3xl font-bold text-center'>10</p>
                        <p className='text-lg text-center'>Secs</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Link to='/' className='bg-black text-slate-200 rounded-lg hover:text-white flex gap-1 px-5 py-3'>View All Products <span><IoIosArrowRoundForward size={24} /></span></Link>
                </div>
            </div>
            <div className='w-full'>
                <img src={SectionImage2} alt="" className='w-full h-full object-cover max-h-[70vh]' />
            </div>
        </div>
    </div>
  )
}
