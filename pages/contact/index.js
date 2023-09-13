import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as yup from "yup";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#149BA1",
  border: "1px solid #149BA1",
  borderRadius: 0,
  width: 100,
  height: 40,
  textTransform: "capitalize",
  fontFamily: "Wix MadeFor Display",
}));

const ContactCard = ({ icon, label, details }) => (
  <Box sx={{ height: 170 }}>
    <Stack direction={"column"} alignItems={"center"} spacing={3}>
      <Box height={30}>
        <Icon icon={icon} color={"#05D776"} width={50} />
      </Box>

      <Box height={25}>
        <Typography
          sx={{
            fontFamily: "Wix MadeFor Display",
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          {label}
        </Typography>
      </Box>

      <Box height={5}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Wix MadeFor Display",
            fontWeight: "light",
            fontSize: 15,
          }}
        >
          {details}
        </Typography>
      </Box>
    </Stack>
  </Box>
);

const ContactComponent = () => {
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

  const contactcard = [
    {
      icon: "mingcute:phone-call-line",
      label: "Call Us",
      details: "9486084342",
    },
    {
      icon: "tabler:mail",
      label: "Mail Us",
      details: "info@carboncompete.com",
    },
    {
      icon: "fluent:location-28-regular",
      label: "Location",
      details: "5, 8th Floor, RR Tower, Guindy, Chennai, 600032",
    },
  ];
  return (
    <Box>
      <Box className={"container"}>
        <Stack direction={"column"} spacing={5}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Wix MadeFor Display",
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
                fontFamily: "Wix MadeFor Display",
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

      <Box
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
      </Box>

      <Container>
        <Typography
          textAlign={"center"}
          fontFamily={"Wix MadeFor Display"}
          fontSize={25}
          fontWeight={"bold"}
        >
          Contact Us
        </Typography>
        <Typography
          textAlign={"center"}
          mt={5}
          fontFamily={"Wix MadeFor Display"}
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
              <TextField
                name={"name"}
                value={formik.values.name}
                onChange={formik.handleChange}
                label="Full Name"
                variant="filled"
                sx={{ width: "100%" }}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.errors.name && formik.errors.name}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <TextField
                name={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                label="Work E-Mail"
                variant="filled"
                sx={{ width: "100%" }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.errors.email && formik.errors.email}
              />
            </Grid>

            <Grid item md={6} sm={6} xs={12}>
              <TextField
                name={"companyname"}
                value={formik.values.companyname}
                onChange={formik.handleChange}
                label="Company Name"
                variant="filled"
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
              <TextField
                name={"phonenumber"}
                value={formik.values.phonenumber}
                onChange={formik.handleChange}
                label="Phone Number"
                variant="filled"
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
                label="How can we help you?"
                variant="filled"
                sx={{ width: "100%" }}
                multiline
                rows={4}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }}>
            <StyledButton type="submit">Contact</StyledButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default ContactComponent;
