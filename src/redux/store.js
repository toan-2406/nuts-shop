import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from "../redux/product-modal/ProductModalSlice";

import cartItemSlide from "./shopping-cart/cartItemSlide";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemSlide,
  },
});
