import React from 'react'
import PasswordResetImg from '../assets/images/passwordresetimg.avif'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function PasswordReset() {
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div
                className="col-span-7 h-[90vh] bg-cover"
                style={{ backgroundImage: `url(${PasswordResetImg})`, backgroundPosition: '50% 60%' }}
            ></div>

            {/*Right Section*/}
        <div className='ml-10 col-span-5 flex items-center'>
          <div className='w-[80%]'>
            <Link to="/login"><p className='flex gap-1 text-lg items-center mb-10'><span><IoIosArrowBack size={20} /></span>Back</p></Link>
            <h3 className='text-4xl font-semibold font-serif flex gap-2 mb-3'>Forgot Password</h3>
            <p className='text-gray-500 mb-8'>Enter your registered email address. We'll send you a code to reset your password</p>

            {/*Login Form*/}
            <div className='mb-7'>
              <label htmlFor="email" className='block mb-2'>Email Address</label>
              <input type="email" id='email' placeholder='Enter your email address' className='w-full border border-black rounded-lg p-3' />
            </div>
            <Link to="/otp"><button type='submit' className='w-full bg-black text-white py-3 rounded-lg'>Send OTP</button></Link>
          </div>
        </div>
    </div>
    </div>
  )
}
