// import PropTypes from "prop-types";
// @mui
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  styled,
  Typography,
  Button,
} from "@mui/material";

import { usePathname, useRouter } from "next/navigation";

// utils
// import { bgBlur } from "../../utils/cssStyles";

import useResponsive from "../../hooks/useResponsive";

// components
import PhoneIcon from "../../assets/svg/navbar/phone.svg";
import MailIcon from "../../assets/svg/navbar/mail.svg";
import MenuIcon from "../../assets/svg/navbar/menu.svg";
import LanguageTranslator from "../../assets/svg/navbar/language-translator.svg";
// import navbg from "../../public/images/navbg.jpeg";
import { useEffect, useState } from "react";

import CarbonCompete from "../../assets/svg/CarbonCompete.svg";

// ----------------------------------------------------------------------

const StyledLink = styled("p")(({ theme }) => ({
  fontFamily: "Wix Madefor Display",
  cursor: "pointer",
  fontSize: 15,
  textDecorationThickness: 3,
  color: "#FFFFFF",
  textUnderlineOffset: 5,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  //   border: "3px solid #00C9D2",
  //   backgroundColor: "rgba(0, 0, 0, 0.40)",
  width: 100,
  height: 40,
  textTransform: "capitalize",
  fontFamily: "Wix MadeFor Display",
}));

const NAV_WIDTH = 280;

const HEADER_MOBILE = 66;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  // ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  width: "100%",
  boxShadow: "5px 4px 5px #000000",
  //   [theme.breakpoints.up("lg")]: {
  //     width: "100%",
  //   },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  height: 85,
  backgroundColor: "#149BA1",
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

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navlinks = [
    { label: "Home", loc: "/", index: 0 },
    { label: "Product", loc: "/product", index: 1 },
    { label: "Whitepaper", loc: "/whitepaper", index: 2 },
    { label: "About Us", loc: "/aboutus", index: 3 },
    { label: "Contact", loc: "/contact", index: 4 },
    { label: "Careers", loc: "/careers", index: 5 },
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
    <StyledRoot>
      <StyledToolbar className={"navcontainer"}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <CarbonCompete />
            <Typography
              sx={{
                fontFamily: "Wix MadeFor Display",
                fontWeight: 900,
                ml: 1.5,
                fontSize: 20,
              }}
            >
              Carbon
              <br />
              Compete
            </Typography>
          </Stack>

          <Box>
            <IconButton
              onClick={onOpenNav}
              sx={{
                mr: 1,
                color: "text.primary",
                display: { lg: "none", xs: "block", sm: "block" },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Stack>

        <Box sx={{ flexGrow: 0.5 }} />

        <Stack direction={"row"}>
          <Box mr={1}>
            <Typography sx={{ fontSize: 15 }}>French</Typography>
          </Box>

          <Box>
            <LanguageTranslator />
          </Box>

          <Box ml={1}>
            <Typography
              sx={{
                textDecoration: "underline",
                textDecorationThickness: 3,
                textUnderlineOffset: 5,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              English
            </Typography>
          </Box>
        </Stack>
      </StyledToolbar>

      <StyledToolbar
        sx={{
          display: { lg: "flex", sm: "none", xs: "none" },
          height: 70,
          // boxShadow: "5px 5px 5px #000000",
        }}
      >
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none", xs: "block", sm: "block" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          width={"50%"}
          sx={{ display: { lg: "flex", xs: "none", sm: "none" } }}
        >
          {navlinks.map((navlink, i) => (
            <StyledLink
              sx={{
                textDecoration: i === selectedIndex ? "underline" : "none",
                fontWeight: i === selectedIndex ? "bold" : "light",
              }}
              key={i}
              onClick={() => router.push(navlink.loc, { scroll: false })}
            >
              {navlink.label}
            </StyledLink>
          ))}
        </Stack>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction={"row"}
          spacing={6}
          sx={{ display: { lg: "flex", sm: "none", xs: "none" } }}
        >
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ display: { lg: "flex", sm: "none", xs: "none" } }}
          >
            <StyledButton>Login</StyledButton>

            <StyledButton sx={{ border: "1px solid #FFFFFF" }}>
              Let's chat
            </StyledButton>
          </Stack>
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
