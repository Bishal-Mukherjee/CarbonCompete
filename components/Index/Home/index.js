import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import useResponsive from "../../../hooks/useResponsive";

// @assets
import Globe from "../../../assets/svg/home/globe.svg";
import DownArrow from "../../../assets/svg/home/downarrow.svg";

const HomeComponent = () => {
  const mdUp = useResponsive("up", "md");
  return (
    <Box sx={{ width: "100%", height: mdUp ? "95vh" : "85vh" }}>
      <Box className="container">
        <Box>
          <Box
            sx={{
              transform: `translate(0%, ${mdUp ? 40 : 0}%)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div id="globe">
              <Globe width={mdUp ? 450 : 400} height={mdUp ? 450 : 400} />
            </div>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Box>
                <div id="float">
                  <a href="#carbonintel">
                    <DownArrow width={mdUp ? 90 : 80} height={90} />
                  </a>
                </div>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: 900,
                    fontSize: 40,
                    // textAlign: "center",
                  }}
                >
                  A new carbon <br /> accounting paradigm
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Stack
          sx={{ display: { lg: "flex", sm: "none", xs: "none" } }}
          direction={"column"}
          alignItems={"center"}
        >
          <Box
            sx={{
              transform: "translate(0%, 15%)",
              display: { lg: "block", sm: "none", xs: "none" },
            }}
          >
            <img style={{ height: 350 }} src="/images/scenery/scenery.png" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                transform: "translate(0%, -200%)",
                position: "absolute",
                width: "100%",
              }}
            >
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 900,
                    fontSize: 15,
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Reducing <br /> Carbon <br /> Emissions
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeComponent;
