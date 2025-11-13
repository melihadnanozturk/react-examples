"use client";
import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = "/";

  return (
    <AppBar position="static" sx={{ backgroundColor: blue[500] }}>
      <Toolbar>
        <Box>
          <Image src="vercel.svg" alt="Vercel Logo" height={40} width={20} />
          <Button
            component={Link}
            href="/"
            color={pathname === "/" ? "secondary" : "inherit"}
            sx={{ mr: 2 }}
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/about"
            color={pathname === "/about" ? "secondary" : "inherit"}
            sx={{ mr: 2 }}
          >
            About
          </Button>
          <Button
            component={Link}
            href="/about/users"
            color={pathname === "/about/users" ? "secondary" : "inherit"}
            sx={{ mr: 2 }}
          >
            Users
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
