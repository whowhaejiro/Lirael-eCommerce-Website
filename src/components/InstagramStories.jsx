import React from 'react'
import Story1 from '../assets/images/story1.jpg'
import Insta1 from '../assets/images/insta1.jpg'
import Story2 from '../assets/images/story-2.jpg'
import Insta2 from '../assets/images/insta2.jpeg'
import Story3 from '../assets/images/story-3.jpg'
import Insta3 from '../assets/images/insta3.jpg'
import Story4 from '../assets/images/AutumnStyle2.jpeg'

export default function InstagramStories() {
  return (
    <div className='container mx-auto mt-44'>
        <div>
            <div className='px-5'>
                <h2 className='text-center text-4xl font-semibold'>Our Instagram Stories</h2>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 px-5'>
                <div>
                    <img src={Insta1} alt="" className='w-96 h-80 object-cover' />
                </div>
                <div>
                    <img src={Insta2} alt="" className='w-96 h-80 object-cover' />
                </div>
                <div>
                    <img src={Insta3} alt="" className='w-96 h-80 object-cover' />
                </div>
                <div>
                    <img src={Story4} alt="" className='w-96 h-80 object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}
