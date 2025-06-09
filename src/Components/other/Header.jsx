import React from 'react'

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser(null); // Clear user from state
  };
  return (
    <div className='flex items-end justify-between'>
      <h1 className=' text-white text-2xl'> Hello <br/> <span className='text-3xl font-semibold'></span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-small text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header