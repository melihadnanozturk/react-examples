import { Box, Container, Grid, Paper, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";

function ImageForm() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const imageUrl = watch("imageUrl");

  return (
    <Grid item xs={12} md={6} sx={{ height: "100%", width: 300 }}>
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Typography variant="h5">Yemek Görüntüsü</Typography>
        <TextField
          {...register("imageUrl", {
            required: "Resim URL zorunludur!",
          })}
          label="Resim Url"
          error={!!errors.imageUrl}
          helperText={errors.imageUrl?.message}
          sx={{ width: "100%" }}
        />
        {imageUrl ? (
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={imageUrl}
              alt="Yemek Görseli"
              sx={{ objectFit: "cover", borderRadius: 2 }}
            />
          </Card>
        ) : (
          <></>
        )}
      </Stack>
    </Grid>
  );
}

export default ImageForm;
