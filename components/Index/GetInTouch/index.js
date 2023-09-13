import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import RockSvg from "../../../assets/svg/Rock.svg";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#149BA1",
  border: "1px solid #149BA1",
  borderRadius: 0,
  width: 100,
  height: 40,
  textTransform: "capitalize",
  fontFamily: "Wix MadeFor Display",
}));

const GetInTouchComponent = () => {
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
    location: yup.string().required("*required"),
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
      location: "",
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

  const BlogFormik = useFormik({
    validationSchema: yup.object({
      email: yup
        .string()
        .required("*required")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email"
        )
        .required("*required"),
    }),
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      console.log("Subscribed blogs ", BlogFormik.values.email);
    },
  });

  return (
    <>
      <Box>
        <Container>
          <Typography
            sx={{
              fontFamily: "Wix MadeFor Display",
              fontSize: 30,
              fontWeight: "bold",
              color: "#082930",
            }}
          >
            Get in touch
          </Typography>
        </Container>

        <Container sx={{ mt: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={5} justifyContent={"center"}>
              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"name"}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  label="Your Name"
                  variant="standard"
                  sx={{ width: "100%" }}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.errors.name && formik.errors.name}
                />
              </Grid>

              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"location"}
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  label="Your location"
                  variant="standard"
                  sx={{ width: "100%" }}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.errors.location && formik.errors.location}
                />
              </Grid>

              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  label="Your Email"
                  variant="standard"
                  sx={{ width: "100%" }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.errors.email && formik.errors.email}
                />
              </Grid>

              <Grid item md={6} sm={6} xs={12}>
                <TextField
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
                <TextField
                  name={"message"}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  label="Write your message"
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

      <Box>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Box>
            <RockSvg width={600} height={800} />
          </Box>

          <Box
            sx={{
              bgcolor: "#F4F4F4",
              width: "100%",
              position: "absolute",
              width: "80%",
              p: 5,
            }}
          >
            <Stack
              spacing={5}
              sx={{ p: 2 }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  fontFamily: "Wix MadeFor Display",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Subscribe To Our Blog
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Wix MadeFor Display",
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                Join our subscribers list to get the latest news, <br /> updates
                and special
              </Typography>
            </Stack>

            <form onSubmit={BlogFormik.handleSubmit}>
              <Stack
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                direction={"column"}
                spacing={3}
              >
                <Box sx={{ width: "50%" }}>
                  <TextField
                    name={"email"}
                    value={BlogFormik.values.email}
                    onChange={BlogFormik.handleChange}
                    label="Your Email"
                    variant="standard"
                    sx={{ width: "100%" }}
                    error={
                      BlogFormik.touched.email &&
                      Boolean(BlogFormik.errors.email)
                    }
                    helperText={
                      BlogFormik.errors.email && BlogFormik.errors.email
                    }
                  />
                </Box>

                <Box sx={{ width: "50%" }}>
                  <StyledButton type="submit">Submit</StyledButton>
                </Box>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default GetInTouchComponent;
