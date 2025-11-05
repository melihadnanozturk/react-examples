import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllFoods = createAsyncThunk("food/fetchAll", async () => {
  const response = await request.foods.list();
  return response.data;
});

export const fetchFoodDetails = createAsyncThunk(
  "food/fetchDetail",
  async (id) => {
    const response = await request.foods.details(id);
    console.log("response", response.data);
    return response.data;
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
      .addCase(fetchFoodDetails.fulfilled, (state, action) => {
        state.foodDetails[action.payload.id] = action.payload;
      });
  },
});

export default foodSlice.reducer;
