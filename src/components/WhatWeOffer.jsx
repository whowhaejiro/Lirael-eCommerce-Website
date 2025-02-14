import React from 'react'
import { FiPackage } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { HiOutlineCreditCard } from "react-icons/hi";

export default function WhatWeOffer() {
  return (
    <div className='container mx-auto mt-36 mb-32'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 px-5'>
            <div className='flex flex-col'>
                <div className='mb-4'><FiPackage size={40} /></div>
                <h5 className='font-bold text-2xl mb-2'>Free Shipping</h5>
                <p className='text-gray-900'>Free shipping for order above $150</p>
            </div>
            <div className='flex flex-col'>
                <div className='mb-4'><BiDollarCircle size={40} /></div>
                <h5 className='font-bold text-2xl mb-2'>Money Guarantee</h5>
                <p className='text-gray-900'>Within 30 days for an exchange</p>
            </div>
            <div className='flex flex-col'>
                <div className='mb-4'><AiOutlineCustomerService size={40} /></div>
                <h5 className='font-bold text-2xl mb-2'>Online Support</h5>
                <p className='text-gray-900'>24 hours a day, 7 days a week</p>
            </div>
            <div className='flex flex-col'>
                <div className='mb-4'><HiOutlineCreditCard size={40} /></div>
                <h5 className='font-bold text-2xl mb-2'>Flexible Payment</h5>
                <p className='text-gray-900'>Pay with multiple credit cards</p>
            </div>
        </div>
    </div>
  )
}
