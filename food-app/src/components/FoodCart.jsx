import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";

export default function FoodCart({ food }) {
  // Redux işle food bilgilerini getir

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, mt: 2 }}>
      <CardActionArea onClick={() => navigate(`/food/${food.id}`)}>
        <CardMedia
          component="img"
          height="200"
          sx={{
            objectFit: "cover",
          }}
          image={food.image}
          alt="green iguana"
        />
        <CardContent sx={{ width: "200px" }}>
          <Typography gutterBottom noWrap variant="h6" component="div">
            {food.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
