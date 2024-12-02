import React from "react";
import { TextField, IconButton, Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import style from "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero Banner with Background Image and Gradient */}
      <div className="herobanner">
        <div className="herobanner-text">
          <h1 className="text-center intro">
            Are You a Supplier?
            <br />
            <span className=" intro-sub">Explore Matching Opportunities.</span>
          </h1>
        </div>

        <div className="input-container">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                placeholder="Search your required service here"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <img src="/images/suitcase 1.png" alt="services" />
                    </IconButton>
                  ),
                }}
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "5px", // Set background to white
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderRadius: "3px", // Remove the blue border
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // Remove the border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // Remove the border when focused
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                placeholder="Search your desired location here"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <img src="/images/location.png" alt="location" />
                    </IconButton>
                  ),
                }}
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                      borderRadius: "3px",
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />
            </Grid>
            <div className="hero-btn">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00732F",
                  padding: "15px 30px",
                  fontFamily: "Poppins",
                }}
              >
                Search
              </Button>
            </div>
          </Grid>
        </div>

        {/* Are You a Buyer? Section */}
        <div className="buyer-question">
          <p>
            Are you a Buyer?{" "}
            <span className="buyer-link">
              Click here if you are looking to post a requirement.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
