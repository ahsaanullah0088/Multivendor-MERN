import React, { useEffect } from 'react'
import Signup from '../Components/Signup/Signup.jsx'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
  if(isAuthenticated === true){
    navigate("/");
  }
  }, [isAuthenticated])
  return (
    <div className="">
      <Signup/>
    </div>
  )
}

export default LoginPage
