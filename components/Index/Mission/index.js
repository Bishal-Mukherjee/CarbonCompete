import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import IndustryChallenge from "../../../assets/svg/mission/industrychallenge.svg";
import Greenwashing from "../../../assets/svg/greenwashing/greenwashing.svg";

const MissionComponent = () => {
  return (
    <>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box className={styles.missioncontainer}>
          <Grid
            spacing={1}
            container
            height={"100%"}
            sx={{ justifyContent: "flex-end", paddingRight: 15 }}
          >
            <Grid item md={5} sm={12} xs={12}>
              <Stack
                direction={"column"}
                justifyContent={"center"}
                width={"auto"}
                height={"100%"}
                spacing={5}
              >
                <Typography
                  sx={{
                    color: "#149BA1",
                    fontSize: "40px",
                    fontFamily: "Poppins",
                    fontWeight: 900,
                  }}
                >
                  OUR MISSION
                </Typography>

                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontFamily: "Poppins",
                  }}
                >
                  CarbonCompete strives to tackle current supply chain
                  sustainability issues, by empowering ecosystem players to make
                  informed choices on a product-level, giving them a competitive
                  advantage over other market players and driving behavioral
                  change throughout the ecosystem.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ mt: 60 }}>
        <Box sx={{ m: 5 }}>
          <Grid
            spacing={10}
            alignItems={"center"}
            justifyContent={"center"}
            container
            height={"100%"}
            sx={{ px: 15 }}
          >
            <Grid item md={6} sm={12} xs={12}>
              <Stack
                direction={"column"}
                justifyContent={"center"}
                width={"auto"}
                height={"100%"}
                spacing={3}
              >
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: 30,
                    fontFamily: "Poppins",
                    fontWeight: 900,
                  }}
                >
                  Industry Challenge
                </Typography>

                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: 20,
                    fontFamily: "Poppins",
                  }}
                >
                  With a growing carbon conscious customer base as well as an
                  imminent climate crisis, there is a pressing need to address
                  carbon accounting in the modern supply chain
                </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              md={6}
              sm={0}
              xs={0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 5,
              }}
            >
              <IndustryChallenge
                width={600}
                height={500}
                viewBox="0 0 800 500"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#F0F1F2", py: 5 }}>
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
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Greenwashing width={600} height={400} viewBox="0 0 650 600" />
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Stack
              direction={"column"}
              justifyContent={"center"}
              width={"auto"}
              height={"100%"}
              spacing={3}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: 30,
                  fontFamily: "Poppins",
                  fontWeight: 900,
                }}
              >
                Greenwashing
              </Typography>

              <Typography
                sx={{
                  color: "#000000",
                  fontSize: 20,
                  fontFamily: "Poppins",
                }}
              >
                An impending issue in current supply chain is the lack of data
                integrity. Today’s emissions data lacks reliability, as the
                ecosystem is not built to verify emissions data in real time.
                The lack of a trust authority and a standard confidence model
                allows greenwashing to become prevalent
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MissionComponent;
