import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Lottie from "react-lottie";
import GreenWashing from "../../../assets/animations/lackofaccounting.json";
import Automation from "../../../assets/animations/lackofautomation.json";

const FeaturesComponent = () => {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <Grid
          spacing={10}
          alignItems={"center"}
          justifyContent={"center"}
          container
          height={"100%"}
          sx={{ px: 15, bgcolor: "#ffffff" }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Stack
              spacing={3}
              direction={"column"}
              justifyContent={"center"}
              sx={{ height: "100%" }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: 30,
                  fontFamily: "Poppins",
                  fontWeight: 900,
                }}
              >
                Lack of Scope 3 Accounting
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}
              >
                Scope 3 emissions generally account for the highest proportion
                of a company’s total emissions output however, they are often
                the hardest to account for. Although many ecosystem players want
                to increase their scope of accounting, they lack proper carbon
                accounting and calculation methodologies to do so
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: GreenWashing,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 5, bgcolor: "#ffffff" }}>
        <Grid
          spacing={10}
          alignItems={"center"}
          justifyContent={"center"}
          container
          height={"100%"}
          sx={{ px: 15 }}
        >
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 450,
            }}
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Automation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
            />
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Stack spacing={3} direction={"column"} sx={{ height: "100%" }}>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: 30,
                  fontFamily: "Poppins",
                  fontWeight: 900,
                }}
              >
                Lack Of Automation
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}
              >
                Current life cycle assessment reporting is costly, laborious,
                and time-consuming process which yields referential data rather
                than real-time data.In addition, product life cycle assessment
                reports are often analogous to financial models, often employing
                a top-down method for life cycle assessment. These factors
                degrade the veracity of current product LCA reports, becoming a
                tool purely for sustainability reporting.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FeaturesComponent;
