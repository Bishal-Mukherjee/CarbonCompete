import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  CircularProgress,
  Grid,
  Stack,
  Typography,
  TextField,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { contactUsReq } from "../../services/apis";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#149BA1",
  border: "1px solid #149BA1",
  borderRadius: 0,
  width: 110,
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

const ContactComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });
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
    message: yup.string().required("*required"),
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
    onSubmit: async () => {
      try {
        setIsLoading(true);
        const response = await contactUsReq({ ...formik.values });
        setIsLoading(false);
        if (response.message === "success") {
          setMessage({
            type: "success",
            text: "Your response was saved. We will reach out to you soon!",
          });
        } else {
          setMessage({
            type: "error",
            text: "Error! Please try again",
          });
        }
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
        setMessage({
          type: "error",
          text: "Error! Please try again",
        });
      }
    },
  });

  return (
    <Box>
      <Box className={"container"}>
        <Stack direction={"column"} spacing={5}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              How can we help you?
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: 30,
                fontWeight: "light",
                textAlign: "center",
              }}
            >
              We always want to hear from you! <br /> Let us know if there is
              anything that we can help you with.
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: "translate(0%, -20%)",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: 800,
            p: 1,
          }}
          component={Paper}
        >
          {contactcard.map((contact, index) => (
            <Grid item md={4} sm={12} xs={12} key={index}>
              <ContactCard {...contact} />
            </Grid>
          ))}
        </Grid>
      </Box> */}

      <Container>
        <Typography
          textAlign={"center"}
          fontFamily={"Poppins"}
          fontSize={25}
          fontWeight={"bold"}
          sx={{ mt: 5 }}
        >
          Contact Us
        </Typography>
        <Typography
          textAlign={"center"}
          mt={5}
          fontFamily={"Poppins"}
          fontSize={20}
        >
          For further questions, including partnership opportunities, please
          email info@carboncompete.com or contact using our contact form.
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
                label="Work E-Mail"
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
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.errors.message && formik.errors.message}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }}>
            <StyledButton type="submit" disabled={isLoading}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1}
              >
                {isLoading && (
                  <CircularProgress size={18} sx={{ color: "#149BA1" }} />
                )}
                <span>Contact</span>
              </Stack>
            </StyledButton>

            {message.type && (
              <Alert
                severity={message.type}
                sx={{ mt: 1, fontFamily: "Poppins" }}
              >
                {message.text}
              </Alert>
            )}
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default ContactComponent;
