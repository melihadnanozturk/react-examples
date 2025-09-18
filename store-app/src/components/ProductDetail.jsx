import { Grid, Paper, Typography } from "@mui/material";

export default function ProductDetail({ product }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ lg: 4, md: 5, sm: 6, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <img
            src={`http://localhost:5000/images/${product?.image}`}
            alt={product?.name}
            style={{ width: "100% " }}
          />
        </Paper>
      </Grid>
      <Grid size={{ ld: 8, md: 7, sm: 6, xs: 12 }}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography component="h1" variant="h4" color="secondary.dark">
            {product?.title}
          </Typography>
          <Typography component="body1">{product?.description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
