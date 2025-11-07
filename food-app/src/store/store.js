import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "../pages/slices/AccountSlice";
import foodSlice from "../pages/slices/FoodSlice";

export const store = configureStore({
  reducer: {
    food: foodSlice,
    account: accountSlice,
  },
});
