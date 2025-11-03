import Container from "@mui/material/Container";
import FoodCart from "../components/FoodCart";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFoods } from "./slices/FoodSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function HomePage() {
  const dispatch = useDispatch();
  const { foods = [], loading, error } = useSelector((state) => state.food);

  useEffect(() => {
    if (foods.length === 0) dispatch(fetchAllFoods());
  }, [dispatch]);

  if (loading)
    return <CircularProgress sx={{ display: "block", margin: "2rem auto" }} />;

  return (
    <Container>
      <h1>Food List</h1>
      <Grid container spacing={2}>
        {foods.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food.id}>
            <FoodCart food={food} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
