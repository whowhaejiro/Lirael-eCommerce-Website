import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../assets/images/hero.png'
import HeroImage3 from '../assets/images/image2.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div>
        <div className='bg-gray-100 mx-7 mt-2 grid grid-cols-12 md:min-h-[650px] md:gap-3 lg:place-items-center max-xl:h-[70vh] h-[85vh] overflow-hidden'>
        {/*<div className="absolute -top-5 -left-10 w-[90%] bg-red-600 text-white text-lg font-bold py-2 rotate-[-10deg]">
            <span className="ml-10">Winter Sale • Limited Time Only • Shop Now</span>
            <span className="ml-10">Winter Sale • Limited Time Only • Shop Now</span>
        </div>*/}
            <div className='flex flex-col col-span-10 lg:col-span-6 xl:col-span-6 2xl:col-span-7 gap-6 justify-center'>
                <h2 className='max-2xl:text-3xl text-5xl'>Classic Exclusive</h2>
                <h1 className='hidden xl:block max-2xl:text-5xl text-7xl font-semibold font-serif'>Women's Collections</h1>
                <div className='hidden max-xl:block'>
                    <h1 className='max-xl:text-6xl font-semibold font-serif'>Women's</h1>
                    <h1 className='max-xl:text-6xl font-semibold font-serif'>Collections</h1>
                </div>
                <h2 className='max-2xl:text-2xl text-4xl mb-9'>UPTO 40% OFF</h2>
                <div className='flex flex-row'>
                    <Link to="shop" className='bg-black text-slate-200 rounded-md px-7 py-2.5 hover:text-white flex gap-1'>Shop Now <span><IoIosArrowRoundForward size={24} /></span></Link>
                </div>
                <div className='flex mt-10 space-x-4'>
                    <a href="" className='text-slate-800 text-xl hover:text-black'><FaFacebookF size={30} /></a>
                    <a href="" className='text-slate-800 text-xl hover:text-black'><FaInstagram size={30} /></a>
                    <a href="" className='text-slate-800 text-xl hover:text-black'><FaXTwitter size={30} /></a>
                    <a href="" className='text-slate-800 text-xl hover:text-black'><FaPinterestP size={30} /></a>
                </div>
            </div>
            <div className='2xl:col-span-5 lg:col-span-6 xl:col-span-6 col-span-2 w-full h-full flex justify-center items-center'>
                <img src={HeroImage} alt="Hero Image" className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}
