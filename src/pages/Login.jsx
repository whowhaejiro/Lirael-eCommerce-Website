import React from 'react'
import { PiHandWavingFill } from "react-icons/pi";
import LoginImage from '../assets/images/login-img.jpg'
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

export default function Login() {
  return (
    <div>
      <div className='grid grid-cols-12'>
        {/*Left Section*/}
        <div
            className="col-span-7 h-[90vh] bg-cover"
            style={{ backgroundImage: `url(${LoginImage})`, backgroundPosition: '50% 15%' }}
        ></div>

        {/*Right Section*/}
        <div className='ml-10 col-span-5 flex items-center'>
          <div className='w-[80%]'>
            <h3 className='text-4xl font-semibold font-serif flex gap-2 mb-3'>Welcome <span><PiHandWavingFill size={40} color='orange' /></span></h3>
            <p className='text-gray-500 mb-8'>Please login here</p>

            {/*Login Form*/}
            <div className='mb-4'>
              <label htmlFor="email" className='block mb-2'>Email Address</label>
              <input type="email" id='email' placeholder='Enter a valid email address' className='w-full border border-black rounded-lg p-3' />
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className='block mb-2'>Password</label>
              <input type="password" id='password' placeholder='Enter password' className='w-full border border-black rounded-lg p-3' />
            </div>

            <div className='flex items-center justify-between mb-6'>
              <label htmlFor="" className='flex items-center gap-2'>
                <input type="checkbox" className='accent-black' />
                Remember me
              </label>
              <a href="" className='hover:underline'>
                <Link to="/passwordReset" className='underline'>Forgot Password?</Link>
              </a>
            </div>
            <button type='submit' className='w-full bg-black text-white py-3 rounded-lg'> Login</button>
            <p className='mt-4 text-gray-600'>Don't have an account? <span className='text-black font-semibold ml-1 underline'><Link to='/signUp'>Sign Up</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
