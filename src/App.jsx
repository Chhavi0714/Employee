import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utills/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState (null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  // console.loggedInUser(authData?.employees); 
  
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
     console.log(loggedInUser);
    const parsed = JSON.parse(loggedInUser);
    setUser({ role: parsed.role });
    if (parsed.role === 'employees') {
      setLoggedInUserData(parsed.data);
    }
   }
  
}, []);
  

  
  
  const handleLogin = (email, password)=>{
    if(email==='admin@me.com' && password==='123'){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      console.log("Logged in as admin");

    }
    else if(userData){
      const employee = userData.find(e=>email===e.email&&e.password===password) 
     if (employee){
       setUser({role:'employees'})
       setLoggedInUserData(employee);
       localStorage.setItem('loggedInUser', JSON.stringify({role:'employees', data:employee}))
       
      }
         }
    else{
      alert("Inavlid Credentials")
    }
  }

 
  return (
     <>
    {!user ? <Login handleLogin={handleLogin} /> :' ' }
    {user?.role === 'admin' && <AdminDashboard changeUser={setUser} />}
    {user?.role === 'employees' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
  
  
  </>
  )
}

export default App
