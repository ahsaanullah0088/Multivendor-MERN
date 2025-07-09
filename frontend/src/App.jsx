import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage, Homepage ,ActivationPage , ProductsPage } from "./Routes.js";
import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./redux/store.js";
import { loadUser } from "./redux/actions/user.js";

function App() {
  useEffect(() => {
     Store.dispatch(loadUser());
  }, []);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
      <Route path = "/products" element={<ProductsPage />} />

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
