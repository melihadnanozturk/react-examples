import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginButtonGroup() {
  const navigate = useNavigate();

  return (
    <ButtonGroup
      color="secondary"
      variant="contained"
      aria-label="Basic button group"
      orientation="horizontal"
    >
      <Button onClick={() => navigate("/auth/login")}>Login</Button>
      <Button onClick={() => navigate("/auth")}>SignIn</Button>
    </ButtonGroup>
  );
}

export default LoginButtonGroup;
