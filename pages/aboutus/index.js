import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Grid,
  Divider,
  Paper,
  Stack,
  Typography,
  FormHelperText,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import useResponsive from "../../hooks/useResponsive";
import Features from "../../assets/svg/product/features.svg";

const JoinUsCard = ({ redirect }) => (
  <Card>
    <CardContent sx={{ bgcolor: "#003A3C", height: 310 }}>
      <Typography
        fontFamily={"Wix MadeFor Display"}
        gutterBottom
        variant="h2"
        component="div"
        color={"#FFFFFF"}
      >
        {"You?"}
      </Typography>

      <Typography variant="body1" component="div" color={"#FFFFFF"}>
        {"Join us"}
      </Typography>
    </CardContent>

    <CardActions sx={{ height: 105 }}>
      <Button
        sx={{
          bgcolor: "#003A3C",
          color: "#FFFFFF",
          ":hover": {
            bgcolor: "#FFFFFF",
            color: "#000000",
          },
        }}
        onClick={() => redirect()}
      >
        Reach out
      </Button>
    </CardActions>
  </Card>
);

const MemberCard = ({ name, image, designation, email, linkedIn }) => (
  <Card>
    <CardMedia component="img" height="250" image={image} alt={name} />

    <CardContent>
      <Typography
        fontFamily={"Wix MadeFor Display"}
        gutterBottom
        variant="h5"
        component="div"
      >
        {name}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {designation}
      </Typography>
    </CardContent>

    <CardActions>
      <Stack direction={"row"} spacing={2}>
        <IconButton href={`mailto:${email}`}>
          <Icon icon={"ic:round-mail"} width={25} />
        </IconButton>

        <IconButton href={linkedIn}>
          <Icon icon={"mdi:linkedin"} width={25} />
        </IconButton>
      </Stack>
    </CardActions>
  </Card>
);

const ContentSegment = ({ header, pdescription, sdescription }) => (
  <Box>
    <Stack direction={"column"} justifyContent={"center"}>
      <Typography
        fontFamily={"Wix MadeFor Display"}
        fontWeight={900}
        fontSize={30}
        color={"#082930"}
      >
        {header}
      </Typography>

      <Typography
        sx={{ mt: 2 }}
        fontFamily={"Wix MadeFor Display"}
        fontSize={20}
      >
        {pdescription}
      </Typography>

      <Typography
        sx={{ mt: 2 }}
        fontFamily={"Wix MadeFor Display"}
        fontSize={20}
      >
        {sdescription}
      </Typography>
    </Stack>
  </Box>
);

const AboutusComponent = () => {
  const mdUp = useResponsive("up", "md");
  const router = useRouter();

  const members = [
    {
      name: "Sunder Kannan ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      designation: "Founder & CEO",
      email: "",
      linkedIn: "",
    },
    {
      name: "Augusto Piazza",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      designation: "Co-Founder & CFO",
      email: "",
      linkedIn: "",
    },
    {
      name: "Dr. Vishwakarma J S",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      designation: "CTO",
      email: "",
      linkedIn: "",
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <div className={"container"}>
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
            We will help you to <br /> solve problem.
          </Typography>
        </Box>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          transform: "translate(0%, -50%)",
        }}
      >
        <Box sx={{ p: 5 }} width={550} component={Paper}>
          <Stack direction={"row"} spacing={4}>
            <Box>
              <Divider
                orientation={"vertical"}
                sx={{ borderColor: "#149BA1" }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontFamily: "Wix MadeFor Display", color: "#149BA1" }}
              >
                CarbonCompete brings innovative and critical changes in the
                product supply chain to support sustainability, enabling
                industries to drive competition and return on investment while
                reducing carbon emissions.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Container>
        <Grid container spacing={8}>
          <Grid item md={6} sm={12} xs={12}>
            <Stack direction={"column"} spacing={4}>
              <ContentSegment
                header={"Mission"}
                pdescription={
                  "CarbonCompete brings innovative and critical changes in the product supply chain to support sustainability, enabling industries to drive competition and return on investment while reducing carbon emissions."
                }
              />

              <ContentSegment
                header={"Business Model"}
                pdescription={
                  "CarbonCompete brings innovative and critical changes in the product supply chain to support sustainability, enabling industries to drive competition and return on investment while reducing carbon emissions."
                }
                sdescription={
                  "CarbonCompete is an enterprise software-as-a-service business and offers its platform with an annual license per user agreement model. From an existing client, CarbonCompete aims to onboard its clients upstream suppliers and downstream partners to build a thorough carbon accounting solution."
                }
              />
            </Stack>
          </Grid>

          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            display={"flex"}
            alignItems={"center"}
          >
            <img src={"/images/ProblemImg.png"} />
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: 15 }}>
        <Stack direction={"column"} spacing={2}>
          <Typography
            fontFamily={"Wix MadeFor Display"}
            fontWeight={900}
            fontSize={30}
            color={"#082930"}
          >
            Management Team
          </Typography>

          <FormHelperText sx={{ fontSize: 20, color: "#05D776" }}>
            Meet our team
          </FormHelperText>
        </Stack>

        <Grid container spacing={4}>
          <Grid item md={4} sm={12} xs={12}>
            <Stack sx={{ height: "100%" }} direction={"column"} spacing={5}>
              <Box sx={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: "#F3F3F3",
                    borderLeft: "solid 1.5px #152935",
                  }}
                >
                  <Stack
                    direction={"column"}
                    justifyContent={"center"}
                    // alignItems={"center"}
                    height={"100%"}
                    spacing={5}
                    sx={{ p: 2 }}
                  >
                    <Box>
                      <Typography fontSize={40} color={"#082930"}>
                        With <br /> Passion,
                      </Typography>

                      <Typography
                        mt={1}
                        fontSize={40}
                        fontWeight={"bold"}
                        color={"#082930"}
                      >
                        Heart <br /> & Soul
                      </Typography>
                    </Box>

                    <Box>
                      <Button
                        sx={{
                          color: "white",
                          fontWeight: 900,
                          width: 200,
                          height: 50,
                          bgcolor: "#149BA1",
                          mt: 2,
                          ":hover": {
                            bgcolor: "#149BA1",
                          },
                        }}
                        onClick={() => router.push("/contact")}
                      >
                        Contact Us{" "}
                        <Icon icon={"ic:round-arrow-right"} width={30} />
                      </Button>
                    </Box>

                    <Stack direction={"row"} spacing={5}>
                      <Box>
                        <Typography
                          color={"#152935"}
                          fontFamily={"Wix MadeFor Display"}
                          fontWeight={900}
                        >
                          Call Us:
                        </Typography>
                        <Typography
                          color={"#152935"}
                          fontFamily={"Wix MadeFor Display"}
                        >
                          9486084342
                        </Typography>
                      </Box>

                      <Box>
                        <Typography
                          color={"#152935"}
                          fontFamily={"Wix MadeFor Display"}
                          fontWeight={900}
                        >
                          Mail Us:
                        </Typography>
                        <Typography
                          color={"#152935"}
                          fontFamily={"Wix MadeFor Display"}
                        >
                          info@carboncompete.com
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid item md={8} sm={12} xs={12}>
            <Grid container spacing={1}>
              {members.map((member, index) => (
                <Grid item md={4} sm={12} xs={12} key={index}>
                  <MemberCard {...member} />
                </Grid>
              ))}
              <Grid item md={4} sm={12} xs={12}>
                <JoinUsCard redirect={() => router.push("/contact")} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: 15 }}>
        <Grid container spacing={6}>
          <Grid item md={6} sm={12} xs={12}>
            <Stack direction={"column"} spacing={3}>
              <Typography
                fontFamily={"Wix MadeFor Display"}
                fontSize={30}
                fontWeight={800}
              >
                Why Choose Us?
              </Typography>

              <Typography fontFamily={"Wix MadeFor Display"} fontSize={20}>
                CarbonCompete brings innovative and critical changes in the
                product supply chain to support sustainability, enabling
                industries to drive competition and return on investment while
                reducing carbon emissions. CarbonCompete brings innovative and
                critical changes in the product supply chain to support
                sustainability, enabling industries to drive competition and
                return on investment while reducing carbon emissions.
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Features
              {...(mdUp
                ? { width: 500, height: 500, viewBox: "0 0 600 600" }
                : { width: 400, height: 400, viewBox: "0 0 700 750" })}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutusComponent;
