import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import logoImage from '../assets/images/logo-2.png'

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav>
        <div className='flex justify-around max-sm:justify-around max-lg:justify-between sm:mx-14 md:mx-14 py-6 items-center md:px-9'>
            <div className='flex items-center gap-3'>
                <div className='hidden max-lg:block mr-2'>
                    <RxHamburgerMenu size={26} className='cursor-pointer' />
                </div>
                <img src={logoImage} alt="" className='h-11 md:h-14' />
                <Link to='/' className='text-4xl md:text-4xl font-semibold'>Lirael</Link>
            </div>
            <div className='lg:flex space-x-6 hidden'>
                <Link to='/'>Home</Link>
                <div className='relative group'>
                    <div className='flex items-center gap-1 cursor-pointer' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                        <Link to="shop" className='flex'>Shop</Link>
                        <RiArrowDownSLine size={20} />
                    </div>
                    
                    {isDropdownOpen && (
                        <div className='absolute top-10 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md w-[800px] p-6 grid grid-cols-4 gap-6'>
                            <div></div>
                        </div>
                    )}
                </div>
                <Link to="ourStory">Our Story</Link>
                <Link to="blog">Blog</Link>
                <Link to="contact">Contact Us</Link>
            </div>
            <div className='flex space-x-5 items-center'>
                <div className='hidden lg:flex space-x-5'>
                    <FiSearch size={22} className='hover:cursor-pointer' />
                    <MdFavoriteBorder size={22} className='hover:cursor-pointer' />
                    <IoBagOutline size={22} className='hover:cursor-pointer' />
                </div>
                <div className='hidden lg:flex'>
                    <Link to="login" className='bg-black text-slate-200 rounded-md px-7 py-2.5 hover:text-white'>Login</Link>
                </div>
                <div className='hidden max-lg:block'>
                    <IoBagOutline size={24} className='hover:cursor-pointer' />
                </div>
                <div className='hidden max-lg:block'>
                    <Link to="/login"><IoPersonOutline size={24} className='cursor-pointer' /></Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
