import React from 'react'
import  ShopLogin  from '../Components/Shop/ShopLogin.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const {  isSeller , seller } = useSelector((state) => state.seller);


  // console.log(seller._id);
  useEffect(()=>{
    if(isSeller){
      navigate(`/dashboard`);
    }

  })
  return (
    <div>
      <ShopLogin/> 
    </div>
  )
}

export default ShopLoginPage
