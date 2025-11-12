import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../api/apiClient";

export const fetchAllFoods = createAsyncThunk("food/fetchAll", async () => {
  const response = await request.foods.list();
  return response;
});

export const fetchFoodDetails = createAsyncThunk(
  "food/fetchDetail",
  async (id) => {
    const response = await request.foods.details(id);
    console.log("response", response.data);
    return response;
  }
);

export const postNewFood = createAsyncThunk(
  "food/postNew",
  async (foodData) => {
    const response = await request.foods.create(foodData);
    return response;
  }
);

const initialState = {
  foods: null,
};

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    foodDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllFoods.fulfilled, (state, action) => {
        state.loading = false;
        state.foods = action.payload;
      })
      .addCase(fetchAllFoods.rejected, (state, action) => {
        state.loading = false;
        state.error = "Beklenmeyen bir hata oluştu: " + action.error.message;
      })
      .addCase(postNewFood.pending, (state) => {
        state.loading = true;
      })
      .addCase(postNewFood.rejected, (state, action) => {
        state.loading = false;
        state.error = "Beklenmeyen bir hata oluştu: " + action.error.message;
      })
      .addCase(fetchFoodDetails.fulfilled, (state, action) => {
        state.foodDetails[action.payload.id] = action.payload;
      });
  },
});

export default foodSlice.reducer;
