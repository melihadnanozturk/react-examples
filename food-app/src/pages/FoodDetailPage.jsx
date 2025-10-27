import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { fetchFoodDetails } from "./slices/FoodSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export default function FoodDetailPage() {
  const { foodId } = useParams();
  const dispatch = useDispatch();
  const { foodDetails } = useSelector((state) => state.food);

  const food = foodDetails[foodId];

  useEffect(() => {
    if (!food) {
      dispatch(fetchFoodDetails(foodId));
    }
  }, [dispatch, foodId, food]);

  if (!food) {
    return <CircularProgress sx={{ display: "block", margin: "2rem auto" }} />;
  }

  //burada page için bir tane component olusturulabilir, suanlik yeterli :)
  return (
    <>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack direction="row" spacing={4} alignItems="flex-start">
          <img
            src={food.image}
            alt={food.name}
            style={{ width: "200 px", borderRadius: "8px" }}
          />
          <Stack>
            <Typography variant="h4">{food.name}</Typography>
            <Typography>{food.desc}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
