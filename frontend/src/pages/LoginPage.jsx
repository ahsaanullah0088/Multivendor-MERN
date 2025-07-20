import React, { useEffect } from 'react'
import Login from '../Components/Login/Login'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
      <Login/>
    </div>
  )
}

export default LoginPage
