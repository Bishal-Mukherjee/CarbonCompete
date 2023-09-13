import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Container,
  Grid,
  Divider,
} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import Device from "../../assets/svg/product/device.svg";
import MultipleDevice from "../../assets/svg/product/multipledevice.svg";
import Features from "../../assets/svg/product/features.svg";

const ContentComponent = ({ index, header, description }) => (
  <Stack direction={"row"} spacing={4}>
    <Stack direction={"row"} spacing={2}>
      <Divider orientation="vertical" sx={{ borderColor: "#000000" }} />
      <Typography sx={{ fontFamily: "Wix MadeFor Display", fontSize: 20 }}>
        {index}
      </Typography>
    </Stack>
    <Stack direction={"column"} spacing={1}>
      <Typography
        sx={{
          fontFamily: "Wix MadeFor Display",
          fontSize: 20,
          color: "#149BA1",
        }}
      >
        {header}
      </Typography>
      <Typography sx={{ fontFamily: "Wix MadeFor Display" }}>
        {description}
      </Typography>
    </Stack>
  </Stack>
);

const ProductComponent = () => {
  const mdUp = useResponsive("up", "md");
  const content = [
    {
      index: "01",
      header: "Carbon Canvas",
      description:
        "CarbonCompete brings innovative and critical changes in the product supply chain to support sustainability, enabling industries to drive competition and return on investment while reducing carbon emissions.",
    },
    {
      index: "02",
      header: "Carbon Canvas",
      description:
        "CarbonCompete brings innovative and critical changes in the product supply chain to support sustainability, enabling industries to drive competition and return on investment while reducing carbon emissions.",
    },
    {
      index: "03",
      header: "Carbon Canvas",
      description:
        "CarbonCompete brings innovative and critical changes in the product supply chain to support sustainability, enabling industries to drive competition and return on investment while reducing carbon emissions.",
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <div className={"container"}>
        <Box>
          <Stack
            direction={"column"}
            spacing={5}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Wix MadeFor Display",
                fontWeight: "bold",
                fontSize: 35,
              }}
            >
              The most accurate <br /> carbon accounting
            </Typography>

            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{
                    bgcolor: "#149BA1",
                    color: "white",
                    fontFamily: "Wix MadeFor Display",
                    fontWeight: 600,
                    width: 250,
                    height: 50,
                    border: "solid 1px white",
                  }}
                >
                  Get Started
                </Button>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{
                    color: "#FFFFFF",
                    border: "1px solid #00C9D2",
                    backgroundColor: "rgba(0, 0, 0, 0.40)",
                    width: 250,
                    height: 50,
                    textTransform: "capitalize",
                    fontFamily: "Wix MadeFor Display",
                  }}
                >
                  Request a demo
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          transform: "translate(0%, -20%)",
        }}
      >
        <Device
          {...(mdUp
            ? null
            : { width: 380, height: 380, viewBox: "0 0 1100 1200" })}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: -10,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Wix MadeFor Display",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          How Carbon Compete works
        </Typography>

        <Box sx={{ bgcolor: "#F3F3F3", width: "100%", mt: 10, p: 5 }}>
          <Container maxWidth>
            <Grid container spacing={3} alignItems={"center"}>
              <Grid item md={4} sm={12} xs={12}>
                <Stack direction={"column"} spacing={3}>
                  {content.map((content, index) => (
                    <Box key={index}>
                      <ContentComponent {...content} />
                    </Box>
                  ))}
                </Stack>
              </Grid>

              <Grid
                item
                md={8}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <MultipleDevice width={800} height={700} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          mt: 10,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Wix MadeFor Display",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          The most accurate carbon accounting
        </Typography>

        <Container>
          <Grid container spacing={0} sx={{ mt: 10 }}>
            <Grid item md={6} sm={12} xs={12}>
              <Device width={650} height={650} viewBox="0 0 800 800" />
            </Grid>

            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
            >
              <Stack direction={"column"} justifyContent={"center"} spacing={4}>
                <Typography
                  fontFamily={"Wix MadeFor Display"}
                  fontWeight={900}
                  fontSize={30}
                >
                  Carbon Canvas
                </Typography>
                <Typography fontFamily={"Wix MadeFor Display"}>
                  CarbonCompete brings innovative and critical changes in the
                  product supply chain to support sustainability, enabling
                  industries to drive competition and return on investment while
                  reducing carbon emissions.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ mt: 15 }}>
        <Grid container spacing={6}>
          <Grid item md={6} sm={12} xs={12}>
            <Stack direction={"column"} spacing={3}>
              <Typography
                fontFamily={"Wix MadeFor Display"}
                fontSize={30}
                fontWeight={800}
              >
                Why Choose Us?
              </Typography>

              <Typography fontFamily={"Wix MadeFor Display"} fontSize={20}>
                CarbonCompete brings innovative and critical changes in the
                product supply chain to support sustainability, enabling
                industries to drive competition and return on investment while
                reducing carbon emissions. CarbonCompete brings innovative and
                critical changes in the product supply chain to support
                sustainability, enabling industries to drive competition and
                return on investment while reducing carbon emissions.
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Features
              {...(mdUp
                ? { width: 500, height: 450, viewBox: "0 0 700 700" }
                : { width: 450, height: 400, viewBox: "0 0 700 700" })}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductComponent;
