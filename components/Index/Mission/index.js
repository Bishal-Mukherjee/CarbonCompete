import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import styles from "./index.module.css";
import IndustryChallenge from "../../../assets/svg/mission/industrychallenge.svg";

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
          <Grid spacing={1} container height={"100%"}>
            <Grid item md={6} sm={0} xs={0} />
            <Grid item md={4} sm={12} xs={12}>
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
                    fontFamily: "Wix MadeFor Display",
                    fontWeight: 900,
                  }}
                >
                  OUR MISSION
                </Typography>

                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: 20,
                    fontFamily: "Wix MadeFor Display",
                    textAlign: "justify",
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

      <Box sx={{ mt: 50 }}>
        <Container>
          <Grid
            spacing={8}
            alignItems={"center"}
            justifyContent={"center"}
            container
            height={"100%"}
          >
            <Grid item md={6} sm={12} xs={12}>
              <Stack
                direction={"column"}
                justifyContent={"center"}
                width={"auto"}
                height={"100%"}
                spacing={5}
              >
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: "40px",
                    fontFamily: "Wix MadeFor Display",
                    fontWeight: 900,
                  }}
                >
                  Industry Challenge
                </Typography>

                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: 20,
                    fontFamily: "Wix MadeFor Display",
                    textAlign: "justify",
                  }}
                >
                  With a pressing need to reach climate goals, growing carbon
                  conscious customer bases but most importantly, a worsening
                  climate change, the need to address the following carbon
                  accounting in the supply chain is imminent.
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
              }}
            >
              <IndustryChallenge viewBox="0 0 800 300" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#F0F1F2", p: 5 }}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={5}
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
            <img
              src={"/images/greenwashing/greenwashing.png"}
              style={{ width: 400, height: 400 }}
            />
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Stack
              direction={"column"}
              justifyContent={"center"}
              width={"auto"}
              height={"100%"}
              spacing={5}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "40px",
                  fontFamily: "Wix MadeFor Display",
                  fontWeight: 900,
                }}
              >
                Greenwashing
              </Typography>

              <Typography
                sx={{
                  color: "#000000",
                  fontSize: 20,
                  fontFamily: "Wix MadeFor Display",
                  textAlign: "justify",
                }}
              >
                An impending issue in current supply chain is the lack of data
                integrity. Today’s emissions data lacks reliability, as the
                ecosystem is not built to verify emissions data in real time.
                The lack of a trust authority and a standard confidence model
                allows greenwashing to become prevalent across the ecosystem.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MissionComponent;
