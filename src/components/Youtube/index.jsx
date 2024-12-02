import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Material UI Check Circle icon
import "./Youtube.css"; // Import external CSS file

const YoutubeSection = () => {
  return (
    <div className="container">
      {/* Outer Blue Container with Fixed Width */}
      <Box className="blue-container">
        <Grid container spacing={2} alignItems="stretch">
          {/* First Section: Image with Video */}
          <Grid item xs={12} md={7} className="video-section">
            <img src="/images/Group 32.png" alt="youtubeIcon" />
          </Grid>

          <Grid item xs={12} md={5} className="topics-section">
            <Box className="topic-box buyer-box">
              <h2>Buyer</h2>
              <ul className="bullet-points">
                <li>
                  <img src="/images/checked.png" alt="check" />
                  Requirements
                </li>
                <li>
                  <img src="/images/checked.png" alt="check" />
                  Bullet point 2
                </li>
                <li>
                  <img src="/images/checked.png" alt="check" />
                  Bullet point 3
                </li>
              </ul>
            </Box>

            <Box className="topic-boxx supplier-box">
              <h2 style={{ textDecoration: "none", color: "white" }}>
                Supplier
              </h2>

              <ul className="bullet-pointss">
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Bullet point 1
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Bullet point 2
                </li>
                <li>
                  <CheckCircleIcon className="check-icon" />
                  Bullet point 3
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default YoutubeSection;
