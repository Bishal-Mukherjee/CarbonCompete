import React from "react";
import { Box, Grid, Link, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import CarbonCompete from "../../assets/svg/footer/footerlogo.svg";
import FacebookLogo from "../../assets/svg/footer/facebook.svg";
import LinkedInLogo from "../../assets/svg/footer/linkedin.svg";
import TwitterLogo from "../../assets/svg/footer/twitter.svg";

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(6),
  height: theme.spacing(6),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  border: "solid 1px #7D7AD8",
}));

const FooterComponent = () => {
  const router = useRouter();

  const sociallinks = [
    {
      icon: <LinkedInLogo />,
      link: "https://www.linkedin.com/company/carboncompete/",
    },
    {
      icon: <FacebookLogo />,
      link: "https://www.facebook.com/people/CarbonCompete/100086638082638/",
    },
    {
      icon: <TwitterLogo />,
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fcarboncompete",
    },
  ];

  const navlinks = [
    { label: "Home", link: "/" },
    { label: "Whitepaper", link: "/whitepaper" },
    { label: "Product", link: "/product" },
    { label: "Careers", link: "/careers" },
    { label: "Contact", link: "/contact" },
    { label: "About Us", link: "/aboutus" },
  ];

  return (
    <Box sx={{ bgcolor: "#000000", width: "100%" }}>
      <Box sx={{ p: 5 }}>
        <Grid
          container
          spacing={5}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid item md={8} sm={12} xs={12}>
            <Stack direction={"column"} spacing={4}>
              <Box>
                <CarbonCompete />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    color: "#FFFFFF",
                  }}
                >
                  CarbonCompete brings innovative and critical changes in the
                  product supply chain to support sustainability, enabling
                  industries to drive competition and return on investment while
                  reducing carbon emissions. CarbonCompete brings innovative and
                  critical changes in the product supply chain to support
                  sustainability, enabling industries to drive competition and
                  return on investment while reducing carbon emissions.
                </Typography>
              </Box>

              <Stack direction={"row"} spacing={5}>
                {sociallinks.map((link, index) => (
                  <Box key={index}>
                    <a href={link.link} target="__blank">
                      <StyledIcon>{link.icon}</StyledIcon>
                    </a>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack direction={"column"} spacing={4}>
              {navlinks.map((link, index) => (
                <Box key={index}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "#FFFFFF",
                      fontSize: 15,
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    component={Link}
                    onClick={() => router.push(link.link)}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Stack
          sx={{ my: 5 }}
          justifyContent={"center"}
          direction={"row"}
          spacing={4}
        >
          <Typography
            sx={{ fontSize: 11 }}
            fontFamily={"Poppins"}
            color={"#545C71"}
          >
            Copyright 2023 CarbonCompete. All right reserved.
          </Typography>

          <Typography
            sx={{ fontSize: 11 }}
            fontFamily={"Poppins"}
            color={"#545C71"}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{ fontSize: 11 }}
            fontFamily={"Poppins"}
            color={"#545C71"}
          >
            Terms & Conditions
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterComponent;
