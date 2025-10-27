import React, { useState } from "react";
import { Grid, Stack } from "@mui/material";
import { TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import request from "../api/apiClient";

export default function FoodAdminPage() {
  const [formData, setFormData] = useState({
    name: "",
    people: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const result = await request.foods.create({
        name: formData.name,
        people: formData.people,
        desc: formData.description,
        image: formData.imageUrl,
      });
      alert("Yemek basariyla kaydedildi :)");
    } catch (err) {
      alert("Bir sorun olustu, console'u kontrol et");
      console.error("Error creating food item:", err);
    }
  };

  return (
    <div className="container">
      <h1>Food Admin Page</h1>
      <Grid container spacing={50}>
        <Grid item xs={12} md={6}>
          <Stack spacing={5}>
            <TextField
              label="Yemek İsmi"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Kaç Kişilik?"
              variant="outlined"
              name="people"
              value={formData.people}
              onChange={handleChange}
            />
            <TextField
              label="Açıklama"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <TextField
              label="Resim Linki"
              variant="outlined"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={formData.imageUrl}
                title="green iguana"
              />
            </Card>
            <Button variant="contained" onClick={handleSubmit}>
              Kaydet
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
