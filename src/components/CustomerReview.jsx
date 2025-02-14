import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import ProfilePicture from '../assets/images/pp-1.jpg'
import ProfilePicture2 from '../assets/images/pp-2.jpg'
import ProfilePicture3 from '../assets/images/pp-3.jpg'

export default function CustomerReview() {
  return (
    <div className='bg-gray-100 mt-40'>
        <div className='container mx-auto'>
            <div className='flex justify-between py-16 px-5'>
                <h2 className='text-4xl font-semibold'>What our Customers Say</h2>
                <div className='space-x-4'>
                    <button className='bg-gray-200 text-black rounded-md p-2'><IoIosArrowRoundBack size={30} /></button>
                    <button className='bg-black text-slate-200 hover:text-white rounded-md p-2'><IoIosArrowRoundForward size={30} /></button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 px-5'>
                <div className='bg-white py-8 px-6 rounded-xl'>
                    <div className='flex flex-row gap-1'>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                    </div>
                    <div className='mt-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut labore tempora iusto ratione, explicabo cupiditate nobis, ea quasi dolores dolor quidem ad dignissimos debitis consec tetur nesciunt officia aliquid facilis.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <img src={ProfilePicture} alt="" className='w-12 h-12 rounded-full object-cover' />
                            <div>
                                <p className='font-semibold text-gray-900'>Honorary James</p>
                                <p className='text-gray-500 text-sm'>CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-8 px-6 rounded-xl'>
                    <div className='flex flex-row gap-1'>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                    </div>
                    <div className='mt-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut labore tempora iusto ratione, explicabo cupiditate nobis, ea quasi dolores dolor quidem ad dignissimos debitis consec tetur nesciunt officia aliquid facilis.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <img src={ProfilePicture2} alt="" className='w-12 h-12 rounded-full object-cover' />
                            <div>
                                <p className='font-semibold text-gray-900'>James Jones</p>
                                <p className='text-gray-500 text-sm'>Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-8 px-6 rounded-xl'>
                    <div className='flex flex-row gap-1'>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                        <div><FaStar color='orange' size={24} /></div>
                    </div>
                    <div className='mt-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut labore tempora iusto ratione, explicabo cupiditate nobis, ea quasi dolores dolor quidem ad dignissimos debitis consec tetur nesciunt officia aliquid facilis.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-3 mt-4'>
                            <img src={ProfilePicture3} alt="" className='w-12 h-12 rounded-full object-cover' />
                            <div>
                                <p className='font-semibold text-gray-900'>Leslie Alexander</p>
                                <p className='text-gray-500 text-sm'>Fashion Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
