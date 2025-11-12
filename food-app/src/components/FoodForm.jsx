import { Grid, Stack, TextField, Typography } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";

function FoodForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid
      container
      spacing={5}
      alignItems="stretch"
      justifyContent="space-between"
    >
      <Grid item sx={{ height: "100%" }}>
        <Stack spacing={3}>
          <Typography variant="h5">Yemek Bilgileri</Typography>
          <TextField
            {...register("foodName", {
              required: "Yemeğin İsmi Zorunludur!",
              minLength: 3,
              maxLength: 25,
            })}
            label="Yemek İsmi"
            error={!!errors.foodName}
            helperText={errors.foodName?.message}
          />
          <TextField
            {...register("people", {
              required:
                "Yemeğin Kaç Kişilik Olduğu Bilgisi Eklenmesi Zorunludur!",
            })}
            label="Kaç Kişilik"
            error={!!errors.people}
            helperText={errors.people?.message}
          />
          <TextField
            {...register("description", {
              required: "Açıklama Eklenmesi Zorunludur!",
              minLength: 5,
              maxLength: 25,
            })}
            label="Açıklama"
            helperText={errors.description?.message}
            error={!!errors.description}
            multiline
            rows={4}
            fullWidth
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default FoodForm;
