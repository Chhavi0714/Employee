import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 h-48 ' >
       <div className='bg-red-400 px-4 py-2 flex justify-between rounded mt-1'>
        <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
        <h3 className='w-1/5 bg-red-600'>New Task </h3>
        <h5 className='w-1/5 bg-red-600'>Active task</h5>
        <h5 className='w-1/5 bg-red-600'>Completed</h5>
        <h5 className='w-1/5 bg-red-600'>Failed</h5>

      </div>
<div className='h-[80%] overflow-auto '>
        {userData.map(function(e , id){
           return <div key={id} className='border -2-emerald bg-black-500 px-4 py-2 flex justify-between rounded mt-1'>
        <h2 className='w-1text'>{e.firstName}</h2>
        <h3 className='w-1/5 text-blue-600'>{e.taskCount.newTask} </h3>
        <h5 className='w-1/5 text-yellow-400'>{e.taskCount.active} </h5>
        <h5 className='w-1/5 text-green-600'>{e.taskCount.completed}</h5>
        <h5 className='w-1/5 text-red-600'>{e.taskCount.failed}</h5>
      </div>

      } ) }
</div>      
     
       {/* <div className='bg-green-400 px-4 py-2 flex justify-between rounded mt-1'>
        <h2>Chhavi</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
       <div className='bg-yellow-400 px-4 py-2 flex justify-between rounded mt-1'>
        <h2>Chhavi</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div> */}
    </div>
  )
}

export default AllTask