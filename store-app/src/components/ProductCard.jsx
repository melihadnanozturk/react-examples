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

export default function ProductCard({ product }) {
  return (
    <p>
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
              {product.price} ₺
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="primary" size="large">
            <FavoriteBorderIcon />
          </IconButton>
          <Button>Sepete Ekle</Button>
        </CardActions>
      </Card>
    </p>
  );
}
