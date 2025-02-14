import React from 'react'

export default function Post({ post }) {
  return (
    <div className='container mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-6'>
        <div className='p-8'>
            <a href={post.url} className='block mb-4 text-lg leading-tight font-medium text-black hover:underline'>
                {post.title}
            </a>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                {post.body}
            </div>
            <p className='mt-2 text-gray-500'>
                {post.description}
            </p>
        </div>
    </div>
  );
}
