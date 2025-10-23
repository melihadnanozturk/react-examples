import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/counter/counterSlice";
import { messageSlice } from "../pages/message/messageSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    message: messageSlice.reducer,
  },
});
