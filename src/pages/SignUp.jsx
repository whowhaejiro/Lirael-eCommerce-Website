import React from 'react'
import SignUpImage from '../assets/images/AutumnStyle2.jpeg'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div
            className="col-span-7 h-[90vh] bg-cover"
            style={{ backgroundImage: `url(${SignUpImage})`, backgroundPosition: '50% 25%' }}
        ></div>
        
        {/*Right Section*/}
        <div className='ml-10 col-span-5 flex items-center'>
          <div className='w-[80%]'>
            <h3 className='text-4xl font-semibold font-serif flex gap-2 mb-3'>Create New Account</h3>
            <p className='text-gray-500 mb-8'>Please enter details</p>

            {/*Login Form*/}
            <div className='mb-4'>
              <label htmlFor="text" className='block mb-2'>First Name</label>
              <input type="text" id='firstName' placeholder='Enter first name' className='w-full border border-black rounded-lg p-3' />
            </div>
            <div className='mb-4'>
              <label htmlFor="text" className='block mb-2'>Last Name</label>
              <input type="text" id='firstName' placeholder='Enter last name' className='w-full border border-black rounded-lg p-3' />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block mb-2'>Email Address</label>
              <input type="email" id='email' placeholder='Enter a valid email address' className='w-full border border-black rounded-lg p-3' />
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className='block mb-2'>Password</label>
              <input type="password" id='password' placeholder='Enter password' className='w-full border border-black rounded-lg p-3' />
            </div>

            <div className='flex items-center mb-6'>
              <label htmlFor="" className='flex items-center gap-2'>
                <input type="checkbox" className='accent-black' />
                I agree to the <span className='font-semibold'>Terms & conditions</span>
              </label>
            </div>
            <button type='submit' className='w-full bg-black text-white py-3 rounded-lg'>Sign Up</button>
            <p className='mt-4 text-gray-600'>Already have an account? <span className='text-black font-semibold ml-1 underline'><Link to="/login">Login</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
