
import React from 'react'
import { useNavigate,Link,redirect,  } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';


const Profile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate('/login');
  }
  return (
   <div className="w-full min-h-screen flex justify-center items-center">
    {
      isAuthenticated ? ( <div className="box">User Profile</div>
    ) : (
      <div className="box">
        <h2>Please log in to view your profile</h2>
        <button onClick={handleNavigate} className='w-[100px] bg-pink-600 h-[40px] rounded-sm font-bold'>Login</button>
      </div>
    )
    }
   </div>
  )
}

export default Profile