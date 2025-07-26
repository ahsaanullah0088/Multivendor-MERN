import React, { useEffect } from "react";
import ShopCreate from "../Components/Shop/ShopCreate.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopCreatePage = () => {
  const { isSeller, seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSeller) {
      navigate(`/dashboard} `);
    }
  }, []);
  return (
    <div>
      <ShopCreate />
    </div>
  );
};

export default ShopCreatePage;