import React from 'react'

const Newtask = ({data}) => {
  return (
        <div className="flex-shrink-0 h-full w-[300px] p-3 bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
         <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
         <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-1 text-xxl font-semibold'>{data.title}</h2>
        <p className='text-sm'>{data.description} </p>
      <div className='mt-4'>
        <button>Accept Task </button>
      </div>
      </div>
  )
}

export default Newtask