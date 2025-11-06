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
import { Controller, useForm } from "react-hook-form";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { login, signIn } from "../pages/slices/AccountSlice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token, loading, error } = useSelector((state) => state.account);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "", roles: [] },
  });

  const handleClichButton = async (data) => {
    try {
      await dispatch(
        signIn({
          username: data.username,
          password: data.password,
          roles: data.roles,
        })
      ).unwrap();
      navigate("/");
    } catch {
      console.log(data);
    }
  };

  return (
    <Form maxWidth={"xs"} onSubmit={handleSubmit(handleClichButton)}>
      <Stack spacing={5} alignItems={"center"}>
        <Avatar sx={{ width: 50, height: 50, bgcolor: deepPurple[500] }}>
          <PersonAddIcon />
        </Avatar>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Kayıt Ol
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
            <Controller
              name="roles"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  label="Admin"
                  control={
                    <Checkbox
                      // Checkbox'ın seçili olup olmadığını 'roles' dizisi belirliyor
                      checked={field.value.includes("ADMIN")}
                      onChange={(e) => {
                        const currentRoles = field.value;
                        const role = "ADMIN";
                        let newRoles;
                        if (e.target.checked) {
                          // Eğer seçildiyse, diziye ekle
                          newRoles = [...currentRoles, role];
                        } else {
                          // Eğer seçim kaldırıldıysa, diziden çıkar
                          newRoles = currentRoles.filter((r) => r !== role);
                        }
                        // react-hook-form'un state'ini yeni dizi ile güncelle
                        field.onChange(newRoles);
                      }}
                    />
                  }
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="roles"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  label="Tester"
                  control={
                    <Checkbox
                      checked={field.value.includes("TEST")}
                      onChange={(e) => {
                        const currentRoles = field.value;
                        const role = "TEST";
                        let newRoles;
                        if (e.target.checked) {
                          newRoles = [...currentRoles, role];
                        } else {
                          newRoles = currentRoles.filter((r) => r !== role);
                        }
                        field.onChange(newRoles);
                      }}
                    />
                  }
                />
              )}
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

export default RegistrationForm;
