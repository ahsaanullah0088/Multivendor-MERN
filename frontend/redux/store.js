import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { productReducer } from "./reducers/product";
const Store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    // Add your reducers here
  },
});
export default Store;
