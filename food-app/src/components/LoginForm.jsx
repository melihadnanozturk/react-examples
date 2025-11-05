import {
  Avatar,
  Box,
  Button,
  Grid,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Form from "./Form";
import { useForm } from "react-hook-form";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../pages/slices/AccountSlice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.account);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const handleClichButton = async (data) => {
    try {
      dispatch(login({ username: data.username, password: data.password }));
    } catch {
      console.log(data);
    }
  };

  return (
    <Form maxWidth={"xs"} onSubmit={handleSubmit(handleClichButton)}>
      <Stack spacing={5} alignItems={"center"}>
        <Avatar sx={{ width: 50, height: 50, bgcolor: deepPurple[500] }}>
          <LockOpenIcon />
        </Avatar>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Login Form
        </Typography>
        <TextField
          fullWidth
          sx={{ maxWidth: "100%" }}
          {...register("username", {
            required: "Username!",
            minLength: 3,
            maxLength: 25,
          })}
          label="username"
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          fullWidth
          type="password"
          {...register("password", {
            required: "Şifre Zorunludur!",
            minLength: 3,
            maxLength: 25,
          })}
          label="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Grid container spacing={2} size={12}>
          <Grid item>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Admin"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Tester"
            />
          </Grid>
        </Grid>
      </Stack>

      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      <Box textAlign="center" sx={{ m: 3 }}>
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Giriş Yap"}
        </Button>
      </Box>
    </Form>
  );
}
