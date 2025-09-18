import { Grid } from "@mui/material";

export default function ProductList({ param }) {
  return (
    <Grid container spacing={2}>
      {param.map((product) => (
        <Grid
          backgroundColor="primary.light"
          size={{ xs: 6, md: 4, lg: 3 }}
          key={product.id}
        >
          {product.title}
        </Grid>
      ))}
    </Grid>
  );
}
