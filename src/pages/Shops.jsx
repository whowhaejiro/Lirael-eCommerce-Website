import {React, useState} from 'react'
import { FiPackage } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { HiOutlineCreditCard } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { shops } from '../assets/datas/shopData';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Shops() {
  const [openSections, setOpenSections] = useState ({
    categories: false,
    price: false,
    color: false,
    size: false
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <div className='container mx-auto mt-14'>
      <div className='flex items-center'>
        <h5 className='flex items-center'>Shop <span><IoIosArrowForward size={18} className='ml-1' /></span></h5>
        <h5 className='ml-1'>All Products</h5>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-2 mt-12'>
          <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSection('categories')}>
            <h5 className='font-bold text-lg'>Product Categories</h5>
            <div>
              {openSections.categories ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
            </div>
          </div>

          {openSections.categories && ( //Conditionally render content 
          <div className='mt-6'>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Men</span>
              </label>
              <span className=''><FiPlus size={20} /></span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Women</span>
              </label>
              <span className=''><FiPlus size={20} /></span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Kids</span>
              </label>
              <span className=''><FiPlus size={20} /></span>
            </div>
            <div className='flex mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Bags</span>
              </label>
            </div>
            <div className='flex mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Belts</span>
              </label>
            </div>
            <div className='flex mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Wallets</span>
              </label>
            </div>
            <div className='flex mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Accessories</span>
              </label>
            </div>
            <div className='flex mb-6 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>Winter Wear</span>
              </label>
            </div>
          </div>
          )}

          <hr className='border-t mt-6' />

          <div className='flex justify-between items-center mt-6 mb-6 cursor-pointer' onClick={() => toggleSection('price')}>
            <h5 className='font-bold text-lg'>Filter by Price</h5>
            <div>
              {openSections.price ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
            </div>
          </div>
          {openSections.price &&
            <h5 className='mb-6'>Price: $0 - $2000</h5>
          }

          <hr className='border-t' />

          <div className='flex justify-between items-center mt-6 mb-6 cursor-pointer' onClick={() => toggleSection('color')}>
            <h5 className='font-bold text-lg'>Filter by Color</h5>
            <div>
              {openSections.color ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
            </div>
          </div>

          {openSections.color && (
          <div className='mt-6'>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <div className='w-5 h-5 border border-1 bg-red-600'></div>
                <span className='ml-2'>Red</span>
              </label>
              <span className=''>(10)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <div className='w-5 h-5 border border-1 bg-blue-600'></div>
                <span className='ml-2'>Blue</span>
              </label>
              <span className=''>(14)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <div className='w-5 h-5 border border-1 bg-orange-300'></div>
                <span className='ml-2'>Orange</span>
              </label>
              <span className=''>(8)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <div className='w-5 h-5 border border-1 bg-black'></div>
                <span className='ml-2'>Black</span>
              </label>
              <span className=''>(9)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <div className='w-5 h-5 border border-1 bg-green-400'></div>
                <span className='ml-2'>Green</span>
              </label>
              <span className=''>(4)</span>
            </div>
            <div className='flex justify-between mb-6 items-center'>
              <label htmlFor="" className='flex items-center'>
                <div className='w-5 h-5 border border-1 bg-yellow-300'></div>
                <span className='ml-2'>Yellow</span>
              </label>
              <span className=''>(2)</span>
            </div>
          </div>
          )}

          <hr className='border-t' />

          <div className='flex justify-between items-center mt-6 mb-6 cursor-pointer' onClick={() => toggleSection('size')}>
            <h5 className='font-bold text-lg'>Filter by Size</h5>
            <div>
              {openSections.size ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
            </div>
          </div>

          {openSections.size && (
          <div className='mt-6'>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>S</span>
              </label>
              <span className=''>(6)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>M</span>
              </label>
              <span className=''>(20)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>L</span>
              </label>
              <span className=''>(7)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>XL</span>
              </label>
              <span className=''>(16)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>XXL</span>
              </label>
              <span className=''>(10)</span>
            </div>
            <div className='flex justify-between mb-4 items-center'>
              <label htmlFor="" className='flex items-center'>
                <input type="checkbox" className='w-5 h-5 accent-black' />
                <span className='ml-2'>XXXL</span>
              </label>
              <span className=''>(2)</span>
            </div>
          </div>
          )}
        </div>

        <div className='col-span-10 mt-12 mx-14'>
          <div className='flex justify-between'>
            <div className='flex gap-5'>
              <span><CiGrid41 size={30} /></span>
              <span><TfiLayoutListThumb size={30} /></span>
              <p>Showing 1-16 of 72 results</p>
            </div>
            <div>
              <p className='flex items-center gap-2'>Shop by latest <span><IoIosArrowDown size={20} /></span></p>
            </div>
          </div>
          <div className='mt-7'>
            <div className='grid grid-cols-12 gap-10'>
              {shops.map(shop => (
                <div key={shop.id} className='bg-gray-100 col-span-12 sm:col-span-6 xl:col-span-4 w-86 h-96 mb-40 max-sm:mx-5'>
                  <img src={shop.image} alt="" className='w-full h-full object-contain mb-4 p-6' />
                  <h4 className='font-bold'>{shop.name}</h4>
                  <p>{shop.description}</p>
                  <div className="flex">
                    <p className='mr-3'>{shop.discountPrice}</p>
                    <p className='text-gray-400 line-through'>{shop.normalPrice}</p>
                  </div>
                  <div className='mt-3 rounded-lg bg-gray-100 hover:bg-gray-200 py-2 cursor-pointer'>
                    <p className='text-center font-semibold'>{shop.buttonDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mr-12 mt-10'>
      <div className='flex justify-end gap-2 items-center'>
        <div><IoIosArrowRoundBack size={30} color='gray' /></div>
        <div className='flex items-center justify-center w-10 h-10 border border-black bg-black text-white text-center font-semibold rounded-lg'>1</div>
        <div className='flex items-center justify-center w-10 h-10 border border-black text-center font-semibold rounded-lg'>2</div>
        <div className='flex items-center justify-center w-10 h-10 border border-black text-center font-semibold rounded-lg'>3</div>
        <div className='flex items-center justify-center w-10 h-10 border border-black text-center font-semibold rounded-lg'>4</div>
        <div className='flex items-center justify-center w-10 h-10 border border-black text-center font-semibold rounded-lg'>5</div>
        <div><IoIosArrowRoundForward size={30} /></div>
      </div>
      </div>

      <div className='mt-24 mb-32 grid grid-cols-1 md:grid-cols-4 gap-10'>
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
