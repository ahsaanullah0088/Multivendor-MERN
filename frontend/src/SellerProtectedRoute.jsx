import { Navigate } from "react-router-dom";

import { sellerReducer } from "./redux/reducers/seller";
import { useSelector } from "react-redux";


const SellerProtectedRoute = ({ iSeller, children }) => {
    const { isSeller  } = useSelector((state) => state.seller);
  if (!isSeller) {
    return <Navigate to={`/shop/${sellerReducer._id}`} />;
  }

  return children;
};

export default SellerProtectedRoute;
