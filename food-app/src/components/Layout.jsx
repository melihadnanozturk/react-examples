import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  );
}
