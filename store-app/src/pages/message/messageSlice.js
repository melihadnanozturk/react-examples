import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.value = action.payload;
    },
    clearMessage: (state) => {
      state.value = "";
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
