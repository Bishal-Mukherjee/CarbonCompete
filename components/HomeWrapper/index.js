import React from "react";
import { Box } from "@mui/material";

import useResponsive from "../../hooks/useResponsive";
import Globe from "../../assets/svg/home/globe.svg";

const HomeWrapper = ({ children }) => {
  const mdUp = useResponsive("up", "md");
  return (
    <Box sx={{ width: "100%", height: mdUp ? "95vh" : "85vh" }}>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "120vh",
          }}
        >
          <Box id="globe">
            <Globe width={mdUp ? 450 : 400} height={mdUp ? 450 : 400} />
          </Box>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default HomeWrapper;
