import Container from "@mui/material/Container";
import FoodCart from "../components/FoodCart";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import request from "../api/apiClient";

export default function HomePage() {
  //food apiden gelecek, liste ile food cartlarını göstereceğiz const food;
  useEffect(() => {
    request.foods.list().then((data) => setF(data));
  }, []);

  const [f, setF] = useState([]);

  return (
    <Container>
      <h1>Home Page</h1>
      <Grid container spacing={2}>
        {f.map((f) => (
          <Grid item xs={12} sm={6} md={4} key={f.id}>
            <FoodCart food={f} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
