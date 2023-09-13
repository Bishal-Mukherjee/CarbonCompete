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

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#149BA1",
  border: "1px solid #149BA1",
  borderRadius: 0,
  width: 100,
  height: 40,
  textTransform: "capitalize",
  fontFamily: "Wix MadeFor Display",
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
                fontFamily: "Wix MadeFor Display",
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
        <Grid container spacing={3}>
          {content.map((content, index) => (
            <Grid item md={4} sm={6} xs={6}>
              <Card sx={{ height: 300, borderRadius: 0 }}>
                <CardContent sx={{ height: 240 }}>
                  <Typography>{content.description}</Typography>
                </CardContent>

                <CardActions>
                  <Button
                    href={content.link}
                    target="__blank"
                    sx={{ color: "#000000" }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container sx={{ mt: -5 }}>
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

      <Container sx={{ mt: 10 }}>
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
            <StyledButton type="submit">Submit</StyledButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default WhitepaperComponent;
