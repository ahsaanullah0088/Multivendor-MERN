import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  EventsPage,
  Homepage,
  ActivationPage,
  BestSellingPage,
  FaqPage,
  ProfilePage,
  ShopLoginPage,
  ProductsDetailsPage,
  ShopCreatePage,
  CheckoutPage,
  SellerActivationPage,
  OrderSuccessPage,
  
} from "./Routes.js";
import {ShopHomePage , ShopDashboardPage , ShopCreateProduct , ShopAllProduct} from "./ShopRoutes.js"
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSeller, loadUser } from "./redux/actions/user.js";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import SellerProtectedRoute from "./routes/SellerProtectedRoute.jsx";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const {  isSeller  } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
    // console.log(isSeller , seller);
    // console.log(seller._id)

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadSeller());
    
  }, [dispatch]);

  return (
     <BrowserRouter>
      <Routes>s
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
                <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        
        <Route path="/products" element={<ProductsDetailsPage />} />
        <Route path="/dashboard" element={<SellerProtectedRoute>
          <ShopDashboardPage />
        </SellerProtectedRoute>} />
        <Route path="/dashboard-create-product" element={<ShopCreateProduct/>} />
        <Route path="/dashboard-products" element={<ShopAllProduct/>} />



        <Route path="/best-selling" element={<BestSellingPage />} />
                <Route path="/checkout" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
          <CheckoutPage/>
        </ProtectedRoute>} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order/success/:id" element={<OrderSuccessPage />} />

        <Route path="/product/:name" element={<ProductsDetailsPage />} />
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path="/shop/:id" element={<SellerProtectedRoute isSeller={isSeller}>
          <ShopHomePage />
        </SellerProtectedRoute>} />


        <Route path="/profile/" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
          <ProfilePage/>
        </ProtectedRoute>} />

      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
