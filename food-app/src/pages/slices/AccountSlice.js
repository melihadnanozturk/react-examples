import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api/apiClient";

export const login = createAsyncThunk("auth/login", async (body) => {
  const response = await request.auth.login(body);
  return response.data;
});

const initialState = {
  user: null,
  token: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    name: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = "Beklenmeyen bir hata oluştu: " + action.error.message;
      });
  },
});

export default accountSlice.reducer;
