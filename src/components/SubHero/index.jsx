import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./SubHero.css";

const SubHero = () => {
  return (
    <div className="container">
      <div style={{ padding: "20px", textAlign: "start" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="subhero-header">
              <h1>
                Ready to dive into <span>HABOT?</span>
              </h1>
              <p>
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </p>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "100%", md: "317px" },
                  textAlign: "center",
                  backgroundColor: "#00732F",
                  padding: "15px",
                  border: "2px solid transparent", // Initial border
                  "&:hover": {
                    backgroundColor: "white", // Change to white on hover
                    borderColor: "#00732F", // Green border on hover
                    color: "#00732F",
                  },
                }}
              >
                <b>
                  Sign up Today!{" "}
                  <ArrowForwardIcon sx={{ marginLeft: "20px" }} />
                </b>
              </Button>
            </div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} className="locations">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "19px",
                    borderColor: "#E77607",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#E77607",
                      color: "#fff",
                    },
                  }}
                >
                  Abu Dhabi
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "19px",
                    borderColor: "#E77607",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#E77607",
                      color: "#fff",
                    },
                  }}
                >
                  Dubai
                </Button>
              </Grid>

              {/* Second Row */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "19px",
                    borderColor: "#E77607",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#E77607",
                      color: "#fff",
                    },
                  }}
                >
                  Sharjah & Ajman
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "19px",
                    borderColor: "#E77607",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#E77607",
                      color: "#fff",
                    },
                  }}
                >
                  Fujairah
                </Button>
              </Grid>

              {/* Third Row */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "19px",
                    borderColor: "#E77607",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#E77607",
                      color: "#fff",
                    },
                  }}
                >
                  Ras Al Khaimah
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    padding: "19px",
                    borderColor: "#E77607",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "#E77607",
                      color: "#fff",
                    },
                  }}
                >
                  Umm Al Quwain
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SubHero;
