import React from 'react'
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import logoImage from '../assets/images/logo-2.png'
import VisaLogo from '../assets/images/visa.png'
import MasterCardLogo from '../assets/images/mastercard.jpeg'
import GPayLogo from '../assets/images/google-pay.jpg'
import AmexLogo from '../assets/images/amex.png'
import PayPalLogo from '../assets/images/paypal.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-black text-slate-200 px-44'>
      <div className='grid grid-cols-2 py-4 md:grid-cols-4 place-items-center'>
        <div className='flex flex-col p-10'>
          <div className='flex items-center mt-8 mb-8 gap-3'>
                <img src={logoImage} alt="" className='h-16 md:h-16' />
                <h2 className='text-5xl md:text-5xl font-semibold'>Lirael</h2>
            </div>
          <div className='flex items-center mb-3'>
            <div className='mr-2'><PiPhoneCallLight size={26} /></div>
            <p>(704) 555-0127</p>
          </div>
          <div className='flex items-center mb-3'>
            <div className='mr-2'><HiOutlineMail size={26} /></div>
            <p>lirael@gmail.com</p>
          </div>
          <div className='flex items-center mb-3'>
            <div className='mr-2'><HiOutlineLocationMarker size={26} /></div>
            <p>3891 Ranchview Dr. Richardson, California 62639</p>
          </div>
        </div>
        <div className='flex flex-col p-10'>
          <h3 className='font-semibold text-lg mb-5'>Information</h3>
          <p className='mb-3 hover:text-white cursor-pointer'>My Account</p>
          <p className='mb-3 hover:text-white cursor-pointer'>Login</p>
          <p className='mb-3 hover:text-white cursor-pointer'>My Cart</p>
          <p className='mb-3 hover:text-white cursor-pointer'>My Wishlist</p>
          <p className='hover:text-white cursor-pointer'>Checkout</p>
        </div>
        <div className='flex flex-col p-10'>
          <h3 className='font-semibold text-lg mb-5'>Service</h3>
          <p className='mb-3 hover:text-white cursor-pointer'>About Us</p>
          <p className='mb-3 hover:text-white cursor-pointer'>Careers</p>
          <p className='mb-3 hover:text-white cursor-pointer'>Delivery Information</p>
          <p className='mb-3 hover:text-white cursor-pointer'>Privacy Policy</p>
          <p className='hover:text-white cursor-pointer'>Terms & Conditions</p>
        </div>
        <div className='flex flex-col p-10'>
          <h3 className='font-semibold text-lg mb-5'>Subscribe</h3>
          <p>Enter your email below to be the first to know about new collections and product launches</p>
          <div>
            <Link to='/' className='mt-5 flex justify-between p-3 border rounded-xl hover:text-white cursor-pointer'>
              <div className='flex'><HiOutlineMail size={26} className='mr-2' /> <span>Your Email</span></div>
              <div className='flex'><IoIosArrowRoundForward size={24} /></div>
            </Link>
          </div>
        </div>
      </div>
      <hr className='border-t border-gray-700' />
      <div className='flex justify-between py-7 place-items-center'>
        <div className='flex gap-3'>
          <div>
            <img src={VisaLogo} alt="" className='w-12 h-8 rounded-md' />
          </div>
          <div>
            <img src={MasterCardLogo} alt="" className='w-12 h-8 rounded-md' />
          </div>
          <div>
            <img src={GPayLogo} alt="" className='w-12 h-8 rounded-md' />
          </div>
          <div>
            <img src={AmexLogo} alt="" className='w-12 h-8 rounded-md' />
          </div>
          <div>
            <img src={PayPalLogo} alt="" className='w-12 h-8 rounded-md' />
          </div>
        </div>
        <div className='text-center'>
          &copy; 2023 Lirael. All Rights Reserved.
        </div>
        <div className='flex gap-3'>
          <a href="" className='text-slate-200 text-xl hover:text-white'><FaFacebookF size={24} /></a>
          <a href="" className='text-slate-200 text-xl hover:text-white'><FaInstagram size={24} /></a>
          <a href="" className='text-slate-200 text-xl hover:text-white'><FaXTwitter size={24} /></a>
          <a href="" className='text-slate-200 text-xl hover:text-white'><FaPinterestP size={24} /></a>
        </div>
      </div>
    </div>
  )
}
