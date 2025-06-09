import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const submitHandler = (e)=>
      {e.preventDefault()
        handleLogin(email, password);

    setEmail("");
    setPassword("");
  }
  return (
     <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form 
         onSubmit={(e)=>{
          submitHandler(e)
         } }
          className='flex flex-col items-center justify-center'>
          <input 
          value= {email}
          onChange={(e)=>{
            setEmail(e.target.value)
          } }
           required type="email" placeholder='Enter your Email' className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-5 px-3 rounded-full placeholder:text-gray-400'/>
          <input 
          value= {password}
          onChange={(e)=>{
          setPassword(e.target.value)
          } }required type="password" placeholder='Enter your Password' className=' text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-5 px-3 rounded-full placeholder:text-gray-400 mt-2' />
          <button  className=' text-white  outline-none  bg-emerald-600 text-xl py-5 px-3 rounded-full placeholder:text-white mt-5'>Log in</button >
        </form>
      </div>
     </div>
    
  )
}

export default Login