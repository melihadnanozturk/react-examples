import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";
import { currencyTRY } from "../utils/price_format";
import request from "../api/apiClient";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(false);
  function handleAddItem(productId) {
    setLoading(true);
    request.cart
      .addItem(productId)
      .then((cart) => console.log("POST_CARD", cart))
      .catch((error) => console.log("POST_CARD_ERROR : ", error))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Card>
        <CardActionArea component={NavLink} to={"/products/" + product.id}>
          <CardMedia
            sx={{ height: 160, backgroundSize: "contain" }}
            image={`http://localhost:5000/images/${product.image}`}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6" component="h2" color="primary.dark">
              {product.title}
            </Typography>
            <Typography variant="body1" color="secondary.dark">
              {currencyTRY.format(product.price)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="primary" size="large">
            <FavoriteBorderIcon />
          </IconButton>
          <Button loading={loading} onClick={() => handleAddItem(product.id)}>
            Sepete Ekle
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
