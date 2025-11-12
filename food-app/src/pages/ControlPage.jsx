import React, { useDebugValue, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FoodForm from "../components/FoodForm";
import { FormProvider, useForm } from "react-hook-form";
import ImageForm from "../components/ImageForm";
import ControlSummary from "../components/ControlSummary";
import { useDispatch, useSelector } from "react-redux";
import { postNewFood } from "./slices/FoodSlice";

const steps = ["Yemek Bilgileri", "Resim Yükleme", "Özet"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FoodForm />;
    case 1:
      return <ImageForm />;
    case 2:
      return <ControlSummary />;
  }
}

function ControlPage() {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      foodName: "",
      people: "",
      description: "",
      imageUrl: "",
    },
  });

  // Her adım için doğrulanacak alanları tanımlar
  const stepFields = [
    ["foodName", "people", "description"], // Adım 0
    ["imageUrl"], // Adım 1
  ];

  // Form gönderildiğinde çalışacak fonksiyon
  const onSubmit = (data) => {
    alert("Form başarıyla gönderildi! Detaylar için console'u kontrol edin.");
    dispatch(
      postNewFood({
        name: data.foodName,
        people: data.people,
        desc: data.description,
        image: data.imageUrl,
      })
    );
    console.log("Form Data:", data);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // "İleri" butonuna tıklandığında çalışır
  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      // Son adımdaysak, formu gönder
      await methods.handleSubmit(onSubmit)();
    } else {
      // Değilse, mevcut adımın alanlarını doğrula
      const fields = stepFields[activeStep];
      const isStepValid = await methods.trigger(fields);

      // Doğrulama başarılıysa bir sonraki adıma geç
      if (isStepValid) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  function handlePrevious() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  return (
    <FormProvider {...methods}>
      <Paper width="100%" height="100%">
        <Grid sx={{ width: "100%", p: 2 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Typography>Yemek Eklendi...</Typography>
          ) : (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                {getStepContent(activeStep)}
              </Box>

              <Box
                alignItems={"center"}
                sx={[
                  { display: "flex" },
                  activeStep !== 0
                    ? { justifyContent: "space-between" }
                    : { justifyContent: "flex-end" },
                  { pt: 2 },
                ]}
              >
                {activeStep !== 0 && (
                  <Button
                    startIcon={<ArrowBackIcon />}
                    variant="contained"
                    onClick={handlePrevious}
                  >
                    Geri
                  </Button>
                )}
                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="contained"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Tamamla" : "İleri"}
                </Button>
              </Box>
            </>
          )}
        </Grid>
      </Paper>
    </FormProvider>
  );
}

export default ControlPage;
