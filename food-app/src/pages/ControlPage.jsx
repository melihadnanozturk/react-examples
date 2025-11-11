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
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = ["Yemek Bilgiler", "Resim Yükleme", "Özet"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Typography>"Yemek Bilgiler"</Typography>;
    case 1:
      return <Typography>"Resim Yükleme"</Typography>;
    case 2:
      return <Typography>"Özet"</Typography>;
  }
}

function ControlPage() {
  const [activeStep, setActiveSteps] = useState(0);

  function handleNext() {
    setActiveSteps((prevActiveStep) => prevActiveStep + 1);
  }

  function handlePrevious() {
    setActiveSteps((prevActiveStep) => prevActiveStep - 1);
  }

  return (
    <Paper width="100%" height="100%">
      <Grid sx={{ width: "100%", p: 2 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
          {getStepContent(activeStep)}
        </Stepper>
        {activeStep === steps.length ? (
          <Typography>Yemek Eklendi...</Typography>
        ) : (
          <Box
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
              İleri
            </Button>
          </Box>
        )}
      </Grid>
    </Paper>
  );
}

export default ControlPage;
