import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "../pages/slices/FoodSlice";
import accountSlice from "../pages/slices/AccountSlice";

export const store = configureStore({
  reducer: {
    food: foodSlice,
    account: accountSlice,
  },
});
