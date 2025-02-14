import React from 'react'
import { products } from '../assets/datas/productData'

export default function OurBestSeller() {
  return (
    <div className='container mx-auto mt-44'>
        <div className='text-center mb-24 max-sm:mb-16 px-5'>
            <h2 className='text-3xl sm:text-4xl font-semibold'>Our Best Seller</h2>
        </div>
        <div className='grid grid-cols-12 gap-6 px-5'>
            {products.map(product => (
                <div key={product.id} className='bg-gray-100 col-span-12 sm:col-span-6 xl:col-span-3 w-86 h-96 mb-48 max-sm:mx-5'>
                    <img src={product.image} alt="" className='w-full h-full object-contain mb-4 p-6' />
                    <h4 className='font-bold'>{product.name}</h4>
                    <p>{product.description}</p>
                    <div className="flex">
                        <p className='mr-3'>{product.discountPrice}</p>
                        <p className='text-gray-400 line-through'>{product.normalPrice}</p>
                    </div>
                    <div className='mt-3 rounded-lg bg-gray-100 hover:bg-gray-200 py-2 cursor-pointer'>
                        <p className='text-center font-semibold'>{product.buttonDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
