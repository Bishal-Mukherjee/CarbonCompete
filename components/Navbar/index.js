// import PropTypes from "prop-types";
// @mui
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Grid,
  Button,
  Slide,
  styled,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { usePathname, useRouter } from "next/navigation";

// utils
// import { bgBlur } from "../../utils/cssStyles";

import useResponsive from "../../hooks/useResponsive";

// components
import CarbonCompete from "../../assets/svg/footer/footerlogo.svg";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

const StyledLink = styled("p")(({ theme }) => ({
  fontFamily: "Poppins",
  cursor: "pointer",
  fontSize: 15,
  textDecorationThickness: 5,
  color: "#FFFFFF",
  textUnderlineOffset: 5,
  borderRadius: 50,
  padding: 5,
  width: 125,
  textAlign: "center",
  ":hover": {
    backgroundColor: "#55828b",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  width: 100,
  height: 40,
  textTransform: "capitalize",
  fontFamily: "Poppins",
}));

const NAV_WIDTH = 280;

const HEADER_MOBILE = 66;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  // ...bgBlur({ color: theme.palette.background.default }),
  width: "100%",
  boxShadow: "none",
  //   transition: "display 0.3s ease",
  //   boxShadow: "5px 4px 5px #000000",
  //   [theme.breakpoints.up("lg")]: {
  //     width: "100%",
  //   },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "#edf6f9",
  width: "100%",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "center",
  //   [theme.breakpoints.up("lg")]: {
  //     minHeight: HEADER_DESKTOP,
  //     padding: theme.spacing(0, 5),
  //   },
}));

// ----------------------------------------------------------------------

// Header.propTypes = {
//   onOpenNav: PropTypes.func,
// };

export default function Header({ onOpenNav }) {
  const pathname = usePathname();
  const router = useRouter();
  const mdUp = useResponsive("up", "md");

  const trigger = useScrollTrigger();

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navlinks = [
    { label: "Home", loc: "/", index: 0 },
    { label: "Product", loc: "/product", index: 1 },
    { label: "Whitepaper", loc: "/whitepaper", index: 2 },
    { label: "About Us", loc: "/aboutus", index: 3 },
    { label: "Contact", loc: "/contact", index: 4 },
    { label: "Resources", loc: "/careers", index: 5 },
  ];

  const handlePageChange = () => {
    try {
      const tempindex = navlinks.filter((r) => r.loc === pathname)[0].index;
      setSelectedIndex(tempindex);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handlePageChange();
  }, [pathname]);

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      <StyledRoot>
        <StyledToolbar className={"navcontainer"}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "space-evenly", alignItems: "center", px: 5 }}
          >
            <Grid item md={2}>
              <Box
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  router.push("/");
                }}
              >
                <CarbonCompete viewBox={"0 0 500 80"} />
              </Box>
            </Grid>

            <Grid
              item
              md={8}
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                {navlinks.map((navlink, i) => (
                  <StyledLink
                    sx={{
                      textDecoration:
                        i === selectedIndex ? "underline" : "none",
                      fontWeight: i === selectedIndex ? "bold" : "light",
                    }}
                    key={i}
                    onClick={() => router.push(navlink.loc, { scroll: false })}
                  >
                    {navlink.label}
                  </StyledLink>
                ))}
              </Stack>
            </Grid>

            <Grid
              item
              md={2}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <StyledButton
                sx={{ border: "1px solid #FFFFFF", width: "auto" }}
                href="/#bookdemo"
              >
                Request Demo
              </StyledButton>
            </Grid>
          </Grid>
        </StyledToolbar>
      </StyledRoot>
    </Slide>
  );
}
