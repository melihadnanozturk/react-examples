import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api/apiClient";
import { stepButtonClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const login = createAsyncThunk("auth/login", async (body) => {
  const response = await request.auth.login(body);
  return response;
});

export const signIn = createAsyncThunk("auth", async (body) => {
  const response = await request.auth.signIn(body);
  return response;
});

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token, username, roles } = action.payload;
        state.loading = false;
        state.token = token;
        state.user = { username, roles };
        console.log("token", state.token);
        console.log("user", state.user);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const { token, username, roles } = action.payload;
        state.loading = false;
        state.token = token;
        state.user = { username, roles };
        console.log("token", state.token);
        console.log("user", state.user);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUser, logout } = accountSlice.actions;

export default accountSlice.reducer;
