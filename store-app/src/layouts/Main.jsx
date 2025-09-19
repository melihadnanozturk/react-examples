import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  return (
    <>
      <ToastContainer position="top-right" hideProgressBar theme="light" />
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  );
}
