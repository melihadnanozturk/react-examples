import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "../pages/slices/FoodSlice";

export const store = configureStore({
  reducer: {
    food: foodSlice,
  },
});
