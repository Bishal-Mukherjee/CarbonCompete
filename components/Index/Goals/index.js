import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  styled,
  Link,
} from "@mui/material";
import useResponsive from "../../../hooks/useResponsive";
import CarbonIntelDevice from "../../../assets/svg/carbonintel/device.svg";
import FeaturesGraph from "../../../assets/svg/features/features.svg";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#159BA1",
  border: "1px solid #159BA1",
  borderRadius: 0,
  width: 210,
  height: 40,
  textTransform: "capitalize",
  fontFamily: "Wix MadeFor Display",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#159BA1",
  border: "1px solid #159BA1",
  borderRadius: 0,
  width: 210,
  height: 40,
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  justifyContent: "center",
  fontFamily: "Wix MadeFor Display",
  textDecoration: "none",
}));

const FeatureCard = ({ title, description, link }) => (
  <Box sx={{ width: 350 }}>
    <Stack spacing={3} direction={"column"} justifyContent={"center"}>
      <Typography
        sx={{
          color: "#082930",
          fontSize: 20,
          fontFamily: "Wix MadeFor Display",
          fontWeight: 900,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#082930",
          fontSize: 18,
          fontFamily: "Wix MadeFor Display",
          textAlign: "justify",
        }}
      >
        {description}
      </Typography>

      <StyledLink href={link}>READ MORE</StyledLink>
    </Stack>
  </Box>
);

const GoalsComponent = () => {
  const mdUp = useResponsive("up", "md");

  const carbonintelfeatures = [
    { text: "Accurate emissions calculation & accounting." },
    { text: "Track & Trace product emissions across the supply chain." },
    {
      text: "Management of carbon footprint and insights both upstream and downstream.",
    },
    {
      text: " Reporting of product life cycle assessment instantly with an intelligent data driven model.",
    },
  ];

  const features = [
    {
      title: "Carbon Score",
      description:
        "With our unique approach to carbon accounting, we will enable the ecosystem to deliver their product’s real environmental footprint with our Carbon Score.",
      link: "",
    },
    {
      title: "Carbon confidence Score",
      description:
        "Show your commitment to data integrity, transparency and veracity and build trust with your customer base.",
      link: "",
    },
    {
      title: "Carbon Canvas",
      description:
        "Trace your product's emissions across its supply chain and optimise your product environmental footprint.",
      link: "",
    },
    {
      title: "Carbon Advise",
      description:
        "A proprietary recommendation engine to propose solutions to reduce your emissions and  reach your sustainability targets.",
      link: "",
    },
    {
      title: "LCA and GHG Report generation",
      description:
        "With our data driven LCA model, generate real-time LCA dashboards and show case your sustainability achievements with globally accepted sustainability reports.",
      link: "",
    },
  ];

  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}></Box>

        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <CarbonIntelDevice
            width={1200}
            height={600}
            viewBox="0 0 1700 1100"
          />
          <StyledButton> KNOW MORE </StyledButton>
        </Stack>

        <Stack sx={{ mt: 5 }} alignItems={"center"} spacing={5}>
          <Typography
            sx={{
              fontFamily: "Wix MadeFor Display",
              fontWeight: 900,
              fontSize: 30,
              textAlign: "center",
            }}
          >
            CarbonIntel is an innovative SaaS platform, addressing carbon
            emissions across supply chains at a product-level. Equipped with
            dynamic features, CarbonIntel enables
          </Typography>

          <ul>
            {carbonintelfeatures.map((f, index) => (
              <li key={index} style={{ color: "#149BA1" }}>
                <Typography
                  sx={{
                    fontFamily: "Wix MadeFor Display",
                    fontSize: 20,
                    color: "#000000",
                  }}
                >
                  {f.text}
                </Typography>
              </li>
            ))}
          </ul>
        </Stack>
      </Container>

      <Container sx={{ mt: 20, overflow: "hidden" }}>
        <Typography
          sx={{
            color: "#373C3F",
            fontSize: 25,
            fontFamily: "Wix MadeFor Display",
            fontWeight: 900,
          }}
        >
          Our Features
        </Typography>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item md={4} sm={12} xs={12}>
            <FeatureCard {...features[0]} />
          </Grid>

          <Grid item md={8} sx={{ height: 400, mt: -10 }}>
            <FeaturesGraph width={900} height={600} viewBox="0 0 800 1000" />
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ mt: 10 }}>
          {features.splice(1, features.length - 1).map((feature, index) => (
            <Grid item md={6} sm={12} xs={12} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default GoalsComponent;
