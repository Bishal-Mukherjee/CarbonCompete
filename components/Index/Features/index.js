import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Accounting from "../../../assets/svg/accounting/accounting.svg";
import Automation from "../../../assets/svg/automation/automation.svg";

const FeaturesComponent = () => {
  return (
    <>
      <Box sx={{ py: 1 }}>
        <Container sx={{ mt: 10 }}>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            spacing={8}
          >
            <Grid item md={5} sm={12} xs={12}>
              <Stack spacing={8} direction={"column"} sx={{ height: "100%" }}>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: 30,
                    fontFamily: "Wix MadeFor Display",
                    fontWeight: 900,
                  }}
                >
                  Lack of Scope 3 Accounting
                </Typography>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: 20,
                    fontFamily: "Wix MadeFor Display",
                    textAlign: "justify",
                  }}
                >
                  Scope 3 emissions account for highest proportion of emissions
                  of a company’s emissions however, they are often the hardest
                  emissions to account for. Although many ecosystem players want
                  to increase their scope of accounting, they lack proper
                </Typography>
              </Stack>
            </Grid>

            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Accounting width={600} height={400} viewBox="0 0 600 700" />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 3, bgcolor: "#F0F1F2" }}>
        <Container>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 450,
              }}
            >
              <Automation width={800} height={800} viewBox="0 0 1000 800" />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <Stack spacing={6} direction={"column"} sx={{ height: "100%" }}>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: "40px",
                    fontFamily: "Wix MadeFor Display",
                    fontWeight: 900,
                  }}
                >
                  Lack Of Automation
                </Typography>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: 20,
                    fontFamily: "Wix MadeFor Display",
                    textAlign: "justify",
                  }}
                >
                  Current life cycle assessment reporting is costly, laborious,
                  and time-consuming process which yields referential data
                  rather than real-time data.In addition, product life cycle
                  assessment reports are often analogous to financial models,
                  often employing a top-down method for life cycle assessment.
                  These factors degrade the veracity of current product LCA
                  reports, becoming a tool purely for sustainability reporting.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FeaturesComponent;
