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
            <Globe width={mdUp ? 450 : 400} height={mdUp ? 450 : 400} />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -35%)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Box>
                <DownArrow width={mdUp ? 90 : 80} height={90} />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Wix MadeFor Display",
                    fontSize: 30,
                  }}
                >
                  Discover the new
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Wix MadeFor Display",
                    fontWeight: 900,
                    fontSize: 40,
                  }}
                >
                  Carbon accounting <br /> paradigm
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
            <img
              style={{ height: 350 }}
              src="https://s3-alpha-sig.figma.com/img/7a85/783b/0d740eb446e6dbb4314975b350c9ea2e?Expires=1694390400&Signature=kJ2RTQDs4RHCqGzLd2fcUTYiJbLj8eeu~nugw7ILB3HKa~sOtuQzq8l~1n2dklQs7aOLX~BsxW7r1A6HuJQqv3Ms3oZTylRbFmx00QCvlDCJkGtjjlPJ0Z9iwCkF4JVWGjrCoxdEfJl0Dhm-Cg~mX4TWE0Hgwcr2FGf7q3w112md~XYSsBuLcRupo~f4I4OTk28uy0xOkUELUzbUGs2p7w-asnYrg2izH2hPiImJM2z3D3W7xg9hstFQb7DkIps7bugqy0MyyRmo~YI0y-yiOM0Fr~F86A0QocvWdNch6dqUfjjzBRki1F1sMy7T9xCZ2X7nyB65mSsP2VYBMwuYTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                transform: "translate(0%, -140%)",
                position: "absolute",
                width: "100%",
              }}
            >
              <Stack direction={"column"}>
                <DownArrow width={70} height={70} />
                <Typography
                  sx={{
                    fontFamily: "Wix MadeFor Display",
                    fontWeight: 900,
                    fontSize: 15,
                    color: "#FFFFFF",
                  }}
                >
                  Reducing <br /> Carbon <br /> Emissions.
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
