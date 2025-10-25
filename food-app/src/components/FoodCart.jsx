import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function FoodCart({ food }) {
  // Redux işle food bilgilerini getir

  return (
    <Card sx={{ maxWidth: 345, mt: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://img.freepik.com/free-vector/hand-drawn-food-background_23-2148051451.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {food.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {food.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
