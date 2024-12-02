import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffff" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isSmallScreen ? "10px" : "20px",
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/images/habot.png"
              alt="logo"
              style={{
                height: isSmallScreen ? "30px" : "50px",
                width: "auto",
              }}
            />
          </Box>

          {/* Buttons Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: isSmallScreen ? "10px" : "20px",
              flexWrap: "nowrap",
            }}
          >
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                fontSize: isSmallScreen ? "10px" : "14px",
              }}
            >
              FIND SUPPLIES
            </Button>
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                fontSize: isSmallScreen ? "10px" : "14px",
              }}
            >
              Find Service Tags
            </Button>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#008000",
                border: "2px solid #008000",
                padding: isSmallScreen ? "5px 10px" : "10px 20px",
                borderRadius: "5px",
                fontSize: isSmallScreen ? "10px" : "14px",
                textTransform: "none",
              }}
            >
              Login / Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
