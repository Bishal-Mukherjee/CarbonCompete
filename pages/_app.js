import "../styles/globals.css";
import Head from "next/head";
import { styled } from "@mui/material";
import ThemeProvider from "../theme/index";
import ScrollToTop from "../utils/scrolltop/scrollToTop";
import Header from "../components/Navbar";
import FooterComponent from "../components/Footer";

const APP_BAR_MOBILE = 63;
const APP_BAR_DESKTOP = 91;

const StyledRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
}));

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>CarbonCompete</title>
      </Head>
      <StyledRoot>
        <Header />
        <ScrollToTop />
        <Main>
          <Component {...pageProps} />
        </Main>
        <FooterComponent />
      </StyledRoot>
    </ThemeProvider>
  );
}
