import React from "react";
import { Box, Typography, Stack, Container, Grid } from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";
import CircularEconomy from "../../../assets/svg/emissions/circulareconomy.svg";
import CarbonSupplyChain from "../../../assets/svg/features/supplychain.svg";

const ContributionCard = ({ title, image, description }) => (
  <Stack
    direction={"column"}
    alignItems={"flex-start"}
    spacing={5}
    sx={{ bgcolor: "#D9D9D9", height: "100%", p: 3 }}
  >
    <Box>
      <Typography
        sx={{
          fontFamily: "Wix MadeFor Display",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
    </Box>
    <Box sx={{ width: "70%" }}>
      <img src={image} alt={title} style={{ width: "100%" }} />
    </Box>
    <Box>
      <Typography
        sx={{ fontFamily: "Wix MadeFor Display", textAlign: "justify" }}
      >
        {description}
      </Typography>
    </Box>
  </Stack>
);

const EmissionsComponent = () => {
  const mdUp = useResponsive("up", "md");

  const contributioncards = [
    {
      title:
        "Building resilient infrastructure and promoting sustainable industrialization",
      image: "/images/contributions/image_2.png",
      description:
        "We plan to develop tools that could help regulate the industry in order to make it sustainable through informed use of resources, increased use of technologies and industrial processes that take into account their impact on the environment.",
    },
    {
      title:
        "Guarantee access to reliable, sustainable and modern energy services",
      image: "/images/contributions/image_3.png",
      description:
        "It is essential to improve the energy efficiency of industrial tools by providing them with reliable consumption data.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F6F9FD" }}>
      <Box display={"flex"} justifyContent={"center"}>
        <CircularEconomy
          //   {...(mdUp
          //     ? null
          //     : { width: 500, height: 500, viewBox: "0 50 1800 2200" })}

          width={1500}
          height={1000}
          viewBox={"0 0 2000 1200"}
        />
      </Box>

      <Box sx={{ bgcolor: "#F0F1F2", p: 5 }}>
        <Container>
          <Box sx={{ mt: 0 }}>
            <Typography
              sx={{
                fontFamily: "Wix MadeFor Display",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Contribution to the United Nation Goals On Sustainable Development
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              bgcolor: "#D9D9D9",
              mt: 5,
              p: 5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Wix MadeFor Display",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Establish sustainable consumption and <br /> production patterns
              </Typography>
            </Box>

            <Grid container sx={{ mt: 3 }}>
              <Grid item md={6} sm={12} xs={12}>
                <img width={"60%"} src={"/images/contributions/image_1.png"} />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography
                  sx={{
                    fontFamily: "Wix MadeFor Display",
                    fontSize: 20,
                    textAlign: "justify",
                  }}
                >
                  How to achieve sustainable management and rational use of
                  natural resources? How can we reduce food losses throughout
                  the production and supply chain or have rational use of
                  chemicals or reduce waste throughout their life cycle? Our
                  objective is to have producers adopt sustainable development
                  practices by including information related to energy
                  expenditure and greenhouse gas emissions per product or
                  service delivered. Our ultimate goal is to allow every
                  individual to know their impact based on their activity.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Grid
            spacing={3}
            container
            sx={{ mt: 5, justifyContent: "space-between" }}
          >
            {contributioncards.map((c, index) => (
              <Grid item md={6} sm={12} xs={12} key={index}>
                <ContributionCard {...c} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: -10,
        }}
      >
        <CarbonSupplyChain
          width={1600}
          height={2000}
          viewBox={"0 0 1900 2300"}
        />
      </Box>
    </Box>
  );
};

export default EmissionsComponent;
