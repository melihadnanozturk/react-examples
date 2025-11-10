import React, { useState } from "react";
import { Box, Container, Grid, Paper, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import request from "../api/apiClient";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function FoodAdminPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      foodName: "",
      people: "",
      description: "",
      imageUrl: "",
    },
  });

  const imageUrl = watch("imageUrl");

  const handleClickButton = async (data) => {
    try {
      console.log(data);
      await request.foods.create({
        name: data.foodName,
        people: data.people,
        desc: data.description,
        image: data.imageUrl,
      });
      alert("Yemek basariyla kaydedildi :)");
      navigate("/");
    } catch (err) {
      alert("Bir sorun olustu, console'u kontrol et");
      console.error("Error creating food item:", err);
    }
  };

  return (
    <div className="container">
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Yemek Ekleme Sayfası
        </Typography>

        <Paper sx={{ p: 4 }}>
          <Box component="form" onSubmit={handleSubmit(handleClickButton)}>
            <Grid
              container
              spacing={5}
              alignItems="stretch"
              justifyContent="space-between"
            >
              <Grid item xs={12} md={6} sx={{ height: "100%" }}>
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
            </Grid>
            <Box textAlign="center" sx={{ m: 3 }}>
              <Button variant="contained" type="submit">
                Kayıt Et
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
