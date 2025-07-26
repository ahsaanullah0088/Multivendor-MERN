import { Navigate } from "react-router-dom";

import { sellerReducer } from "../redux/reducers/seller.js";
import { useSelector } from "react-redux";
import Loader from "../Components/Layout/Loader.jsx";


const SellerProtectedRoute = ({ children }) => {
    const { isLoading, isSeller  } = useSelector((state) => state.seller);
  if (isLoading=== true) {
    return <Loader/>
  } else{
    if (!isSeller) {
    return <Navigate to={`/shop/${sellerReducer._id}`} />;
  }
  } 

  return children;
};

export default SellerProtectedRoute;
