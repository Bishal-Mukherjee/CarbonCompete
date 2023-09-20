import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  CardActions,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Whitepaper from "../../assets/svg/whitepaper/whitepaper.svg";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#149BA1",
  border: "1px solid #149BA1",
  borderRadius: 0,
  width: 100,
  height: 40,
  textTransform: "capitalize",
  fontFamily: "Poppins",
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  "& label.Mui-focused": {
    color: "#10a997",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#10a997",
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "Poppins",
    fontWeight: 500,
  },
}));

const WhitepaperComponent = () => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("*required")
      .matches(/^[a-zA-Z\s]*$/, "Special characters are not allowed"),
    email: yup
      .string()
      .required("*required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email"
      )
      .required("*required"),
    companyname: yup.string().required("*required"),
    phonenumber: yup
      .string()
      .matches(/^[1-9][0-9]{9}$/, "Invalid phone number")
      .required("*required"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      email: "",
      companyname: "",
      phonenumber: "",
      message: "",
    },
    onSubmit: () => {
      try {
        console.log(formik.values);
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  const content = [
    {
      description: "Carbon compete Calculating methodology",
      link: "https://www.dropbox.com/scl/fi/2giukk3y3lbpwfonsi5gs/Whitepaper.pdf?rlkey=qmnpfkq8n89shdesnp35s14cy&dl=0&raw=1",
    },
    {
      description: "Carbon compete Calculating methodology",
      link: "https://www.dropbox.com/scl/fi/2giukk3y3lbpwfonsi5gs/Whitepaper.pdf?rlkey=qmnpfkq8n89shdesnp35s14cy&dl=0&raw=1",
    },
    {
      description: "Carbon compete Calculating methodology",
      link: "https://www.dropbox.com/scl/fi/2giukk3y3lbpwfonsi5gs/Whitepaper.pdf?rlkey=qmnpfkq8n89shdesnp35s14cy&dl=0&raw=1",
    },
  ];

  return (
    <Box>
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
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: 35,
                textAlign: "center",
              }}
            >
              Comprehensive white papers, guides, and reports about <br />{" "}
              carbon accounting.
            </Typography>
          </Stack>
        </Box>
      </div>

      <Container sx={{ transform: "translate(0%, -20%)" }}>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <Grid item md={4} sm={6} xs={6}>
            <Card sx={{ height: 400, borderRadius: 0 }}>
              <CardContent
                sx={{
                  display: "flex",
                  //   justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                  Carbon Compete
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                  Calculation Methodology
                </Typography>
                <Whitepaper />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: -5 }}>
        <Typography
          textAlign={"left"}
          mt={5}
          fontFamily={"Poppins"}
          fontSize={20}
        >
          Enter your details and get Carbon Compete White Paper
        </Typography>
      </Container>

      <Container sx={{ mt: 10 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={5} justifyContent={"center"}>
            <Grid item md={6} sm={6} xs={12}>
              <StyledInput
                name={"name"}
                value={formik.values.name}
                onChange={formik.handleChange}
                label="Full Name"
                variant="standard"
                sx={{ width: "100%" }}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.errors.name && formik.errors.name}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <StyledInput
                name={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                label="Work Email"
                variant="standard"
                sx={{ width: "100%" }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.errors.email && formik.errors.email}
              />
            </Grid>

            <Grid item md={6} sm={6} xs={12}>
              <StyledInput
                name={"companyname"}
                value={formik.values.companyname}
                onChange={formik.handleChange}
                label="Company Name"
                variant="standard"
                sx={{ width: "100%" }}
                error={
                  formik.touched.companyname &&
                  Boolean(formik.errors.companyname)
                }
                helperText={
                  formik.errors.companyname && formik.errors.companyname
                }
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <StyledInput
                name={"phonenumber"}
                value={formik.values.phonenumber}
                onChange={formik.handleChange}
                label="Phone Number"
                variant="standard"
                sx={{ width: "100%" }}
                error={
                  formik.touched.phonenumber &&
                  Boolean(formik.errors.phonenumber)
                }
                helperText={
                  formik.errors.phonenumber && formik.errors.phonenumber
                }
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <StyledInput
                name={"message"}
                value={formik.values.message}
                onChange={formik.handleChange}
                label="How can we help you?"
                variant="standard"
                sx={{ width: "100%" }}
                multiline
                rows={4}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }}>
            <StyledButton type="submit">Submit</StyledButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default WhitepaperComponent;
