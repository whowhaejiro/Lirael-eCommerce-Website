import React from 'react'
import OtpImg from '../assets/images/otpimg.jpeg'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function OTP() {
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div
                className="col-span-7 h-[90vh] bg-cover"
                style={{ backgroundImage: `url(${OtpImg})`, backgroundPosition: '50% 15%' }}
            ></div>

            {/*Right Section*/}
        <div className='ml-10 col-span-5 flex items-center'>
          <div className='w-[60%]'>
            <Link to="/passwordReset"><p className='flex gap-1 text-lg items-center mb-10'><span><IoIosArrowBack size={20} /></span>Back</p></Link>
            <h3 className='text-4xl font-semibold font-serif flex gap-2 mb-3'>Enter OTP</h3>
            <p className='text-gray-500 mb-8'>We have sent a code to your registered email address</p>

            {/*Login Form*/}
            <div className='flex mb-7 gap-6'>
              <div>
                <input type="text" maxLength={1} className='w-12 h-12 border border-black rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-black focus:border-black' />
              </div>
              <div>
                <input type="text" maxLength={1} className='w-12 h-12 border border-black rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-black focus:border-black' />
              </div>
              <div>
                <input type="text" maxLength={1} className='w-12 h-12 border border-black rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-black focus:border-black' />
              </div>
              <div>
                <input type="text" maxLength={1} className='w-12 h-12 border border-black rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-black focus:border-black' />
              </div>
              <div>
                <input type="text" maxLength={1} className='w-12 h-12 border border-black rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-1 focus:ring-black focus:border-black' />
              </div>
            </div>
            <Link to="/otp"><button type='submit' className='w-full bg-black text-white py-3 rounded-lg'>Verify</button></Link>
          </div>
        </div>
        </div>
    </div>
  )
}
