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
  MenuItem,
  FormHelperText,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { FileUploader } from "react-drag-drop-files";

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
  variant: "standard",
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

const CareersComponent = () => {
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
    phonenumber: yup
      .string()
      .matches(/^[1-9][0-9]{9}$/, "Invalid phone number")
      .required("*required"),
    expectedctc: yup.number().required("*required"),
    applieddesignation: yup.string().required("*required"),
    resumeurl: yup.string().required("*required"),
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      expectedctc: "",
      applieddesignation: "",
      resumeurl: "",
      skillset: "",
    },
    onSubmit: () => {
      try {
        console.log(formik.values);
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  const jobopenings = [
    {
      label: "Marketing Manager",
      link: "",
    },
    {
      label: "Jr. Fulstack Developer",
      link: "",
    },
    {
      label: "Dev Ops Engineer",
      link: "",
    },
  ];

  const handleJobSelect = (tempJob) => {
    try {
      formik.setValues({
        ...formik.values,
        applieddesignation: tempJob,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleResumeUpload = (tempFile) => {
    try {
      // upload the file and get the public url
      console.log(tempFile);
    } catch (err) {
      console.log(err);
    }
  };

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
              We're more than just a workplace. <br /> We're a family.
            </Typography>
          </Stack>
        </Box>
      </div>

      <Container sx={{ transform: "translate(0%, -20%)" }}>
        <Grid container spacing={3}>
          {jobopenings.map((job, index) => (
            <Grid item md={4} sm={6} xs={6}>
              <Card sx={{ height: 300, borderRadius: 0 }}>
                <CardContent sx={{ height: 240 }}>
                  <Typography fontFamily={"Poppins"} fontWeight={900}>
                    {job.label}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    href={"#jobopeningform"}
                    onClick={() => handleJobSelect(job.label)}
                    sx={{ color: "#000000" }}
                  >
                    Apply
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Can't find what you're looking for?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 25,
            textAlign: "center",
            mt: 5,
          }}
        >
          Register Here and get notified when new roles that <br /> match your
          skills open up.
        </Typography>
      </Container>

      <Container sx={{ mt: 10 }} id="jobopeningform">
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
                multiline
                rows={2}
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
                multiline
                rows={2}
              />
            </Grid>

            <Grid item md={6} sm={6} xs={12}>
              <StyledInput
                name={"expectedctc"}
                value={formik.values.expectedctc}
                onChange={formik.handleChange}
                label="Expected CTC"
                variant="standard"
                sx={{ width: "100%" }}
                error={
                  formik.touched.expectedctc &&
                  Boolean(formik.errors.expectedctc)
                }
                helperText={
                  formik.errors.expectedctc && formik.errors.expectedctc
                }
                multiline
                rows={2}
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
                multiline
                rows={2}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <StyledInput
                select
                name={"applieddesignation"}
                value={formik.values.applieddesignation}
                onChange={formik.handleChange}
                label="Choose job opening"
                variant="filled"
                sx={{ width: "100%" }}
                error={
                  formik.touched.applieddesignation &&
                  Boolean(formik.errors.applieddesignation)
                }
                helperText={
                  formik.errors.applieddesignation &&
                  formik.errors.applieddesignation
                }
              >
                {jobopenings.map((j, index) => (
                  <MenuItem key={index} value={j.label}>
                    {j.label}
                  </MenuItem>
                ))}
              </StyledInput>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <StyledInput
                name={"skillset"}
                value={formik.values.skillset}
                onChange={formik.handleChange}
                label="Describe your skill set..."
                variant="standard"
                sx={{ width: "100%" }}
                multiline
                rows={4}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Box sx={{ mt: -1 }}>
                <FormHelperText
                  sx={{
                    color: Boolean(formik.errors.applieddesignation)
                      ? "red"
                      : "grey",
                  }}
                >
                  Upload your resume
                </FormHelperText>
                <FileUploader
                  multiple={false}
                  handleChange={(file) => handleResumeUpload(file)}
                  name="file"
                  types={["PDF"]}
                />
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }}>
            <StyledButton type="submit">Apply</StyledButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default CareersComponent;
