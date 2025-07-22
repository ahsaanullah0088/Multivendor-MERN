import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user.js";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="/best-selling" element={<BestSellingPage />} />
                <Route path="/checkout" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
          <CheckoutPage/>
        </ProtectedRoute>} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:name" element={<ProductsDetailsPage />} />
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />

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
