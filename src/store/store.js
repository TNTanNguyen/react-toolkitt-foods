import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/shopping-cart/cartSlice";
import cartUiSlice from "../store/shopping-cart/cartUiSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartShow: cartUiSlice,
  },
});
export default store;
