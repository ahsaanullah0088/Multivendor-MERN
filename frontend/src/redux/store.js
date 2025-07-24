import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";


const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
    // Add your reducers here
  },
});
export default Store;
