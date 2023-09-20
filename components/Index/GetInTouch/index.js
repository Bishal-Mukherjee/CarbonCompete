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
      .matches(/^[1-9][0-9]{9}$/, "Invalid phone number"),
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
      <section id="bookdemo">
        <Box sx={{ mt: -20 }}>
          <Container>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: 30,
                fontWeight: "bold",
                color: "#082930",
              }}
            >
              Book a demo
            </Typography>
          </Container>

          <Container sx={{ mt: 5 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={5} justifyContent={"center"}>
                <Grid item md={6} sm={6} xs={12}>
                  <StyledInput
                    name={"name"}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    label="Name"
                    variant="standard"
                    sx={{ width: "100%" }}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.errors.name && formik.errors.name}
                  />
                </Grid>

                <Grid item md={6} sm={6} xs={12}>
                  <StyledInput
                    name={"location"}
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    label="Location"
                    variant="standard"
                    sx={{ width: "100%" }}
                    error={
                      formik.touched.location && Boolean(formik.errors.location)
                    }
                    helperText={
                      formik.errors.location && formik.errors.location
                    }
                  />
                </Grid>

                <Grid item md={6} sm={6} xs={12}>
                  <StyledInput
                    name={"email"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    label="Email"
                    variant="standard"
                    sx={{ width: "100%" }}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.errors.email && formik.errors.email}
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
                    label="What are you looking for?"
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

        <Stack sx={{ mt: 10 }} justifyContent={"center"} alignItems={"center"}>
          <Box
            sx={{
              bgcolor: "#F4F4F4",
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
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Subscribe To Our Blog
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
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
                  <StyledInput
                    name={"email"}
                    value={BlogFormik.values.email}
                    onChange={BlogFormik.handleChange}
                    label="Email"
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
      </section>
    </>
  );
};

export default GetInTouchComponent;
